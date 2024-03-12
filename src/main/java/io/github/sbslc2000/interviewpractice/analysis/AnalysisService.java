package io.github.sbslc2000.interviewpractice.analysis;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.sbslc2000.interviewpractice.analysis.dto.AnalysisResult;
import io.github.sbslc2000.interviewpractice.chatgpt.*;
import io.github.sbslc2000.interviewpractice.quiz.Quiz;
import io.github.sbslc2000.interviewpractice.quiz.QuizRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * 답변을 분석하는 서비스
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class AnalysisService {

    private final ChatGPTClient chatGPTClient;
    private final QuizRepository quizRepository;
    private final ObjectMapper objectMapper;

    private static final String SYSTEM_PROMPT_MESSAGE = "You are an interviewer hiring a developer. You need to evaluate the user's answer, write model answers, and carry out additional tasks. \n" +
            "The input is composed of two parts. The first part is a question, which contains content related to development. The second part is an answer, containing the user's response to the above question.\n"
            + "\n"
            + "You are required to analyze the user's response based on these two inputs. The elements to analyze include:\n"
            + "\n"
            + "Whether the user has correctly answered the question.\n"
            + "If there are any mistakes in the user's response.\n"
            + "If there are any deficiencies in the user's response.\n" +
            " You don't need to check the grammar or spelling of the user's answer.\n"
            + "Additionally, you need to formulate 'follow-up questions' based on the user's response. 'Follow-up questions' are commonly used in developer interviews, and involve asking more detailed questions based on the content of the user's response.\n"
            + "\n"
            + "You must provide the analyzed content in an exact format. The format is a JSON string and follows these specific requirements:\n"
            + "\n"
            + "exampleAnswer: You should show an best answer to the input question. It should not exceed 500 characters. Please write what you think is the best answer, freely and very detailed.\n" +
            "exampleAnswer does not need to be influenced by the user's Answer. It should serve as a model answer.\n"
            + "review: This should be a comprehensive evaluation of the user's response. It should address whether the user's answer is correct, if there are any mistakes, and what additional points could be mentioned. Please write in detailed\n"
            + "tailQuestion: Write at least three or more detailed follow-up questions based on the user's response(after the ANSWER:). These tail questions must be directly derived from the content of the user's answer.\n" +
            "for example, you can ask like when if question is 'How to reduce the access to the Db?', and the answer is 'I can use caching system to reduce the access of db', then tail questions could be '프로젝트에서 Redis를 사용해본 적이 있나요?' or 'Do you know the LRU algorithm?' or 'Why using cache can reduce the access to db?'.\n" +
            " or you can also ask Key aspects that the user missed in their answer.\n " +
            "Focus more on creating questions from the user's answer. It is also advisable to ask back to confirm if the user truly understands the keywords they mentioned.\n"
            + "\n"
            + "Example:\n"
            + "{\n"
            + "\"exampleAnswer\": \"...\",\n"
            + "\"review\": \"...\",\n"
            + "\"tailQuestions\": [\"...\", \"...\", \"...\"]\n"
            + "}"
            + "Please write all json content in KOREAN!! (exampleAnswer, review, tailQuestions)\n"
            + "and Do not include any special characters in the json string as well like \" because json parsing can make error\n"
            + "and use double quotation in json field name, and value if it is string";

    private static final String USER_PROMPT_MESSAGE = "QUESTION : %s\nANSWER : %s";

    public AnalysisResult analyzeAnswer(Long quizId, String answer) {
        Quiz quiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new IllegalArgumentException("해당 퀴즈가 존재하지 않습니다."));

        ChatGPTRequest request = ChatGPTRequest.of(
                Model.GPT_3_5_TURBO,
                Message.of("system", SYSTEM_PROMPT_MESSAGE),
                Message.of("user", String.format(USER_PROMPT_MESSAGE, quiz.getQuestion(), answer))
        );

        ChatGPTResponse response = chatGPTClient.request(request);

        try {
            return objectMapper.readValue(response.getChoices()[0].getMessage().getContent(), AnalysisResult.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to parse analysis result from ChatGPT response", e);
        }
    }
}

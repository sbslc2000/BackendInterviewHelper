package io.github.sbslc2000.interviewpractice.analysis;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.sbslc2000.interviewpractice.chatgpt.ChatGPTClient;
import io.github.sbslc2000.interviewpractice.chatgpt.ChatGPTRequest;
import io.github.sbslc2000.interviewpractice.chatgpt.ChatGPTResponse;
import io.github.sbslc2000.interviewpractice.chatgpt.Message;
import io.github.sbslc2000.interviewpractice.quiz.Quiz;
import io.github.sbslc2000.interviewpractice.quiz.QuizRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AnalysisService {

    private static final String SYSTEM_PROMPT_MESSAGE = "The input is composed of two parts. The first part is a question, which contains content related to development. The second part is an answer, containing the user's response to the above question.\n"
            + "\n"
            + "You are required to analyze the user's response based on these two inputs. The elements to analyze include:\n"
            + "\n"
            + "Whether the user has correctly answered the question.\n"
            + "If there are any mistakes in the user's response.\n"
            + "If there are any deficiencies in the user's response.\n"
            + "Additionally, you need to formulate 'follow-up questions' based on the user's response. 'Follow-up questions' are commonly used in developer interviews, and involve asking more detailed questions based on the content of the user's response.\n"
            + "\n"
            + "You must provide the analyzed content in an exact format. The format is a JSON string and follows these specific requirements:\n"
            + "\n"
            + "exampleAnswer: You should show an best answer to the input question. It should not exceed 300 characters. Please write what you think is the best answer, freely.\n"
            + "review: This should be a comprehensive evaluation of the user's response. It should address whether the user's answer is correct, if there are any mistakes, and what additional points could be mentioned. Please write in detailed\n"
            + "tailQuestion: Write at least three or more detailed follow-up questions based on the user's response. These tail questions must be directly derived from the content of the user's answer.\n"
            + "\n"
            + "Example:\n"
            + "{\n"
            + "\"exampleAnswer\": \"...\",\n"
            + "\"review\": \"...\",\n"
            + "\"tailQuestions\": [\"...\", \"...\", \"...\"]\n"
            + "}"
            + "Please write json in Korean\n"
            + "and Do not include any special characters in the json string as well like \" because json parsing can make error\n"
            + "and use double quotation in json field name, and value if it is string";

    private static final String USER_PROMPT_MESSAGE = "QUESTION : %s\nANSWER : %s";

    private final ChatGPTClient chatGPTClient;
    private final QuizRepository quizRepository;
    private final ObjectMapper objectMapper;

    public AnalysisResult analyzeAnswer(Long quizId, String answer) {
        Quiz quiz = quizRepository.findById(quizId).orElseThrow(
                () -> new IllegalArgumentException("해당 퀴즈가 존재하지 않습니다."));

        ChatGPTRequest request = ChatGPTRequest.of(
                Message.of("system", SYSTEM_PROMPT_MESSAGE),
                Message.of("user", String.format(USER_PROMPT_MESSAGE, quiz.getQuestion(), answer))
        );

        ChatGPTResponse response = chatGPTClient.request(request);

        response.getChoices()[0].getMessage().getContent();
        try {
            return objectMapper.readValue(response.getChoices()[0].getMessage().getContent(), AnalysisResult.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to parse analysis result from ChatGPT response", e);
        }
    }
}

package io.github.sbslc2000.interviewpractice.chatgpt;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Slf4j
@Component
@RequiredArgsConstructor
public class ChatGPT {

    @Value("${chatgpt.secretkey}")
    private String secretKey;

    private final RestTemplate restTemplate;

    private static final String SYSTEM_PROMPT_MESSAGE = "The input is composed of two parts. The first part is a question, which contains content related to development. The second part is an answer, containing the user's response to the above question.\n" +
            "\n" +
            "You are required to analyze the user's response based on these two inputs. The elements to analyze include:\n" +
            "\n" +
            "Whether the user has correctly answered the question.\n" +
            "If there are any mistakes in the user's response.\n" +
            "If there are any deficiencies in the user's response.\n" +
            "Additionally, you need to formulate 'follow-up questions' based on the user's response. 'Follow-up questions' are commonly used in developer interviews, and involve asking more detailed questions based on the content of the user's response.\n" +
            "\n" +
            "You must provide the analyzed content in an exact format. The format is a JSON string and follows these specific requirements:\n" +
            "\n" +
            "exampleAnswer: You should show an best answer to the input question. It should not exceed 300 characters. Please write what you think is the best answer, freely.\n" +
            "review: This should be a comprehensive evaluation of the user's response. It should address whether the user's answer is correct, if there are any mistakes, and what additional points could be mentioned. Please write in detailed\n" +
            "tailQuestion: This should be a list of follow-up questions based on the user's response. At least 3 questions should be written, but more are acceptable.\n" +
            "\n" +
            "Example:\n" +
            "{\n" +
            "\"exampleAnswer\": \"...\",\n" +
            "\"review\": \"...\",\n" +
            "\"tailQuestions\": [\"...\", \"...\", \"...\"]\n" +
            "}" +
            "Please write json in Korean\n" +
            "and Do not include any special characters in the json string as well like \" because json parsing can make error\n" +
            "and use double quotation in json field name, and value if it is string";

    public ChatGPTResponse request(ChatGPTRequest request) {

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.add("Authorization", "Bearer " + secretKey);

            HttpEntity<ChatGPTRequest> entity = new HttpEntity<>(request, headers);

            ResponseEntity<ChatGPTResponse> res = restTemplate.exchange("https://api.openai.com/v1/chat/completions",
                    HttpMethod.POST,
                    entity,
                    ChatGPTResponse.class
            );

            return res.getBody();
    }


    public ChatGPTResponse request(String request) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.add("Authorization", "Bearer " + secretKey);

        ChatGPTRequest req = ChatGPTRequest.create(
                new Message("system", SYSTEM_PROMPT_MESSAGE),
                new Message("user", request)
        );

        HttpEntity<ChatGPTRequest> entity = new HttpEntity<>(req, headers);

        ResponseEntity<ChatGPTResponse> res = restTemplate.exchange("https://api.openai.com/v1/chat/completions",
                HttpMethod.POST,
                entity,
                ChatGPTResponse.class
        );

        ChatGPTResponse chatGptResponse = res.getBody();

        return chatGptResponse;
    }

}

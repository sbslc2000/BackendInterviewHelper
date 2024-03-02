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
public class ChatGPTClient {

    @Value("${chatgpt.secretkey}")
    private String secretKey;

    private final RestTemplate restTemplate;

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
}

package io.github.sbslc2000.interviewpractice.chatgpt;


import lombok.Data;

import java.util.List;

@Data
public class ChatGPTRequest {
    private String model = "gpt-3.5-turbo";
    private List<Message> messages;

    public static ChatGPTRequest of(Message ... messages) {
        ChatGPTRequest request = new ChatGPTRequest();
        request.setMessages(List.of(messages));
        return request;
    }
}
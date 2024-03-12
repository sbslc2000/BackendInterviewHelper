package io.github.sbslc2000.interviewpractice.chatgpt;


import lombok.Data;

import java.util.List;

@Data
public class ChatGPTRequest {
    private String model;
    private List<Message> messages;

    public static ChatGPTRequest of(Model model, Message ... messages) {
        ChatGPTRequest request = new ChatGPTRequest();
        request.model = model.getModelName();
        request.setMessages(List.of(messages));
        return request;
    }
}
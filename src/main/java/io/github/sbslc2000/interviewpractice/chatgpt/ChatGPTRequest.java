package io.github.sbslc2000.interviewpractice.chatgpt;


import lombok.Data;

import java.util.List;

@Data
public class ChatGPTAskRequest {
    private String model = "gpt-3.5-turbo";
    private List<Message> messages;

    public static ChatGPTAskRequest create(Message ... messages) {
        ChatGPTAskRequest request = new ChatGPTAskRequest();
        request.setMessages(List.of(messages));
        return request;
    }
}
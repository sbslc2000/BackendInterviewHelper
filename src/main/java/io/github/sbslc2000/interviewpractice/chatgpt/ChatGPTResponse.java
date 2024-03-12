package io.github.sbslc2000.interviewpractice.chatgpt;

import lombok.Data;
import lombok.Getter;

@Getter
public class ChatGPTResponse {

    private String id;
    private String object;
    private long created;
    private String model;
    private String system_fingerprint;
    private Choice[] choices;
    private Usage usage;
}

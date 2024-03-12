package io.github.sbslc2000.interviewpractice.chatgpt;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@AllArgsConstructor(staticName = "of")
public class Message {
    private String role;
    private String content;
}

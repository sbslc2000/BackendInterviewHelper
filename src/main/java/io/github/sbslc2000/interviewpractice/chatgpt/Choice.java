package io.github.sbslc2000.interviewpractice.chatgpt;

import lombok.Data;

@Data
public class Choice {
    private int index;
    private Message message;
    private Object logprobs; // 'null' 값을 처리하기 위해 Object 타입 사용
    private String finish_reason;
}

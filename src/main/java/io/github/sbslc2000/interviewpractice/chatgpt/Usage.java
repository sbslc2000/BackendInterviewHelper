package io.github.sbslc2000.interviewpractice.chatgpt;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
public class Usage {
    private int prompt_tokens;
    private int completion_tokens;
    private int total_tokens;
}

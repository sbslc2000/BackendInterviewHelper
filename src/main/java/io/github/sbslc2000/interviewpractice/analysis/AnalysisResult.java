package io.github.sbslc2000.interviewpractice.quiz;

import lombok.Data;

import java.util.List;

@Data
public class AnalysisResult {

    private String exampleAnswer;
    private List<String> tailQuestions;
    private String review;
}

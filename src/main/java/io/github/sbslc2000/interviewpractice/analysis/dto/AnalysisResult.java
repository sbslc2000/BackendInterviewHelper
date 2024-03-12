package io.github.sbslc2000.interviewpractice.analysis.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class AnalysisResult {

    private String exampleAnswer;
    private List<String> tailQuestions;
    private String review;
}

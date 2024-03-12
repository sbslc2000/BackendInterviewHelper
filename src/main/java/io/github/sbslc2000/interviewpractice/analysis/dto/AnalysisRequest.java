package io.github.sbslc2000.interviewpractice.analysis.dto;

import lombok.Getter;

/**
 * 분석 요청에 필요한 정보를 담고 있는 DTO
 */
@Getter
public class AnalysisRequest {

    private Long quizId;
    private String answer;
}

package io.github.sbslc2000.interviewpractice.analysis;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AnalysisController {

    private final AnalysisService analysisService;

    @PostMapping("/api/analysis")
    public AnalysisResult analyzeAnswer(
            @RequestBody AnalysisRequest analysisRequest
    ) {
        return analysisService.analyzeAnswer(analysisRequest.getQuizId(), analysisRequest.getAnswer());
    }
}

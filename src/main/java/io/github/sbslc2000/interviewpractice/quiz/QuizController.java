package io.github.sbslc2000.interviewpractice.quiz;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {

    private final QuizService quizService;

    @GetMapping("/api/quiz")
    public Quiz getQuiz(
            @RequestParam Integer level
    ) {
        return quizService.getRandomQuizByLevel(level);
    }
}

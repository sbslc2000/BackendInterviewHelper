package io.github.sbslc2000.interviewpractice.quiz;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {

    private final QuizService quizService;

    @GetMapping("/api/quiz")
    public Quiz getQuiz(
            @RequestParam(required = false) Integer level,
            @RequestParam(required = false) Category category
    ) {
        if(category != null) {
            return quizService.getRandomQuizByCategory(category);
        }
        return quizService.getRandomQuizByLevel(level);
    }

    @GetMapping("/api/quiz/{id}")
    public Quiz getQuizById(
            @PathVariable Long id
    ) {
        return quizService.getQuizById(id);
    }

    @GetMapping("/api/quiz/all")
    public List<Quiz> getAllQuizzes() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/api/categories")
    public List<Category> getCategories() {
        return List.of(Category.values());
    }
}

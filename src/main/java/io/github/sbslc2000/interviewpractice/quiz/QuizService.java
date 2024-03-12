package io.github.sbslc2000.interviewpractice.quiz;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class QuizService {

    private final QuizRepository quizRepository;
    private final Random random = new Random();

    public Quiz getRandomQuizByLevel(Integer level) {

        if (level.equals(0)) {
            level = random.nextInt(3) + 1;
        }

        return quizRepository.getRandomByLevel(level);
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAllByOrderByLevelAscCategoryAsc();
    }

    public Quiz getQuizById(Long id) {
        return quizRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid quiz ID"));
    }

    public Quiz getRandomQuizByCategory(Category category) {
        return quizRepository.getRandomByCategory(category.toString());
    }
}

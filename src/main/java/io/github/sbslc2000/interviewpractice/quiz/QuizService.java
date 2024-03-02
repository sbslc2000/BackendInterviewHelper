package io.github.sbslc2000.interviewpractice.quiz;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}

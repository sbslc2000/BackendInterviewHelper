package io.github.sbslc2000.interviewpractice.quiz;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

    /**
     * 특정 레벨을 가진 문제 중 랜덤으로 하나를 가져온다.
     * @param level
     * @return
     */
    @Query(value = "SELECT * FROM quiz where level = :level ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Quiz getRandomByLevel(Integer level);
}

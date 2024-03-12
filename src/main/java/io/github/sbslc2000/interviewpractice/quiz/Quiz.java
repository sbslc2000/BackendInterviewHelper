package io.github.sbslc2000.interviewpractice.quiz;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Quiz {

    @Id
    @GeneratedValue
    private Long id;

    private String question;

    private Integer level;

    @Enumerated(EnumType.STRING)
    private Category category;
}

package io.github.sbslc2000.interviewpractice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SPAController {

    @RequestMapping(value = {"/", "/quiz/**", "/quizs", "/categories", "/levels"})
    public String forwardNonApiRequests() {
        return "forward:/index.html";
    }
}
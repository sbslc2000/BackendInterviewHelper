package io.github.sbslc2000.interviewpractice.chatgpt;

public enum Model {

    GPT_3_5_TURBO("gpt-3.5-turbo"),
    GPT_3_5("gpt-3.5"),
    GPT_3("gpt-3"),
    GPT_4("gpt-4");

    private final String modelName;

    Model(String modelName) {
        this.modelName = modelName;
    }

    public String getModelName() {
        return modelName;
    }
}

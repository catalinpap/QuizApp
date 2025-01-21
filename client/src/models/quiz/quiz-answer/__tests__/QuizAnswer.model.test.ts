import {QuizAnswer, QuizAnswerInterface} from "../";

describe("Quiz Answer model", () => {
    test("should create new QuizAnswer", () => {
       const answer: QuizAnswerInterface = new QuizAnswer();
       expect(answer).toBeDefined();
    });

    test("should contain 'label' property", () => {
        const answer: QuizAnswerInterface = new QuizAnswer();
        expect(answer).toHaveProperty('label');
    });

    test("should contain 'isCorrect' property", () => {
        const answer: QuizAnswerInterface = new QuizAnswer();
        expect(answer).toHaveProperty('isCorrect');
    });

    test("should set correct value for 'label'", () => {
        const answer: QuizAnswerInterface = new QuizAnswer();
        const mockValue: string = "mock answer label";
        answer.label = mockValue;
        expect(answer.label).toEqual(mockValue);
    });

    test("should set correct value for 'isCorrect'", () => {
        const answer: QuizAnswerInterface = new QuizAnswer();
        const mockValue: boolean = false;
        answer.isCorrect = mockValue;
        expect(answer.isCorrect).toEqual(mockValue);
    });

});
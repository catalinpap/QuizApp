import {QuizItem, QuizItemInterface} from "../";
import {QuizAnswerInterface} from "@/models/quiz";

describe("Quiz Item model", () => {
   test("should have 'question' property", () => {
       const item: QuizItemInterface = new QuizItem();
       expect(item).toHaveProperty('question');
   });

    test("should have 'answers' property", () => {
        const item: QuizItemInterface = new QuizItem();
        expect(item).toHaveProperty('answers');
    });

    test("should have 'points' property", () => {
        const item: QuizItemInterface = new QuizItem();
        expect(item).toHaveProperty('points');
    });

    test("should set correct value for 'question'", () => {
       const item: QuizItemInterface = new QuizItem();
       const mockValue: string = 'Mock question?';
       item.question = mockValue;
       expect(item.question).toEqual(mockValue);
    });

    test("should set correct value for 'answers'", () => {
        const item: QuizItemInterface = new QuizItem();
        const mockValue: QuizAnswerInterface = {
            isCorrect: false,
            label: "mock answer 1"

        };
        item.answers = [mockValue];
        expect(item.answers).toEqual([mockValue]);
    });

    test("should return length 2 for 'answers' array", () => {
        const item: QuizItemInterface = new QuizItem();
        const mockValue1: QuizAnswerInterface = {
            isCorrect: false,
            label: "mock answer 1"
        };
        const mockValue2: QuizAnswerInterface = {
            isCorrect: true,
            label: "mock answer 2"
        };
        item.answers = [mockValue1, mockValue2];
        expect(item.answers.length).toEqual(2);
    });

    test("should set correct value for 'points'", () => {
        const item: QuizItemInterface = new QuizItem();
        const mockValue: number = 10;
        item.points = mockValue;
        expect(item.points).toEqual(mockValue);
    });

    test("should have visible properties on enumerations", () => {
        const item: QuizItemInterface = new QuizItem();
        item.question = "mock question";
        item.points = 100;
        item.answers = [];

        [item].map(o => {
            expect(o.question).not.toBeNull();
            expect(o.points).toBeDefined();
            expect(o.answers).toBeDefined();
        })
    });
});
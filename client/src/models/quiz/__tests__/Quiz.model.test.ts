import {Quiz, QuizInterface, QuizItemInterface} from "../";

describe('Quiz model', () => {
    test("should be defined on instantiation", () => {
        const quiz: QuizInterface = new Quiz();
        expect(quiz).toBeDefined();
    });

    test("should have 'id' property", () => {
        const quiz: QuizInterface = new Quiz();
        expect(quiz).toHaveProperty('id');
    });

    test("should have 'items' property", () => {
        const quiz: QuizInterface = new Quiz();
        expect(quiz).toHaveProperty('items');
    });

    test("should have 'duration' property", () => {
        const quiz: QuizInterface = new Quiz();
        expect(quiz).toHaveProperty('duration');
    });

    test("should have 'minScore' property", () => {
        const quiz: QuizInterface = new Quiz();
        expect(quiz).toHaveProperty('minScore');
    });

    test("should have 'title' property", () => {
        const quiz: QuizInterface = new Quiz();
        expect(quiz).toHaveProperty('title');
    });


    test("should have correct 'items' value ", () => {
        const quiz = new Quiz();
        const mockValue: QuizItemInterface = {
            answers: [
                {
                    label: "answer 1",
                    isCorrect: false
                },
                {
                    label: "answer 2",
                    isCorrect: true
                }
            ],
            points: 100,
            question: "Mocked quiz question"

        };
        quiz.items = [mockValue];
        expect(quiz.items).toBeDefined();
        expect(quiz.items[0].answers.length).toEqual(2);
        expect(quiz.items[0].answers[0].label).toEqual("answer 1");
        expect(quiz.items).toEqual([mockValue]);
    });

    test("should have correct 'duration' value ", () => {
        const quiz = new Quiz();
        const mockValue: number = 90;
        quiz.duration = mockValue;
        expect(quiz.duration).toBeDefined();
        expect(quiz.duration).toEqual(mockValue);
    });

    test("should have correct 'minScore' value ", () => {
        const quiz = new Quiz();
        const mockValue: number = 50;
        quiz.minScore = mockValue;
        expect(quiz.minScore).toBeDefined();
        expect(quiz.minScore).toEqual(mockValue);
    });

    test("should have correct 'title' value ", () => {
        const quiz = new Quiz();
        const mockValue: string = "Demo test";
        quiz.title = mockValue;
        expect(quiz.title).toBeDefined();
        expect(quiz.title).toEqual(mockValue);
    });
});
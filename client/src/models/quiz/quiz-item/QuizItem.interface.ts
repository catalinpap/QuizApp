import {QuizAnswerInterface} from "../quiz-answer/QuizAnswer.interface";

export interface QuizItemInterface {
    id: string;
    question: string;
    answers: QuizAnswerInterface[];
    points: number;
}
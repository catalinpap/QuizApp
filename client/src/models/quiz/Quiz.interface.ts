import {QuizItemInterface} from "./quiz-item/";

export interface QuizInterface {
    id: string,
    items: QuizItemInterface[],
    duration: number,
    minScore: number,
    title: string
}
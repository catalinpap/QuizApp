import {QuizAnswerInterface} from "../quiz-answer/QuizAnswer.interface";
import {QuizItemInterface} from "./QuizItem.interface";

export class QuizItem implements QuizItemInterface {
    readonly #id: string = "0";
    #question: string = '';
    #answers: QuizAnswerInterface[] = [];
    #points: number = 0;

    get id(): string {
        return this.#id;
    }

    get question(): string {
        return this.#question;
    }

    get answers(): QuizAnswerInterface[] {
        return this.#answers.map(answer => ({...answer} as QuizAnswerInterface));
    }

    get points(): number {
        return this.#points;
    }

    set question(value: string) {
        this.#question = value;
    }

    set answers(values: QuizAnswerInterface[]) {
        this.#answers = values.map(answer => ({...answer} as QuizAnswerInterface));
    }

    set points(value: number) {
        this.#points = value;
    }

    toJSON() {
        return {
            question: this.question,
            answers: this.answers,
            points: this.points
        }
    }
}
import {QuizAnswerInterface} from "./QuizAnswer.interface";

export class QuizAnswer implements QuizAnswerInterface {
    #isCorrect: boolean = false;
    #label: string = '';

    get label() {
        return this.#label;
    }

    get isCorrect() {
        return this.#isCorrect;
    }

    set label(value: string) {
        this.#label = value;
    }

    set isCorrect(value: boolean) {
        this.#isCorrect = value;
    }

    toJSON() {
        return {
            isCorrect: this.isCorrect,
            label: this.label
        }

    }
}
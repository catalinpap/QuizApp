import {QuizInterface} from "./Quiz.interface";
import {QuizItemInterface} from "./quiz-item";

export class Quiz implements QuizInterface {
    readonly #id: string = "1";
    #items: QuizItemInterface[] = [];
    #duration: number = 0;
    #minScore: number = 0;
    #title: string = '';

    public get id() {
        return this.#id;
    }

    // TODO: fix copy by reference
    public get items()  {
        // return this.#items.map(item => ({...item} as QuizItemInterface));
        // return structuredClone(this.#items);
        return this.#items;
    }

    public get duration() {
        return this.#duration;
    }

    public get minScore() {
        return this.#minScore;
    }

    public get title() {
        return this.#title;
    }

    // TODO: fix copy by reference
    public set items(items: QuizItemInterface[]) {
        // this.#items = items.map(item => ({...item} as QuizItemInterface));
        this.#items = items;
    }

    public set duration(value: number) {
        this.#duration = value;
    }

    public set minScore(value: number) {
        this.#minScore = value;
    }

    public set title(value: string) {
        this.#title = value;
    }

    toJSON() {
        return {
            id: this.id,
            items: this.items,
            duration: this.duration,
            minScore: this.minScore,
            title: this.title
        }
    }
}
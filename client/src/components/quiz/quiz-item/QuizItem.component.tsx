import React, {Suspense} from "react";
import {QuizItemInterface} from "@/models/quiz";
import {QuizItemNav} from "./quiz-item-nav/QuizItemNav.component";

export const QuizItem: React.FC<{item: QuizItemInterface}> = ({item}) => {
    return (
        <article>
            <header className={'quiz-header'}>
                <span className={'secondary'}>{item.points} points</span>
                <span className={'secondary'}>Question: 1/15</span>
            </header>
            <h2 className={'quiz-question'}>{item.question}</h2>
            <main>
                <ul>
                    {
                        item.answers.map((answer, index) => {
                           return (
                               <li key={`key-${answer.label}`} className={'quiz-answer-container'}>
                                   <input id={`checkbox-${index}`} type={'checkbox'}
                                          className={'quiz-answer-checkbox'}/>
                                   <label htmlFor={`checkbox-${index}`} className={'quiz-answer-label'}>
                                       {answer.label}
                                   </label>
                               </li>
                           )
                        })
                    }
                </ul>
            </main>
            <footer className={'quiz-footer'}>
                <Suspense fallback={'Please wait a second'}>
                    <QuizItemNav />
                </Suspense>
            </footer>
        </article>
    )
}
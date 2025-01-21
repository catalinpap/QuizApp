import React from "react";

export const QuizAnswer = () => {
    return (
        <li className={'quiz-answer-container'}>
            <input id={'checkbox-2'} type={'checkbox'}
                   className={'quiz-answer-checkbox'}/>
            <label htmlFor={'checkbox-2'} className={'quiz-answer-label'}>
                1934 - 1939
            </label>
        </li>
    );
};
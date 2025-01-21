'use client';

import React, {Suspense, useEffect} from "react";
import {useParams, useRouter} from "next/navigation";
import {QuizInterface} from "@/models/quiz";

export const QuizItemNav = () => {
    const router = useRouter();
    const {quiz_id, item_id} = useParams();
    let quiz: QuizInterface | null = null;

    useEffect(() => {
        fetch(`http://localhost:3111/quiz/${quiz_id}`)
            .then(response => response.json())
            .then(quizResp => quiz = quizResp)
            .catch(error => {
                console.error(error);
            });
    }, []);

    const nextItem = () => {
        if (!quiz) return;

        const currentItemIndex = quiz.items.findIndex(item => item.id === item_id);
        if(currentItemIndex === quiz.items.length - 1) {
            alert('last question');
        } else {
            router.push(`/${quiz_id}/${currentItemIndex + 1}`);
        }
    };

    const prevItem = () => {
        if(!quiz) return;

        const currentItemIndex = quiz.items.findIndex(item => item.id === item_id);
        if(currentItemIndex === 0) {
            alert('first question');
        } else {
            router.push(`/${quiz_id}/${currentItemIndex - 1}`);
        }
    }

    return  (
        <>
            <button className={'quiz-action'} onClick={prevItem}>Previous</button>
            <button className={'quiz-action'} onClick={nextItem}>Next</button>
        </>
    );
};
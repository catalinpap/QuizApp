'use client';

import React, {Suspense, useEffect, useState} from "react";
import {QuizInterface, QuizItemInterface} from "@/models/quiz";
import {QuizItem} from "@/components/quiz";
import {useParams} from "next/navigation";
import dynamic from "next/dynamic";

// const QuizItem = dynamic(() => import("@/components/quiz")
//         .then(module => module.QuizItem), {
//     loading: () => <p>Loading</p>
// });

type QuizViewProps = {
    quizData: QuizInterface
};

export const QuizView: React.FC<QuizViewProps> = ({quizData}) => {
    const [item, setItem] = useState<QuizItemInterface | undefined>(undefined);
    const {item_id} = useParams();
    useEffect(() => {
        const activeItem = quizData.items.find(item => item.id === item_id);
        if(activeItem) setItem(activeItem);
    }, []);

    return (
        <>
          <div className={'grow flex flex-col items-center'}>
              <h1 className={'quiz-title'}>{quizData.title}</h1>
              <article className={'quiz-container'}>
                  {item && <QuizItem key={`quiz-item-key`} item={item}/>}
              </article>
          </div>
        </>
    )
};
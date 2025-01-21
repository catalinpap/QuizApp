import React, {ReactNode} from "react";
import {QuizInterface} from "@/models/quiz";
import Link from "next/link";

type QuizPageProps = {
    params: Promise<{
        quiz_id: string
    }>
}

const QuizPage: React.FC<QuizPageProps> = async ({params}) => {
    const { quiz_id } = await params;
    let errorMessage: ReactNode = null;

    // TODO: migrate to redux state to avoid duplicate queries to quiz
    const quiz: QuizInterface =
        await fetch(`http://localhost:3111/quiz/${quiz_id}`)
            .then(response => response.json())
            .catch(error => {
                errorMessage = <p>There was an error retrieving this quiz</p>
            });

    return (
        <main className={'quiz-container'}>
            {errorMessage}
            <h1 className={'quiz-title'}>{quiz.title}</h1>
            <div className={'flex justify-between secondary'}>
                <span>{quiz.duration} minutes</span>
                <span>{quiz.items.length} questions</span>
                <span>{quiz.minScore}/100 passing criteria</span>
            </div>
            <Link href={`/${quiz.id}/${quiz.items[0].id}`}  className={'quiz-action mx-auto'}>Start Quiz</Link>
        </main>
    );
};

export default QuizPage;
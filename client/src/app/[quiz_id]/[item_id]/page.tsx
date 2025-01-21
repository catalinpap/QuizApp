import React from "react";
import {QuizView} from "@/views";
import {QuizInterface} from "@/models/quiz";

type QuizItemPageProps = {
    params: Promise<{
        quiz_id: string,
        item_id: string
    }>
}

const QuizItemPage: React.FC<QuizItemPageProps> = async ({params}) => {
    const {quiz_id, item_id} = await params;

    const quiz: QuizInterface =
        await fetch(`http://localhost:3111/quiz/${quiz_id}`)
            .then(response => response.json())
            .catch(error => {
                console.error(error);
            });

    return (
        <main>
            <QuizView quizData={quiz}/>
        </main>
    );
};

export default QuizItemPage;
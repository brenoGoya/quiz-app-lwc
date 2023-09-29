import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    myQuestions = [
        {
            id: "Question 01",
            question: "Which one of the following is not a template loop?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question 02",
            question: "Which of the file is invalid in LWC component folder?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "Question 03",
            question: "Which one of the following is not a directive?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "@track"
            },
            correctAnswer: "c"
        },       
    ]
}
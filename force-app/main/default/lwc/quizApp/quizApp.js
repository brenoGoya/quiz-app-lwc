import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {} // for storing the answers

    correctAnswers = 0 // to show the result

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

    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    changeHandler(event) {
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        
        const {name, value} = event.target
        // const name = event.target.name
        // const target = event.target.value

        this.selected = {...this.selected, [name]:value}
    }

    submitHandler(event) {
        event.preventDefault()
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        console.log("this.correctAnswers ", this.correctAnswers)
    }

    resetHandler() {
        this.selected = {}
        this.correctAnswers = 0
    }
}

import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {} // for storing the answers

    correctAnswers = 0 // to show the number of correct ansers

    isSubmitted = false // uso to show the result

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

    // used for disabling the submit button
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    // for applying dynamic styling to our result
    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success':'slds-text-color_error'}`
    }

    // change handler get's called on every click on the options
    changeHandler(event) {
        const {name, value} = event.target
        this.selected = {...this.selected, [name]:value}
    }

    // form submit handler
    submitHandler(event) {
        event.preventDefault()
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        console.log("this.correctAnswers ", this.correctAnswers)
    }

    // form reset handler
    resetHandler() {
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
}

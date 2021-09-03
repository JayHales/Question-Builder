import { IQuestionStorage } from "../question";

export const number: IQuestionStorage = {
    'addition': {
        name: "Addition",
        forumlaTemplate: (a, b) => a + b,
        questionTextTemplate: "~0~ + ~1~", 
        answerSigFigs: 2
    },
    'subtraction': {
        name: "Subtraction",
        forumlaTemplate: (a, b) => a - b,
        questionTextTemplate: "~0~ - ~1~", 
        answerSigFigs: 2
    },
    'division': {
        name: "Division",
        forumlaTemplate: (a, b) => a + b,
        questionTextTemplate: "~0~ / ~1~", 
        answerSigFigs: 2
    },
    'multiplication': {
        name: "Multiplication",
        forumlaTemplate: (a, b) => a * b,
        questionTextTemplate: "~0~ * ~1~", 
        answerSigFigs: 2
    }
}
import { IQuestionStorage } from "../../question";

export const number: IQuestionStorage = {
    'addition': {
        name: "Addition",
        forumlaTemplate: (a, b) => a + b,
        questionTextTemplate: "~0~ + ~1~"
    },
    'subtraction': {
        name: "Subtraction",
        forumlaTemplate: (a, b) => a - b,
        questionTextTemplate: "~0~ - ~1~"
    },
    'division': {
        name: "Division",
        forumlaTemplate: (a, b) => (a / b).toPrecision(2),
        questionTextTemplate: "~0~ / ~1~",
        answerFormatDescription: 'Give to 2 significant figures.'
    },
    'multiplication': {
        name: "Multiplication",
        forumlaTemplate: (a, b) => a * b,
        questionTextTemplate: "~0~ * ~1~"
    }
}
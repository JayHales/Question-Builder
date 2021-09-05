import { IQuestionStorage, Question } from "../../question";
import { IQuestionStorage, Question } from '../../question';

export const number: IQuestionStorage = {
    'addition': {
        name: 'Addition',
        forumlaTemplate: (a, b) => a + b,
        questionTextTemplate: "~0~ + ~1~"
    },
    'subtraction': {
        name: 'Subtraction',
        forumlaTemplate: (a, b) => a - b,
        questionTextTemplate: "~0~ - ~1~"
    },
    'division': {
        name: 'Division',
        forumlaTemplate: (a, b) => (a / b).toPrecision(2),
        questionTextTemplate: "~0~ / ~1~",
        answerFormatDescription: 'Give to 2 significant figures.',
        customParameterGeneration: (i) => noZeroAt(1, i)
    },
    'multiplication': {
        name: 'Multiplication',
        forumlaTemplate: (a, b) => a * b,
        questionTextTemplate: "~0~ * ~1~"
    }
}

function noZeroAt(at: number, i:number): number {
    let o;

    do {
        o = Question.defaultParameterGenerator();
    } while (i === at && o === 0);

    return o;
}
import { IQuestionStorage, Question } from '../../question';

export const number: IQuestionStorage = {
    'Addition': {
        name: 'Addition',
        forumlaTemplate: (a, b) => a + b,
        questionTextTemplate: '\\( ~0~ + ~1~ \\)'
    },
    'Subtraction': {
        name: 'Subtraction',
        forumlaTemplate: (a, b) => a - b,
        questionTextTemplate: '\\( ~0~ - ~1~ \\)'
    },
    'Division': {
        name: 'Division',
        forumlaTemplate: (a, b) => (a / b).toPrecision(2),
        questionTextTemplate: '\\(~0~ \\div ~1~ \\)',
        answerFormatDescription: 'Give to 2 significant figures.',
        customParameterGeneration: (i) => noZeroAt(1, i)
    },
    'Multiplication': {
        name: 'Multiplication',
        forumlaTemplate: (a, b) => a * b,
        questionTextTemplate: '\\( ~0~ \\times ~1~ \\)'
    },
    'Raising to powers': {
        name: 'Raising to powers',
        forumlaTemplate: (a, b) => Math.pow(a, b).toPrecision(2),
        answerFormatDescription: 'Give to 2 significant figures.',
        questionTextTemplate: '\\( ~0~ ^ {~1~} \\)'
    },
    'Rooting': {
        name: 'Rooting',
        forumlaTemplate: (a, b) => Math.pow(a, 1 / b).toPrecision(2),
        answerFormatDescription: 'Give to 2 significant figures.',
        questionTextTemplate: '\\(\\sqrt[~1~]{~0~}\\)',
        customParameterGeneration: (i) => Math.abs(noZeroAt(1, i))
    }
}

function noZeroAt(at: number, i:number): number {
    let o;

    do {
        o = Question.defaultParameterGenerator();
    } while (i === at && o === 0);

    return o;
}
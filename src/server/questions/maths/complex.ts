import { IQuestionStorage, Question } from "../../question";
import { num } from "edu-math-lib";

export const complex: IQuestionStorage = {
    "Addition": {
        name: "Addition",
        forumlaTemplate: (a, b, c, d) => num.Add(num.$(a, b), num.$(c, d)).toString(),
        questionTextTemplate: "\\( (~0~ + ~1~i) + (~2~ + ~3~i) \\)"
    },
    "Subtraction": {
        name: "Subtraction",
        forumlaTemplate: (a, b, c, d) => num.Subtract(num.$(a, b), num.$(c, d)).toString(),
        questionTextTemplate: "\\( (~0~ + ~1~i) - (~2~ + ~3~i) \\)"
    },
    "Multiplication": {
        name: "Multiplication",
        forumlaTemplate: (a, b, c, d) => num.Multiply(num.$(a, b), num.$(c, d)).toString(),
        questionTextTemplate: "\\( (~0~ + ~1~i) \\times (~2~ + ~3~i) \\)"
    },
    "Division": {
        name: "Division",
        forumlaTemplate: (a, b, c, d) => num.Divide(num.$(a, b), num.$(c, d)).toString(),
        questionTextTemplate: "\\( (~0~ + ~1~i) \\div (~2~ + ~3~i) \\)",
        customParameterGeneration: (i) => noZeroAt(2, i)
    },    
    "Raising to powers": {
        name: "Raising to powers",
        forumlaTemplate: (a, b, c) => num.$(a, b).toTheIntPower(c).toString(),
        questionTextTemplate: "\\( (~0~ + ~1~i) ^ {~2~} \\)"
    },    
    "Finding conjugates": {
        name: "Finding conjugates",
        forumlaTemplate: (a, b) => num.$(a, b).conjugate.toString(),
        questionTextTemplate: "Conjugate of \\( ~0~ + ~1~i \\)"
    },
}
function noZeroAt(at: number, i:number): number {
    let o;

    do {
        o = Question.defaultParameterGenerator();
    } while (i === at && o === 0);

    return o;
}
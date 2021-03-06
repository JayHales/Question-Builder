export interface IQuestionTemplate {
    
    name: string,

    forumlaTemplate: (...args: number[]) => number | string,
    questionTextTemplate: string,

    answerFormatDescription?: string,
    
    customParameterGeneration?: (parameterIndex: number) => number;
}

export class Question {

    readonly questionText: string;
    readonly answer: string;       
    readonly template: IQuestionTemplate;   

    constructor(questionTemplate: IQuestionTemplate) {

        this.template = questionTemplate;

        const randomParameters: number[] = [];

        let questionTextCopy = this.template.questionTextTemplate;

        for (let i = 0; i < this.template.forumlaTemplate.length; i++) {

            const parameter = this.template.customParameterGeneration === undefined ? Question.defaultParameterGenerator() : this.template.customParameterGeneration(i);
            randomParameters.push(parameter);
            const controlCharacter = "~" + i + "~";
            const re = new RegExp(controlCharacter, "g");
            questionTextCopy = questionTextCopy.replace(re, parameter.toString());
        }
        this.questionText = questionTextCopy;

        
        this.answer = this.template.forumlaTemplate(...randomParameters).toString();
        return;
    }

    static defaultParameterGenerator(): number {
        return Math.floor(Math.random() * 20) - 10;
    }
}

export interface IQuestionStorage {
    [index: string] : IQuestionTemplate
}


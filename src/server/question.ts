export interface IQuestionTemplate {
    
    name: string,

    forumlaTemplate: (...args: number[]) => number | string,
    questionTextTemplate: string,

    answerFormatDescription?: string,
    
    customParameterGeneration?: (parameterIndex?: number) => number;
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
            const controlCharacter = '~' + i + '~';
            questionTextCopy = questionTextCopy.replace(controlCharacter, parameter.toString());
        }
        this.questionText = questionTextCopy;

        this.answer = this.template.forumlaTemplate(...randomParameters).toString();
        return;
    }

    private static defaultParameterGenerator() {
        return Math.floor(Math.random() * 20) - 10;
    }
}

export interface IQuestionStorage {
    [index: string] : IQuestionTemplate
}

export interface ITopicStorage {
    [index: string] : IQuestionStorage 
}


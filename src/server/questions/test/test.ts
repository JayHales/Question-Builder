import { IQuestionStorage } from "../../question";

export const test: IQuestionStorage = {
    'test1': {
        name: "Test one",
        forumlaTemplate: () => 0,
        questionTextTemplate: "The answer is 0"
    },
    'test2': {
        name: "Test two",
        forumlaTemplate: () => '1',
        questionTextTemplate: "The answer is 1"
    },
    'test3': {
        name: "Test three",
        forumlaTemplate: (a) => a,
        questionTextTemplate: "The answer is ~0~"
    }
}
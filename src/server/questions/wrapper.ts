import { IQuestionStorage } from "../question";

import { number } from "./maths/number";

export const topics: ITopicStorage = {
    "(Maths) Number": number
}

export interface ITopicStorage {
    [index: string] : IQuestionStorage 
}



import { IQuestionStorage } from '../question';

import { number } from './maths/number';

export const topics: ITopicStorage = {
    'Number': number
}

export interface ITopicStorage {
    [index: string] : IQuestionStorage 
}




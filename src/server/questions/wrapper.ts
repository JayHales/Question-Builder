import { IQuestionStorage } from "../question";

import { number } from "./maths/number";
import { complex } from "./maths/complex";

export const topics: ITopicStorage = {
    "(Maths) Number": number,
    "(Maths) Complex": complex
}

export interface ITopicStorage {
    [index: string] : IQuestionStorage 
}



import { ITopicStorage } from '../question';

import { number } from './maths/number';
import { test } from './test/test';

export const topics: ITopicStorage = {
    'test': test,
    'number': number
}


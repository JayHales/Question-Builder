import { Question } from "./question";
import express from 'express';

import {number} from './questions/number';

const app = express();

app.get('/question', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    const questionName = req.query['name']?.toString();

    if (questionName === undefined) {
        res.status(404);
        res.end();
        return;
    }

    if (!Object.keys(number).includes(questionName)) {
        res.status(404);
        res.end();
        return;
    }
    
    res.status(200);
    res.send(new Question(number[questionName]));
    res.end();
    return;
});

app.listen(process.env.PORT || 80);
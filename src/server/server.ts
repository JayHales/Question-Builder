import path from "path";
import express from 'express';

import { Question } from "./question";
import {number} from './questions/number';

const app = express();

app.use('/client', express.static(path.join(__dirname, '../example-client')));

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
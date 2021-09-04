import path from "path";
import express from 'express';

import { Question, IQuestionStorage } from "./question";

import { topics } from "./questions/wrapper";

const app = express();

app.use('/', express.static(path.join(__dirname, '../example-client')));

app.get('/question', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    if(req.query['topic'] === undefined)
        return kill(res);

    if(req.query['name'] === undefined)
        return kill(res);

    const topicName = req.query['topic'].toString();
    const questionName = req.query['name'].toString();

    if (killIf(!Object.keys(topics).includes(topicName), res)) return;

    const topic = topics[topicName];    

    if (killIf(!Object.keys(topic).includes(questionName), res)) return;

    res.status(200);
    res.send(new Question(topic[questionName]));
    res.end();
    return;
});


app.get('/list', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    const topicName = req.query['topic']?.toString();

    if (topicName === undefined) {
        res.status(200);
        res.send(Object.keys(topics));
        res.end();
        return;
    }

    if (!Object.keys(topics).includes(topicName)) {
        res.status(404);
        res.end();
        return;
    }

    res.status(200);
    res.send(Object.keys(topics[topicName]));

    res.end();
    

});

function killIf(critera: boolean, res: express.Response): boolean {
    if (critera) {
        res.status(404);
        res.end();
    }

    return critera;
}

function kill(res: express.Response) {
    res.status(404);
    res.end();
}

app.listen(process.env.PORT || 80);
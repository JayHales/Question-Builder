"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var question_1 = require("./question");
var express_1 = __importDefault(require("express"));
var number_1 = require("./questions/number");
var app = (0, express_1.default)();
app.get('/question', function (req, res) {
    var _a;
    res.header("Access-Control-Allow-Origin", "*");
    var questionName = (_a = req.query['name']) === null || _a === void 0 ? void 0 : _a.toString();
    if (questionName === undefined) {
        res.status(404);
        res.end();
        return;
    }
    if (!Object.keys(number_1.number).includes(questionName)) {
        res.status(404);
        res.end();
        return;
    }
    res.status(200);
    res.send(new question_1.Question(number_1.number[questionName]));
    res.end();
    return;
});
app.listen(process.env.PORT || 80);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
exports.number = {
    'addition': {
        name: "Addition",
        forumlaTemplate: function (a, b) { return a + b; },
        questionTextTemplate: "~0~ + ~1~",
        answerSigFigs: 2
    },
    'subtraction': {
        name: "Subtraction",
        forumlaTemplate: function (a, b) { return a - b; },
        questionTextTemplate: "~0~ - ~1~",
        answerSigFigs: 2
    },
    'division': {
        name: "Division",
        forumlaTemplate: function (a, b) { return a + b; },
        questionTextTemplate: "~0~ / ~1~",
        answerSigFigs: 2
    },
    'multiplication': {
        name: "Multiplication",
        forumlaTemplate: function (a, b) { return a * b; },
        questionTextTemplate: "~0~ * ~1~",
        answerSigFigs: 2
    }
};

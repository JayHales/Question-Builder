"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var Question = /** @class */ (function () {
    function Question(questionTemplate) {
        var _a;
        this.template = questionTemplate;
        var randomParameters = [];
        var questionTextCopy = this.template.questionTextTemplate;
        for (var i = 0; i < this.template.forumlaTemplate.length; i++) {
            var parameter = this.template.customParameterGeneration === undefined ? Question.defaultParameterGenerator() : this.template.customParameterGeneration();
            randomParameters.push(parameter);
            var controlCharacter = '~' + i + '~';
            questionTextCopy = questionTextCopy.replace(controlCharacter, parameter.toString());
        }
        this.questionText = questionTextCopy;
        this.answer = (_a = this.template).forumlaTemplate.apply(_a, randomParameters).toString();
    }
    Question.defaultParameterGenerator = function () {
        return Math.floor(Math.random() * 20) - 10;
    };
    return Question;
}());
exports.Question = Question;

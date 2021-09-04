# Question API

This API is designed to serve loads of random questions relating to a specific topic. Topics will mostly be maths, physics and chemistry as that is what I am currently studying. 

## Requesting questions

Make a request to: `http://<hosting location>/question?topic=<topic name>&name=<question name>`. This returns a JSON string which looks like the following:

```javascript
{
  template: {
    name: string, //The name of the question
    questionTextTemplate: string, // The template of the question. E.g. ~0~ + ~1~ before the ~i~ are replaced.
    answerFormatDescription?: string // Additional information on how to answer the question such as significant figures.
  },
  questionText: string, // The template but with the parameters in place of the ~i~.
  answer: string // The correct answer.
}
```

To list the topics make a request to `http://<hosting location>/list`. This returns a JSON array containing the names of each of the topics.

To list the questions under a topic make a request to `http://<hosting location>/list?topic=<topic name>`.
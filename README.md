# Question API

This API is designed to serve loads of random questions relating to a specific topic. Topics will mostly be maths, physics and chemistry as that is what I am currently studying. 

## Requesting questions

Make a request to: `<hosting location>/questions?name=<topic name>`. This returns a JSON string which looks like the following:

```

{template: {
    name: string, //The name of the question
    questionTextTemplate: string // The template of the question. E.g. ~0~ + ~1~ before the ~i~ are replaced.
  },
  questionText: string, // The template but with the parameters in place of the ~i~.
  answer: string // The correct answer.
}

```
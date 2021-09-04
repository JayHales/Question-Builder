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

## Contributing Questions

New questions should be placed somewhere in the `/src/server/questions/` folder. They should be stored in  `.ts` file. The file should be in the below format:

```typescript
import { IQuestionStorage } from "../../question";

export const test: IQuestionStorage = {
    'test1': { // This value (test1) is what is used by the API for access.
        name: "Test one",
        forumlaTemplate: () => 0,
        questionTextTemplate: "The answer is 0"
    },
    'test2': {
        name: "Test two",
        forumlaTemplate: () => '1',
        questionTextTemplate: "The answer is 1"
    },
    'test3': {
        name: "Test three",
        forumlaTemplate: (a) => a,
        questionTextTemplate: "The answer is ~0~"
    }
}
```

All objects in a `IQuestionStorage` should implement `IQuestionTemplate`:

```typescript
interface IQuestionTemplate {
    
    name: string, // The display name of the question. Not used for serving via the API. 

    forumlaTemplate: (...args: number[]) => number | string, // Should return the answer.
    questionTextTemplate: string, // The descriptive text. ~0~ will be replaced with the first parameter of the formula template, ~1~ the second and so on. 

    answerFormatDescription?: string, // Additional information.
    
    customParameterGeneration?: (parameterIndex?: number) => number; // Custom function to generate the parameters. The only parameter to the function is the index of the parameter it is generating.
}
```

`wrapper.ts` should then be updated by adding  `import { <name> } from '<path>'` and adding a new key in `topics`. The key should be the topic name which is accessed by the API and the value should be the imported value.
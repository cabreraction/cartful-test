const fs = require('fs');
const questionaire = require('./questionaire');

(function calculateCombinations() {
  let answersCount = 1;
  for (let { answers } of questionaire) {
    answersCount *= answers.length;
  }

  console.log(answersCount);
})();

(function writeCombinationsCSV() {
  let headersString = '';
  let csv = '';
  // process headers 
  const questions = questionaire.reduce((accumulator, current) => { 
    accumulator.push(current.questionName); 
    return accumulator;
  } , [])
  headersString = questions.join(',');
  csv += `${headersString}\n`

  // process rows
  const answersArray = questionaire.map(question => question.answers.map(answer => answer.answerName));
  
  function recursiveSolver(arrayPos) {
    if (answersArray.length - 1 > arrayPos) {
      // combine my current elements with the processed elements
      const processedElements = recursiveSolver(arrayPos + 1);
      const currentElements = answersArray[arrayPos];
      const combinedElements = [];
      for (let i = 0; i < currentElements.length; i++) {
        for (let j = 0; j < processedElements.length; j++) {
          const fromCurrent = currentElements[i];
          const fromProcessed = processedElements[j];
          const combined = [fromCurrent, fromProcessed].join(',');
          combinedElements.push(combined);
        }
      }
      return combinedElements;
    } else {
      return answersArray[arrayPos];
    }
  } 

  results = recursiveSolver(0);
  const rowsString = results.join('\n')
  csv += rowsString;
  fs.writeFile('combinations.csv', csv, () => console.log('done'));
})();
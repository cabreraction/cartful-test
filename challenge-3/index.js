const fs = require('fs');
const questionaire = require('./questionaire');

(function calculateCombinations() {
  let answersCount = 0;
  let questionsNumber = questionaire.length;
  for (let { answers } of questionaire) {
    answersCount += answers.length;
  }

  console.log(answersCount * questionsNumber);
})();

(function writeCombinationsCSV() {
  let headersCount = questionaire.length;
  let headersString = '';
  let csv = '';
  // process headers 
  for (let {questionName} of questionaire) {
    headersString += `${questionName},`;
  }
  headersString = headersString.substring(0, headersString.length-1);
  csv += `${headersString}\n`;

  // process rows
  const totalAnswers = questionaire.reduce((accumulator, current) => ({ answers: accumulator.answers.concat(current.answers) }), { answers: [] });
  let rowsString = '';
  for (let {answerName} of totalAnswers.answers) {
    rowsString += `${answerName},`.repeat(headersCount);
    rowsString = rowsString.substring(0, rowsString.length - 1);
    csv += `${rowsString}\n`;
    rowsString = '';
  }

  fs.writeFile('combinations.csv', csv, () => console.log('done'));
})();
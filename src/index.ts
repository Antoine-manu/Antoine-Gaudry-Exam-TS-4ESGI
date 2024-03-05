import { readFileSync } from "fs";


type Person = {
  age: number;
  height: number;
};



function getStatistics(): {meanAge: number, meanHeight: number} {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());
  let meanAge:number = 0
  let meanHeight:number = 0
  persons.map(person => {
    meanAge += person.age
    meanHeight += person.height
  })

  return {meanAge: (meanAge/persons.length), meanHeight: (meanHeight/persons.length)}
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();

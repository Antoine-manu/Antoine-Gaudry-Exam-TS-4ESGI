import { readFileSync } from "fs";


type Person = {
  age: number;
  height: number;
};



function getStatistics(): number {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());
  let oldestAge: number = 0
  persons.map(person => {
     if (person.age > oldestAge){
       oldestAge = person.age
     }
  })
  return oldestAge
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();

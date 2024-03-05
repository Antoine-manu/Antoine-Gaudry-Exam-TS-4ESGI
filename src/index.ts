import { readFileSync } from "fs";


type Person = {
  age: number;
  height: number;
};



function getStatistics(): {meanAge: number, meanHeight: number} {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();

import { readFileSync } from "fs";


type Person = {
  age: number;
  [key: string]: number;
};



function getStatistics(): {meanAge: number, meanHeight: number} {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());
  let meanAge:number = 0
  let meanHeight:number = 0
  persons.map(person => {
    if(!person.age || typeof person.age !== "number"){
     console.error("L'age donné n'est pas au bon format")
     return({meanAge: 0, meanHeight: 0})
     } else {
      meanAge += person.age
    }
     if(!person.height || typeof person.height !== "number"){
       console.error("La taille donnée n'est pas au bon format")
       return({meanAge: 0, meanHeight: 0})
     } else {
       meanHeight += person.height
     }

  })

  return {meanAge: (meanAge/persons.length), meanHeight: (meanHeight/persons.length)}
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();

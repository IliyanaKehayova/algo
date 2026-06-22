/* Exercice 3.4 : Tri d'un tableau Nous désignerons par a1, a2, ..., aN les éléments d'un tableau à trier par ordre croissant. 
On commence par chercher l'indice du plus petit des éléments, soit j cet indice. On permute alors les valeurs de a1 et aj. 
On cherche ensuite l'indice du plus petit des éléments a2, a3, ..., an et on permute avec a2, etc.*/


import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
const sc = new createInterface({ input, output });

let numbers = [];
let newNumbers = [];
let smallestIndex;

do{
let number = parseInt(await sc.question('Veuillez entrer 5 nombres dans le tableau.'));
console.log(number);
numbers.push(number);
  }
while(numbers.length<=4);

console.table(numbers);

console.log(Math.min(...numbers));
smallestIndex = Math.min(...numbers);
console.log(smallestIndex);

for(let i=0; i<=numbers.length; i++){
    let indexMin=i;
    for (let j=i; j<numbers.length; j++){
        if(numbers[j] <numbers[indexMin]){
            indexMin=j; 
                                         }
                                       }

        if(indexMin !==i){
            const temp = numbers[i];
            numbers[i] = numbers[indexMin];
            numbers[indexMin] = temp;
                         }                               

                                    }
                              

console.table(numbers);

/*

newNumbers.push(smallestIndex);

for(let i=0; i<=numbers.length; i++){
    newNumbers.push(Math.max(numbers[i]));

}


console.table(newNumbers);
*/
sc.close();                    
                      }              
await main();
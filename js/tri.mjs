/* Exercice 3.4 : Tri d'un tableau Nous désignerons par a1, a2, ..., aN les éléments d'un tableau à trier par ordre croissant. 
On commence par chercher l'indice du plus petit des éléments, soit j cet indice. On permute alors les valeurs de a1 et aj. 
On cherche ensuite l'indice du plus petit des éléments a2, a3, ..., an et on permute avec a2, etc.*/


import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
const sc = new createInterface({ input, output });

let numbers = [];

do{
let number = parseInt(await sc.question('Veuillez entrer 5 nombres dans le tableau.'));
console.log(number);
numbers.push(number);
  }
while(numbers.length<=4);

console.table(numbers);

console.log(Math.min(...numbers));
let smallestIndex = Math.min(...numbers); //nous donne le plus petit nombre dans toute la table 


for(let i=0; i<=numbers.length; i++){ // on va d'abord parcourir le tableau numbers avec eles nombres qu'on a choisi
    let indexMin=i; // on va définir une valeur minimale qui va dépendre de i
    for (let j=i; j<numbers.length; j++){ // dnas la première boucle avec i on rajoute une deuxième variable j qui parcourt le même tableau
        if(numbers[j] <numbers[indexMin]){  //si le j est inférieur à l'indexMin qui incremente en fonction du i
            indexMin=j;  //indexMin devient j
                                         }
                                       }

        if(indexMin !==i){ //si la valeur minimale n'est pas égale à i 
            const temp = numbers[i]; //on fait la manip qui inverse les deux valeurs
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
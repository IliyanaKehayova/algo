/* Exercice 3.4 : Tri d'un tableau Nous désignerons par a1, a2, ..., aN les éléments d'un tableau à trier par ordre croissant. 
On commence par chercher l'indice du plus petit des éléments, soit j cet indice. On permute alors les valeurs de a1 et aj. 
On cherche ensuite l'indice du plus petit des éléments a2, a3, ..., an et on permute avec a2, etc.*/


import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
const sc = new createInterface({ input, output });



do
let number = ParseInt(await sc.question('Veuillez entrer tous les nombres du tableau.'));
console.log(number);

let numbers = [];

number.push(number);




sc.close();                    
                      }              
await main();
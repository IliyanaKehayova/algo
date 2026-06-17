/*Exercice 3.3 : Dénombrer les lettres de l'alphabet dans un tableau Lire un texte d'au moins 120 caractères (à contrôler). 
Compter et afficher le nombre d'occurrences (d'apparitions) de chacune des lettres de l'alphabet. */


import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
const sc = new createInterface({ input, output });


let alphabet = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, w:0, z:0}; 


let phrase = await sc.question('Veuillez saisir une phrase d\'au moins 120 caractères.'); 
phrase=phrase.toLowerCase();
console.log(phrase);

let phraseTable = [...phrase];
console.log(phraseTable);

for(const element of phraseTable){                              
if (Object.hasOwn(alphabet, element)){ //hasOwn
alphabet[element]++
                                     }
                                 }
                                 
console.log('La phrase contient les lettres de l\'alphabet :');
console.log(alphabet);
console.table(alphabet);




sc.close();                    
                      }              
await main();
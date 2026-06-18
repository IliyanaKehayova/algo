/* Exercice 3.6 : Jeu du pendu
L'algorithme lit un mot proposé par un premier joueur.
Ce mot a une longueur minimum de 5 caractères (à contrôler).
L'algorithme affiche ensuite le mot où toutes les lettres sauf la première et la dernière sont remplacées par un tiret.
Un deuxième joueur propose des lettres une à une.
Chaque fois que la lettre se trouve dans le mot, l'algorithme remplace les tirets qui remplaçaient cette lettre et
réaffiche le mot. Le second joueur a droit à un maximum de 6 essais pour retrouver toutes les lettres*/

import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let word;
let guess;

let wordTable = [];
let hiddenWordTable = [];

do{word = await sc.question('Veuillez choisir un mot de minimum 5 caractères à deviner pour le joueur n°2.')
//console.log(word);
  }
while(word.length<5);


for (let i=0; i<word.length; i++){
wordTable.push(word[i]);
                        }
//console.log(wordTable);
//let tableLength = console.log(wordTable.length);

for(let i=0; i<wordTable.length; i++){
hiddenWordTable.push("_");
                                     };

console.log(hiddenWordTable.join());

for(let i=0; i=5; i++){
while(hiddenWordTable.includes("_")){
            let guess = await sc.question('Veuillez choisir une lettre : ');

                    for(let i=0; i<wordTable.length; i++){
                        if(wordTable[i].includes(guess)){
                        hiddenWordTable=hiddenWordTable.with(i, guess);
                                                        }

                                                        }
console.log(hiddenWordTable.join());
                                    }


                                                     }
                  
if(!hiddenWordTable.includes("_")){
console.log('Félicitation, vous avez trouvé le mot !');
console.log(hiddenWordTable.join());
                                    }
else if(hiddenWordTable.includes("_")){
console.log('Dommage, le mot était "'+word+'". Veuillez réessayer une autre fois.')
                                      }                                    

//let hiddenWord = word.replaceAll(word, "_");
//console.log(hiddenWord);

                
      
sc.close();
                    }
await main()

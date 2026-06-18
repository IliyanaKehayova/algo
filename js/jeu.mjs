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
let attempts = 0;
const maxAttempts = 6;

let wordTable = [];
let hiddenWordTable = [];
let guessedLetters = [];


do {word = await sc.question("Veuillez choisir un mot de minimum 5 caractères à deviner pour le joueur n°2 : ");} 
while (word.length < 5);

    
for (let i = 0; i < word.length; i++)
{wordTable.push(word[i]);}

for (let i = 0; i < wordTable.length; i++) {
        if(i === 0 || i === wordTable.length - 1){
            hiddenWordTable.push(wordTable[i]);  
                                                 } 
        else{hiddenWordTable.push("_");}
                                          }

console.log(hiddenWordTable.join(" "));

    
while (hiddenWordTable.includes("_") && attempts < maxAttempts){
guess = await sc.question("Veuillez choisir une lettre : ");

        if(guessedLetters.includes(guess)) {
            console.log("Vous avez déjà proposé cette lettre !");
            continue;
                                            }

        guessedLetters.push(guess);
        let found = false;

        for(let i = 0; i < wordTable.length; i++){

            if(wordTable[i] === guess) {
                hiddenWordTable[i] = guess;
                found = true;
                                       }

                                                }

        if (found){
            console.log("Bonne réponse !");
                  } 
        else{
            attempts++;
            console.log("Cette lettre n'est pas dans le mot.");
            console.log("Il vous reste " +(maxAttempts - attempts) +" essai(s).");
            }

        console.log(hiddenWordTable.join(" "));
        console.log("Lettres déjà proposées : " +guessedLetters.join(", "));
                                                                }

    
    if(!hiddenWordTable.includes("_")) {
        console.log("Félicitations, vous avez trouvé le mot !");
                                       } 
    else{
        console.log("Vous avez perdu.");
        console.log('Le mot était : "' + word + '"');
        }

    sc.close();
}

await main();

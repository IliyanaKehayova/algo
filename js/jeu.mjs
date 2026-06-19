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
let attempts = 0; //le nombre d'essais que le joueur va cumuler
const maxAttempts = 6; //le nombre d'essais que le joueur a

let wordTable = []; //le tableau où on va mettre le mot au départ
let hiddenWordTable = []; // le tableau où les seules lettres visibles seront la première et la dernière et les autres des _
let guessedLetters = []; //le tableau avec toutes les lettres qu'on a déjà tapé dans le terminal


do {word = await sc.question("Veuillez choisir un mot de minimum 5 caractères à deviner pour le joueur n°2 : ");} // le premier joueur tape le mot à deviner
while (word.length < 5);

    
for (let i = 0; i < word.length; i++) //on va parcourir la longueur du mot
{wordTable.push(word[i]);} //on va inserer tous les caractères du mot dans le tableau wordTable

for (let i = 0; i < wordTable.length; i++) { // on va parcourir tout le tableau wordTable
        if(i === 0 || i === wordTable.length - 1){ //quand on parcourt si la place de la lettre est zéro ou la dernière case 
            hiddenWordTable.push(wordTable[i]);  //on rajoute ces caracteres au hiddenWordsTable
                                                 } 
        else{hiddenWordTable.push("_");} //quand il s'agit pas de la case 0 ou la case on met un _
                                           }

console.log(hiddenWordTable.join(" ")); // une fois sorti de la boucle for on va afficher hiddenWordTable 

    
while (hiddenWordTable.includes("_") && attempts < maxAttempts){ //la boucle de choix de lettres va tourner tant que le mot contient des _ et on n'a pas épuisé le nombre d'essais
guess = await sc.question("Veuillez choisir une lettre : "); //la lettre qu'on propose

        if(guessedLetters.includes(guess)) { //si on a déjà proposé la même lettre càd elle figure dans le tableau guessedLetters
            console.log("Vous avez déjà proposé cette lettre !");
            continue;
                                            }

        guessedLetters.push(guess); // on a fermé la boucle if d'avant donc ici si dès qu'on propose une lettre on la rajoute au tableau guessedWords
        let found = false; //on introduit une varible found 

        for(let i = 0; i < wordTable.length; i++){ //on va parcourir le tableau wordTable

            if(wordTable[i] === guess) { //si un élément dans le tableau wordTable est égal à la lettre qu'on devine
                hiddenWordTable[i] = guess; //on rajoute cette lettre à cette place dans le tableau
                found = true;  //la variable found devient true 
                                       }

                                                }

        if (found){ //si on trouve la lettre
            console.log("Bonne réponse !");
            attempts++; //on va incrementer le nombre d'essais
                  } 
        else{
            attempts++;
            console.log("Cette lettre n'est pas dans le mot.");
            console.log("Il vous reste " +(maxAttempts - attempts) +" essai(s).");
            }

        console.log(hiddenWordTable.join(" "));
        console.log("Lettres déjà proposées : " +guessedLetters.join(", "));
                                                                } //on ferme la boucle while de demande de propositions 

    
    if(!hiddenWordTable.includes("_")) { //si à la fin des 6 essais le mot ne contient pas de _ c'est qu'on a trouvé le mot
        console.log("Félicitations, vous avez trouvé le mot !");
                                       } 
    else{
        console.log("Vous avez perdu.");
        console.log('Le mot était : "' + word + '"'); // hiddenWordTable contient toujours des _ donc on n'a pas trouvé toutes les lettres 
        }

    sc.close();
}

await main();
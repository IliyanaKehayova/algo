/*Exercice 2.3 : Jeu de la fourchette 
L'ordinateur « choisit » un nombre entier compris entre 0 et 100. Le joueur essaie de le deviner. 
Lors de chaque essai, l'ordinateur affiche la « fourchette » dans laquelle se trouve le nombre qu'il a choisi. Le choix du nombre par l'ordinateur 
sera simulé par génération d'un nombre aléatoire : N <-- RANDOM(0,100)*/

import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
const sc = new createInterface({ input, output });



let proposition; 
let valeurMax = Math.floor(100);
let valeurMin = Math.ceil(0);
let randomNumber = Math.floor(Math.random() * valeurMax + 1); //on rajoute valeur Min à la fin comme ça on compte jusuqu'à 100 (sion c'est entre 0 et 99)
let nombreEssais = 0;

do{
   let proposition = parseInt(await sc.question("Veuillez saisir un nombre compris entre "+valeurMin+" et " +valeurMax+" : ")); 

    if(isNaN(proposition)){
    console.log(propostion+" n'est pas un nombre. Veuillez choisir un nombre entre 0 et 100.")
                          }
    else if(proposition<valeurMin || proposition>valeurMax){
    console.log("Le nombre "+propostion+" est en dehors de la plage "+valeurMin + " et "+valeurMax+ ". Veuillez choisir un autre nombre.")
                                                           }
    else{
        if(proposition<randomNumber){
        console.log("Le nombre que vous choisi est plus petit que celui de l'ordinateur. Veuillez réessayer.");
        valeurMin=proposition;
                                    }
        else if(proposition>randomNumber){
        console.log("Le nombre que vous choisi est plus grand que celui de l'ordinateur. Veuillez réessayer.");
        valeurMax=proposition;
                                         }
        else{
        console.log("Félicitations, le nombre choisi par l'ordinateur est "+randomNumber+".");
        break;
            };

        };

console.log("Vous avez réussi après "+nombreEssais+ " essais.");
nombreEssais++;
}while (proposition !=randomNumber);


//console.log('Vous avez choisi le nombre : ' + proposition+ ' et l\'ordinateur a choisi le nombre : ' + randomNumber+' dans une fourchette de '+valeurMin+' et '+valeurMax);

sc.close();                    
                      }

await main();

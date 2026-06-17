/*Exercice 2.3 : Jeu de la fourchette 
L'ordinateur « choisit » un nombre entier compris entre 0 et 100. Le joueur essaie de le deviner. 
Lors de chaque essai, l'ordinateur affiche la « fourchette » dans laquelle se trouve le nombre qu'il a choisi. Le choix du nombre par l'ordinateur 
sera simulé par génération d'un nombre aléatoire : N <-- RANDOM(0,100)*/

import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
const sc = new createInterface({ input, output });



let proposition = parseInt(await sc.question("Veuillez saisir un nombre compris entre 0 et 100 : "));
let valeurMax = Math.floor(100);
let valeurMin = Math.ceil(0);
let randomNumber = Math.floor(Math.random() * valeurMax + 1) //on rajoute valeur Min à la fin comme ça on compte jusuqu'à 100 (sion c'est entre 0 et 99)



console.log('Vous avez choisi le nombre : ' + proposition+ ' et l\'ordinateur a choisi le nombre : ' + randomNumber+' dans une fourchette de '+valeurMin+' et '+valeurMax);

sc.close();                    
                      }

/*
function getRandomInt(min, max) {
min = Math.ceil(0);
max = Math.floor(100);
return Math.floor(Math.random() * (max - min)) + min;
                                }*/

await main();

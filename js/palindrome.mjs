/*Exercice 3.5 : Palindrome Un palindrome est une chaîne de caractères que l'on peut lire identiquement de droite à gauche, et gauche à droite. 
Par exemple: AA. 38783. LAVAL. LAVAL A ETE A LAVAL. ET LA MARINE VA VENIR A MALTE Soit une chaîne de caractères terminée par un point. Ecrivez l'algorithme 
d'un programme permettant d'affirmer si cette phrase est ou non un palindrome. Si la chaîne de caractères n'est composée que du caractère '.', le message 'LA CHAINE EST VIDE' 
sera affiché. Proposez un jeu d'essai prévoyant les 3 cas suivants : ▪ la phrase est vide ▪ la chaîne de caractères n'est pas un palindrome ▪ la chaîne de caractères est un 
palindrome */


import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let palindrome = await sc.question('Veuillez saisir un palindrome.');
console.log(palindrome);








sc.close();
                    }
await main()

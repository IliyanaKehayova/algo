/*Exercice 3.5 : Palindrome Un palindrome est une chaîne de caractères que l'on peut lire identiquement de droite à gauche, et gauche à droite. 
Par exemple: AA. 38783. LAVAL. LAVAL A ETE A LAVAL. ET LA MARINE VA VENIR A MALTE Soit une chaîne de caractères terminée par un point. Ecrivez l'algorithme 
d'un programme permettant d'affirmer si cette phrase est ou non un palindrome. Si la chaîne de caractères n'est composée que du caractère '.', le message 'LA CHAINE EST VIDE' 
sera affiché. Proposez un jeu d'essai prévoyant les 3 cas suivants : ▪ la phrase est vide ▪ la chaîne de caractères n'est pas un palindrome ▪ la chaîne de caractères est un 
palindrome */


import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let palindrome;
let wordTable = [];
let firstPartOfWord = [];
let secondPartOfWord = [];


palindrome = await sc.question('Veuillez saisir un palindrome.');

while(palindrome===null){
console.log('Vous n\'avez pas saisi de mot.'); 
palindrome = await sc.question('Veuillez saisir un palindrome.'); //on va saisir le palindrome
                        }

console.log(palindrome);

for (let i = 0; i < palindrome.length; i++) //on va parcourir tous les caracteres 
{wordTable.push(palindrome[i]);} //et les mettre dans un tableau 


console.log(wordTable);
let wordTableLength = wordTable.length-1;
console.log(wordTableLength);


for(let i=0; i<wordTable.length; i++){
//        if(wordTable[i] === wordTable[wordTableLength]){ 
//            console.log(wordTable[i]+ ' est la même lettre que '+wordTable[wordTableLength]);
            wordTableLength--; 
            firstPartOfWord.push(wordTable[i]);
            secondPartOfWord.push(wordTable[wordTableLength+1])
//                                                       } 
                                     }
console.log(firstPartOfWord);
console.log(secondPartOfWord);


let joinedFirstPartOfWord = firstPartOfWord.join(" ");
let joinedSecondPartOfWord = secondPartOfWord.join(" ");

console.log(joinedFirstPartOfWord);
console.log(joinedSecondPartOfWord);

if(joinedFirstPartOfWord===joinedSecondPartOfWord){
console.log('Le mot '+ palindrome +' est un palindrome.')
                                      }
else{
console.log('Le mot '+ palindrome +' n\'est pas un palindrome.')
                                            }
sc.close();
                    }
await main()

/* EXERCICE 3.4 : RECHERCHER UNE LETTRE DANS UNE CHAINE DE CARACTERES
Soit une chaîne de caractères terminée par le caractère « . ».
Donnez l'algorithme d'un programme qui compte le nombre d'occurrences d'une lettre donnée (« a » par exemple) dans cette
chaîne.
Si la chaîne de caractères est vide ou n'est composée que du caractère « . », le message « LA CHAINE EST VIDE » sera affiché.
Proposez un jeu d'essai prévoyant les 3 cas suivants :
▪ La phrase est vide
▪ La lettre n'est pas présente
▪ La lettre est présente une ou plusieurs fois */



import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let numberOfA = 0;



let response = await sc.question('Composez une phrase qui se termine par un "."'); 
console.log(response);

let letter = await sc.question("Quelle lettre voulez-vous rechercher ? ");
console.log(letter);
//let allLetters = response.split("");
//lettersTable.push(allLetters);


if(response==="" || response==="."){
console.log('La chaîne est vide.')    
                                  }
else if(!response.endsWith(".")) {
    console.log('La chaîne de caractères doit se terminer par un "."');
                                 } 

else{
for (let item of response) {
    if (item === letter) {
        numberOfA++;
                         }
                          }


  if (numberOfA === 0) {
    console.log("La lettre n'est pas présente.");
                        } 
  else {
    console.log("Cette chaîne contient la lettre " + letter + " " +numberOfA +" fois.");
        }

    }
sc.close();
                     }
                                 
await main()

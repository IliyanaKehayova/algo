/* Exercice 2.7.1 : Calculer le nombre de jeunes
Il s'agit de dénombrer toutes les personnes d'âge inférieur strictement à 20 ans parmi un échantillon de 20
personnes. L’utilisateur est invité à saisir les 20 valeurs.
Décrivez l'algorithme qui affiche le nombre de jeunes et codez la solution.
Exercice 2.7.2 : Afficher le nombre de personnes de chaque catégorie
Compléter l'algorithme précédent pour répondre à la demande suivante:
Si toutes les personnes ont moins de 20 ans, affichez « TOUTES LES PERSONNES ONT MOINS DE 20 ANS ».
Si aucune personne n'a moins de 20 ans, affichez « TOUTES LES PERSONNES ONT PLUS DE 20 ANS ».
Sinon, affichez le nombre de personnes pour chaque catégorie (« - de 20, + de 20, = à 20). */

import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
const sc = new createInterface({ input, output });

  let tableSize = 19;
  let ageTable = [];
  let juniorAgeTable=0;
  let juniorTable = [];
  let num;
  let entry;

  for (let i = 0; i <= tableSize; i++) {
  // ici on va rentrer manuellement les âges de 20 personnes - vu qu'on pose la même question 20 fois on va utiliser la boucle for
  ageTable.push(parseInt(await sc.question("Veuillez saisir l'âge de la personne n°" + (i + 1) +": ")));
                                       }

 
  console.log("Voici les âges de toutes les personnes de la liste :");
  console.log(ageTable); //On affiche la liste


  for(let i=0; i<ageTable.length; i++){ //On va parcourir tout le tableau des ages des personnes
   
  if(checkAge(ageTable[i])==true){ // en utilisant la fonction pour vérifier si <20 ans si ça répond au critéres de la fonction ça renvoie true 
  juniorAgeTable++; // on rajoute toutes les personnes qui répondent à ce critére à une nouvelle liste juniorAgeTable
                                 }
                                      }

  //console.log(juniorAgeTable); // CA MARCHE PASOn affiche la liste des personnes qui ont <20 ans 

  if(juniorAgeTable==0){ //Si la liste est vide on affiche que toutes les personnes dans la première liste ont plus de 20 ans
    console.log('TOUTES LES PERSONNES ONT PLUS DE 20 ANS')
                       }
  else if(juniorAgeTable==ageTable.lenght){ //
    console.log('TOUTES LES PERSONNES ONT MOINS DE 20 ANS');
                                          }
  else{console.log('Il y a '+ juniorAgeTable+' personnes qui ont moins de 20 ans et : '+(ageTable.length-juniorAgeTable)+' de personnes âgées de plus de 20 ans.\n');
      }

  juniorTable = ageTable.filter(checkAge);
  console.log('Voici toutes les personnes âgées de moins ou = 20 ans : ');
  console.log(juniorTable);

  sc.close();
                      }

function checkAge(age) { //fonction pour vérifier l'âge de la personne 
    if ( age<= 20){
      return true;
                  }
    return false;
                       }



await main();

/**
 * EXERCICE 3.3 : RECHERCHER UN NOMBRE DANS UN TABLEAU
Soit un tableau de nombres entier triés par ordre croissant.
Chercher si un nombre donné N figure parmi les éléments.
Si oui, afficher sa position dans le tableau avec la valeur de l'indice correspondant. Sinon, afficher « 404 Not found »
 * 
*/


import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let nombres = new Array(1, 3, 5, 7, 9);

let recherche = parseInt(await sc.question('Veuillez entrer un nombre.'))
console.log(recherche);

if(nombres.includes(recherche)){
console.log('Le chiffre '+recherche+' se trouve dans le tableau sur la place : '+nombres.indexOf(recherche))}
else{console.log('404 not found.')

    }
                                


sc.close();
                    }
await main()

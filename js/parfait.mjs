/*
Exercice 1.10 : Calcul des nombres parfaits 
On souhaite écrire un programme de calcul des N premiers nombres parfaits. 
Un nombre est dit parfait s’il est égal à la somme de ses diviseurs, 1 compris. 
*/

import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let response;
let sum=0;
let i;

response = parseInt(await sc.question('Veuillez écrire un nombre')); 
console.log(response);

for(i=1; response%i==0; i++){ //a partir de 1 on va chercher tous les diviseurs du nombre (càd à chaque fois quand le modulo est à 0
                if(response % i == 0){ // dans la boucle for on va prendre tous les diviseurs 
                sum += i; //a chaque fois quand i correspond au calcul on rajoute le nombre au sum
                                     }
                            }
                                if(sum==response){ //si la somme des diviseurs et le nombre qu'on a choisi sont égaux on peut dire qu'il s'agit d'un nombre parfait
                                console.log(reponse+' est un nombre parfait.')
                                                 }
                                else{console.log(response+' n\'est pas un nombre parfait.')

                                    }
                                           
                               
sc.close();
                    }
await main()

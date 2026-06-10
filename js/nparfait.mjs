/*
Exercice 1.10 : Calcul des nombres parfaits 
On souhaite écrire un programme de calcul des N premiers nombres parfaits. 
Un nombre est dit parfait s’il est égal à la somme de ses diviseurs, 1 compris. 
Version 1 : Ecrivez le programme complet qui affiche les N premiers nombres parfaits.
*/

import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let response;
var sum=0;
var i;
let nombres = [];
var result=0;



do{
response = parseInt(await sc.question('Veuillez écrire un nombre maximal')); 
console.log(response);
  }
while(isNaN(response))


    for(i=1; response>i; i++){ //a partir de 1 on va chercher tous les diviseurs du nombre (càd à chaque fois quand le modulo est à 0)
                if(response % i == 0){ // dans la boucle for on va prendre tous les diviseurs 
                    
                    sum = sum + i; //à chaque fois quand i correspond au calcul on rajoute le nombre au sum
                
                                     }
                             }
                        if(sum==response){ //si la somme des diviseurs et le nombre qu'on a choisi sont égaux on peut dire qu'il s'agit d'un nombre parfait
                        //result+=1;
                        nombres.push(sum);
                                if(sum<nombres){
                                console.log('Les nombres divisibles parfaits en dessous de  '+response +' sont : '+nombres);
                                console.log(diviseur);
                                               }
                            
                                         }
                        else{console.log('blabla.')

                                    }               
                             
                               
sc.close();
                    }
await main()

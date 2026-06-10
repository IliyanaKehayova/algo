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
let i;
let numbers = [];
var result=0;
let number;



response = parseInt(await sc.question('Veuillez écrire un nombre maximal')); 
console.log(response);    


for(number=1; number<response; number++){ //on commence avec 1 et on incremente tant que le nombre est inférieur à la reponse qu'on a choisi on continue la boucle for
let sum=0;

        for(i=1; number>i; i++){    //a partir de 1 on va chercher tous les diviseurs du nombre tant que le diviseur est plus petit que le nombre
        
                    if(number % i == 0){ //si le modulo du nombre est 0 on peut le compter comme diviseur
                    sum = sum + i; //on additionne les diviseurs du nombre - i est le diviseur
                                        }
                                }                                   
                        if(sum==number){ //si la somme des diviseurs est egale au nombre
                        numbers.push(sum);  //on rajoute la somme (qui est egale au nombre càd c'est un nombre parfait) au tableau                    
                                       }
                                        }
                                console.log('Les nombres divisibles parfaits en dessous de  '+response +' sont : ');
                                console.log(numbers); //on affiche le tableau avec les nombres
                                                                                                                     
sc.close();
                    }
await main()

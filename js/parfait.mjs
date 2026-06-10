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
let result=0;
let diviseur = [];
let sum=0;
let i;

do{
response = parseInt(await sc.question('Veuillez écrire un nombre')); 
console.log(response);
  }
while(isNaN(response))
            for(i=1; i<=response; i++){
            result+=1;
            diviseur.push(i);
            diviseur.forEach((el) => sum += el);
            console.log(sum);                    
                                      }
                    
                
                            if(response==sum){
                            console.log(response+' est un nombre parfait.');
                                            }
                            else{
                            console.log(response+' n\'est pas un nombre parfait');
                                }
                                            
sc.close();
                    }
await main()

/*
Exercice 1.9 : Recherche des diviseurs d’un nombre Lire un nombre entier et déterminer tous ses diviseurs autres que 1 et lui-même. 
*/

import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let response;
let result=0;
let diviseur = [];

do{
response = parseInt(await sc.question('Veuillez écrire un nombre')); 
console.log(response);
  }
while(isNaN(response))
            for(let i=1; i<=response; i++){
                
                if(response%i==0){
                result=+1;
                diviseur.push(i);
                console.log('Les nombres divisibles par '+response +' sont : '+diviseur);
                console.log(diviseur);
        
                                }
                                      }
      
sc.close();
                    }
await main()

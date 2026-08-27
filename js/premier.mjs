//Exercice 1.6 : Nombre Premier Lire un nombre N et déterminer s’il est un nombre premier.


import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});


let response = parseInt(await sc.question('Veuillez saisir un nombre.')); 
console.log(response);


let i;


if(response>2){ //le premier nombre primaire est 3 donc il faut commencer le calcul avec un nombre supérieur à 2

            for(i=2; i<=Math.sqrt(response); i++){ //math.sqrt donne la racine carrée de la variable. Un nombre qui n'est pas premier aura au moins un diviseur inférieur à sa racine carrée
                        
                        if(response%i==0){ //si le chiffre qu'on a choisi est divisible par i il ne s'agit pas d'un nombre primaire
                        console.log(response+' n\'est pas un nombre premier.')
                        break;
                                         }
                        else{
                        console.log(response+' est un nombre premier.') //dans ce cas le nombre ne ne divise pas par tous les nombres dispo
                        break;
                            }
                                                }
              }
else{
console.log('Saisie incorrecte, merci de réessayer.');
    }
                                                          
sc.close();
                    }
await main()

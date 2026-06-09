//Exercice 1.6 : Nombre Premier Lire un nombre N et déterminer s’il est un nombre premier.

/* for (let i = 2; i <= Math.sqrt(response); i++) {
            if (response % i === 0) {
                estPremier = false;
                break; // On sort de la boucle dès qu'on trouve un diviseur
            }
        }
        */ 


import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});


let response = parseInt(await sc.question('Veuillez saisir un nombre.')); 
console.log(response);

let primary;
let i;


if(response>2){ //le premier nombre primaire est 3 donc il faut commencer le calcul avec un nombre supérieur à 2

            for(i=2; i<=Math.sqrt(response); i++){ //math.sqrt donne la racine carrée de la variable response et elle doit être inférieure ou égale à i(qui est égal à 2 et augmente+1 à chaque tour)
                        
                        if(response%i==0){ //si le chiffre qu'on a choisi est divisible par i il ne s'agit pas d'un nombre primaire
                        //primary=false; //dans ce cas le nombre n'est pas primaire
                        console.log(response+' n\'est pas un nombre premier.')
                        break;
                                         }
                        else{
                        console.log(response+' est  un nombre premier.') //dans ce cas le nombre ne ne divise pas par tous les nombres dispo
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

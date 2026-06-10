/*Exercice Algo 4.1
Vous disposez de la formule de prévision d’investissement appelé Valeur Actualisé Net de 
l’investissement.
Valeur actuelle nette VAN
Mesure de la rentabilité économique actualisée au taux i.
 n
VAN= - I0 + ∑ (flux nets) x (1+i) –k + VRn x (1+i)-k
 K=1
Variable i est le taux ‘actualisation : exemple i =0.04 soir 4%
I0 : est le montant de l’investissement de départ. 
n : le nombre d’année et fixé à 5 ans en tout 4 ans de cash-flow + 1an pour la vente de la 
valeur résiduelle VR.
Cela fait 4 (flux nets) ou cash-flow à saisir par l’utilisateur. 
VR : est la valeur résiduelle de de revente de l’investissement.
Question : Dans le cas d’un investissement réalisé donc sur 4 ans avec une VR de revente
connue la 5ème année vous réaliserez la fonction qui renvoie la VAN calculé par la formule.
Plus la VAN est élevée plus l’investissement est rentable */


import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});


let taux;
let n=4;
let I;
let VR;
let flux=[];
let i;
let CF;
let VAN;


taux = parseFloat(await sc.question('Quel est le taux d\'actualisation ? format 00.00')); 
console.log(taux);

I = parseFloat(await sc.question('Quel est l\'investissement initial ?'));
console.log(I);

for(i=1; i<=n; i++){
CF = parseFloat(await sc.question('Quel est le cash-flow pour l\'année CF'+(i)));
console.log(CF);
flux.push(CF); 
                  }

//console.log(flux[0]);

VR = parseFloat(await sc.question('Quelle est la valeur résiduelle ?')); 
console.log(VR);


//VAN = -I + (flux[0]/(1+taux)) +  flux[1]/Math.pow((1+taux), 2) + flux[2]/Math.pow((1+taux), 3) + flux[3]/Math.pow((1+taux), 4) + VR/Math.pow((1+taux), 5);

VAN = -I;
for(i=0; i<flux.length; i++){ // vu qu'il n'y a que 4 entrees la boucle se fera jusqu'à la 4eme annee
    VAN+=flux[i] / Math.pow(1+taux, i+1); //vu que flux réélement a juste 4 chiffres - années 1, 2, 3 et 4 on doit à chauqe fois faire la boucle et incrémenter tout ce qu'il y a après VAN+= et ça va s'arrêter à 4, donc la 4eme annee.
                            }
VAN += VR / Math.pow(1+taux, 5); //la formule VAR reste la même
console.log('La valeur actualisée net est de :')
console.log(VAN);









                                                          
sc.close();
                    }
await main()

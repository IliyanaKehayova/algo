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


let response = parseInt(await sc.question('Veuillez saisir un nombre.')); 
console.log(response);














                                                          
sc.close();
                    }
await main()
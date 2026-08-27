/*Exercice 1.5 : 
Calcul d’intérêts Lire la somme initiale S placée sur un compte, l'intérêt i offert par la banque et le nombre N d'années de placement de la somme S. 
Calculez la valeur acquise par la somme S placée pendant N années : 
▪ avec un intérêt simple : S ( 1 + N * i ) 
▪ avec un intérêt composé : S ( 1 + i )N
return somme * Math.pow(1 + interet/100, annees);
*/ 


import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let somme=6532;
let interet;
let annees;
let response;

function iSim(somme, annees, interet){
return somme*(1+annees*interet/100)
                    };

function iCom(somme, annees, interet){
return somme*(1+interet/100)*annees
                    };    
                    
const i = new Map();
i.set("A", iSim);
i.set("B", iCom);
                  
while(somme>0){
console.log('Débit actuel de votre compte : '+somme);

interet = parseFloat(await sc.question(('Merci de renseigner le pourcentage de votre interêt (format 00.00).')));
annees = parseFloat(await sc.question(('Merci de renseigner le nombre d\'années.')));
response = await sc.question('Souhaitez vous : \nA : Calculer l\'interêt simple\nB : Calculer l\'interêt composé'); 

if(i.has(response)){
    
            if(response=="A"){
            let calcul = i.get(response);
            console.log(calcul(somme, annees, interet));
                    
                             }
            else if(response=="B"){
            let deuxiemeCalcul = i.get(response);
            console.log(deuxiemeCalcul(somme, annees, interet));
                             }
            else{
            console.log('Merci de choisir A ou B.\nRetour à l\'écran d\'accueil.');
                }
                    }
else{
    break;
    }

            }
sc.close();
                    }
await main()
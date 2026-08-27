/*Exercice 2.2 : Conversion Degrés Fahrenheit (°F) <--> Degrés Celsius (°C)
Exercice 2.2.1 :
Soit "X" la valeur à convertir.
Formule °F vers °C : °C = (X − 32) * 5/9
Formule °C vers °F : °F = (X * 9/5) + 32
L'utilisateur saisit une valeur numérique comprise entre -459.67 et 5 000 000 suivi de l'unité de température :
▪ C pour Celsius
▪ F pour Fahrenheit
La valeur et l'unité de température sont séparés par un espace (exemple: 32 C pour 32 degrés Celsius). Si la valeur est
hors limite, l’utilisateur recommence la saisie.
Pour information, le zéro absolu correspond à -459.67 Degrés Fahrenheit ou -273.15 degrés Celsius. En physique, rien
ne peut être plus froid que le zéro absolu !
La température de la plus basse jamais enregistrée sur Terre est de -95 degrés Celsius.
Le programme affiche le résultat de la conversion sous forme de nombre réel double précision.
Exemple d’affichage en mode Console :
Programme de conversion Celsius <-> Fahrenheit.
Saisir une température avec son unité de mesure (C ou F) :
17 C
17 °C = 62.6 °F
 */


import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});


let temp = await sc.question('Saisir une température avec son unité de mesure (C ou F) :'); 
console.log(temp);

let newtemp;
let substringToRemove;
let subsubstringToRemove;
let result;

if(temp.includes("C")){
substringToRemove = " C";
newtemp = temp.replace(substringToRemove, '');
console.log(parseFloat(newtemp));
                      }
else if(temp.includes("F")){
subsubstringToRemove = " F";
newtemp = temp.replace(subsubstringToRemove, '');
console.log(parseFloat(newtemp));
                           }

/*
function celsiusToFarenheit(newtemp){
return (newtemp*(9/5))+32;
                                };


function farenheitToCelsius(newtemp){
return (newtemp-32)*(5/9);
                                 };


const celsiusOrFarenheit = new Map();
celsiusOrFarenheit.set("C", celsiusToFarenheit);
celsiusOrFarenheit.set("F", farenheitToCelsius);
*/


        if(temp.includes("C")){ //si l'entrée temp contient la lettre C
        let result = (newtemp*5/9)+32;
                if(newtemp<=-273.15){
                console.log(temp+' est égal au zéro absolu en Farenheit.')
                                   }
                else if(newtemp>=5000000){
                console.log(temp+' ne peut pas dépasser 5 000 000°.')
                                        }          
                else{
                let resultEnC = result.toFixed(2);
                console.log(temp+' est égal à '+resultEnC+ ' °F')
                    }
                              }

        else if(temp.includes("F")){ //si l'entrée temp contient la lettre F
        result = (newtemp-32)*(5/9);  
                if(newtemp<=-459.67){
                console.log(temp+' est égal au zéro absolu en Celsius.')
                                  }
                else if(newtemp>=5000000){
                console.log(temp+' ne peut pas dépasser 5 000 000°.')
                                        }
                else{
                let resultEnF = result.toFixed(2);
                console.log(temp+' est égal à '+resultEnF+ ' °C')
                    }
                                }                     

            /*
        let calcul = celsiusOrFarenheit.get(newtemp); //on va appeler la fonction correspondante dans le tableau
                    if(calcul>-459.67){
                    console.log(calcul);
                                      }
                    else if(calcul<=-459.67){
                    console.log('Zéro absolu !');
                                            }
                              }   
             */
            
        /*                      
        else if(temp.includes("F")){
        let calcul = celsiusOrFarenheit.get(newtemp);
                    if(calcul>-273.15){
                    console.log(calcul);
                                      }
                    else if(calcul<=-273.15){
                    console.log('Zéro absolu !');
                                            }                  
                                 }     
                                            
        */                         
                                    
else{
console.log('L\'entrée doit être entre -459.67 et 5 000 000 suivi de l\'unité de température. Meri de refaire la saisie.')
    }


sc.close();
                    }
await main()

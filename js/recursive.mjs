/*Écrire un algorithme qui permette de connaître ses chances de gagner au tiercé, quarté, quinté et autres impôts volontaires. .
 On demande à l’utilisateur le nombre de chevaux partants, et le nombre de chevaux joués. 
Les deux messages affichés devront être : Dans l’ordre : une chance sur X de gagner Dans le désordre : une chance sur Y de gagner X et Y nous sont donnés par la formule suivante,
 si n est le nombre de chevaux partants et p le nombre de chevaux joués,
 le signe ! signifie « factorielle » :
 X = n ! / (n - p) !
 Y = n ! / (p ! * (n – p) !) 
NB : cet algorithme peut être écrit d’une manière simple, mais relativement peu performante. 
Ses performances peuvent être singulièrement augmentées par une fonction récursive...
Vous commencerez par écrire la manière la plus simple, puis vous écrirez une deuxième version  avec fonction récursive permettant de le résoudre.


function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(fact(5));

 */


import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
const sc = new createInterface({ input, output });


let n = parseInt(await sc.question("Veuillez donner le nombre de chevaux partants."));
console.log(n);

let p = parseInt(await sc.question("Veuillez donner le nombre de chevaux joués."));
console.log(p);



let x = fact(n)/(fact(n-p));
console.log(x);

let y  = fact(n)/(fact(p)* fact(n-p));
console.log(y);

console.log("Vous avez 1 chance dans l'ordre sur "+x+ " de gagner");
console.log("Vous avez 1 chance dans le désordre sur "+y+ " de gagner");

sc.close();                    
                      }          
                      
    function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;     } 

/*function fact(n) {
    if (n === 0) {
        return 1;
    }

    return n * fact(n - 1);
}*/

await main();

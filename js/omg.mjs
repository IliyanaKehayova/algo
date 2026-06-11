import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});


let taux;
let n;
let I;
let VR;
let flux=[];
let i;
let CF;
let VAN;
let TRI;


taux = parseFloat(await sc.question('Quel est le taux d\'actualisation (format 00.00) ?')); 
console.log(taux);

I = parseFloat(await sc.question('Quel est l\'investissement (capital) ?')); 
console.log(I);

n = parseFloat(await sc.question('Sur combien d\'années souhaitez-vous investir ?')); 
console.log(n);

for(i=1; i<=n; i++){
CF = parseFloat(await sc.question('Quel est le cash-flow pour l\'année CF'+(i)));
console.log(CF);
flux.push(CF); 
                  }

//console.log(flux[0]);

VR = parseFloat(await sc.question('Quelle est la valeur résiduelle ?')); 
console.log(VR);


//VAN = -I + (flux[0]/(1+i)) +  Math.pow(2, flux[0]/(1+i)) + Math.pow(3, flux[0]/(1+i)) + Math.pow(4, flux[0]/(1+i)) + Math.pow(5, VR/(1+i));

VAN = -I;
for(i=0; i<=flux.lenght; i++){ // vu qu'il n'y a que 4 entrees la boucle se fera jusqu'à la 4eme annee
    VAN+=flux[i] / Math.pow(1+taux, i+1); //vu que flux réélement a juste 4 chiffres - années 1, 2, 3 et 4 on doit à chauqe fois faire la boucle et incrémenter tout ce qu'il y a après VAN+= et ça va s'arrêter à 4, donc la 4eme annee.
                            }
VAN += VR / Math.pow(1+taux, 5); //la formule VAR reste la même
console.log('La valeur actualisée net VAN est de :')
console.log(VAN.toFixed(2));
let calcul = I - VAN; 
//let TRI = 0.20977
console.log(calcul)


//console.log(VAN, I, n, VR, taux);
//console.log(CF);        


sc.close();
                    }
await main()

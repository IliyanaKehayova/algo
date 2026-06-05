import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let qteGobelets = 63;
let produit;

const prix = new Map();
prix.set("1", 'Choix n°1. Café : 1,20 euros');
prix.set("2", 'Choix n°2. Thé : 1,10 euros');
prix.set("3", 'Choix n°3. Chocolad chaud : 1,50 euros');

if(qteGobelets>=1){

let response = await sc.question('Composez le code de votre boisson: \n1 : Café \n2 : Thé  \n3 : Chocolad chaud'); 
console.log(response);
        
        if(prix.has(response)){
        produit = prix.get(response);
        console.log('Vous avez sélectionné : '+produit);
        
                              }










                
        else{
        console.log("Code inexistant. Merci de composer votre code boisson.")
        }

                }
else{
console.log('Machine en attente de ravitaillement de gobelets. Merci de votre compréhension.');      
    }      






                   
sc.close();
                    }
await main()

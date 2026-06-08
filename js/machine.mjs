import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let qteGobelets = 63;
let montant;
let choixBoisson;



const prix = new Map();
prix.set("1", 1.20);
prix.set("2", 1.10);
prix.set("3", 1.50);

const boisson = new Map();
boisson.set("1", 'Café');
boisson.set("2", 'Thé');
boisson.set("3", 'Chocolat chaud');




do{
let response = await sc.question('Composez le code de votre boisson: \n1 : Café \n2 : Thé  \n3 : Chocolad chaud'); 
console.log(response);

        if(prix.has(response)&&boisson.has(response)){
        montant = prix.get(response);
        choixBoisson= boisson.get(response);
        let argent = await sc.question('Vous avez sélectionné : '+choixBoisson+'\nVeuillez introduire le montant : '+montant+' euros');
        console.log(argent);
        

                if(argent>montant){
                let rendu=argent-montant;
                const monnaie = rendu.toFixed(2);
                console.log('Voici votre monnaie: '+monnaie+' euros');
                console.log('Boisson en cours de préparation. \nMerci de votre visite.\n') ;
                                  }
                else if(argent==montant){
                console.log('Boisson en cours de préparation. \nMerci de votre visite.\n')
                                        }
                else{
                let manque=argent-montant;
                const reste = manque.toFixed(2); 
                manque = await sc.question('Montant insuffisant, merci d\'introduire le montant nécessaire : '+reste);
                        
                        
                
                
                    }
        
        
        



        qteGobelets = qteGobelets-1;   
                                                        }

        else{
        console.log("Code inexistant. Merci de composer votre code boisson.")
        }

                        

     }while(qteGobelets>=1);

console.log('Machine en attente de ravitaillement de gobelets. Merci de votre compréhension.');      
         

                   
sc.close();
                        }
await main()

import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let qteGobelets = 63;
let montant;
let choixBoisson;
let sousEnMoins;
let montantARendre;
let manque;
let rendu;
let argent;
let montantEnTrop;



const prix = new Map();
prix.set("1", 2.50);
prix.set("2", 6.80);
prix.set("3", 20.50);

const boisson = new Map();
boisson.set("1", 'Café');
boisson.set("2", 'Thé');
boisson.set("3", 'Chocolat chaud');



while(qteGobelets>=1){
let response = await sc.question('Composez le code de votre boisson: \n1 : Café \n2 : Thé  \n3 : Chocolad chaud'); 
console.log(response);

        if(prix.has(response)&&boisson.has(response)){
        montant = prix.get(response); //le montant du tableau qui correspond à la boisson
        choixBoisson= boisson.get(response); //le nom de la boisson
        argent = parseFloat(await sc.question('Vous avez sélectionné : '+choixBoisson+'\nVeuillez introduire le montant : '+montant+' euros'));
        console.log(argent); //l'argent que le client insère dans la machine 
        

                if(argent>montant){ //si l'argent qu'on a mis est supérieur au montant corréspodant au prix
                rendu=argent-montant; //ce que la machine doit rendre au client = l'argent qu'il a mis - le montant de la boisson
                const monnaie = rendu.toFixed(2); //on définit la variable du monnaie que la macine doit rendre avec deux digits après la virgule
                console.log('Voici votre monnaie: '+monnaie+' euros');
                console.log('Boisson en cours de préparation. \nMerci de votre visite.\n') ;
                                  }
                else if(argent==montant){ //si l'argent que le client a inséré est = au prix de la boisson
                console.log('Boisson en cours de préparation. \nMerci de votre visite.\n')
                                        }
                else if(argent<montant){ //si l'argent que le client a inséré est inférieur au prix de la boisson
                manque=montant-argent; //on définit une variable qui corréspond au montant qui reste à être inséré 
                const reste = manque.toFixed(2); //on définit une variable avec deux digits après la virgule
                sousEnMoins = parseFloat(await sc.question('Montant insuffisant, merci d\'introduire le montant nécessaire : '+reste)); //on demande au client de mettre le montant restant
                console.log(sousEnMoins); //le client rajoute le montant restant 

                                if(sousEnMoins<manque){ //on doit rajouter sousEnMoins au montant qui manque
                                montantARendre = sousEnMoins+argent; //
                                const montantARendreCon = montantARendre.toFixed(2); 
                                console.log('Montant insuffisant. Veuillez récupérer votre argent : ' + montantARendreCon)
                                break;
                                                 }
                                else if(sousEnMoins>manque){ //si les sous qui manquent et qu'on a inséré sont plus que ce qui manque on rembourse le client 
                                montantEnTrop = sousEnMoins-manque;
                                console.log('Voici votre monnaie : '+ reste+'\nBoisson en cours de préparation. \nMerci de votre visite.\n')
                                                     }
                                else{
                                console.log('Boisson en cours de préparation. \nMerci de votre visite.\n')
                                    }
                        
                
                
                                        }
        
        
        qteGobelets = qteGobelets-1;   
        console.log('Stock de gobelets restant : '+ qteGobelets);                                                }

        else{
        console.log("Code inexistant. Merci de composer votre code boisson.")
            }

                                }

console.log('Machine en attente de ravitaillement de gobelets. Merci de votre compréhension.');      
         

                   
sc.close();
                        }
await main()

import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});

let qteGobelets = 63;

const prix = new Map();
prix.set ("1", '1,20');
prix.set ("2", '1,10');
prix.set ("3", '1,50');

if(qteGobelets>=1){

let response = await sc.question('Composez le code de votre boisson: \n1 : Café \n2 : Thé  \n3 : Chocolad chaud'); 
console.log(response);
        
        if(prix.has(response)){
        console.log('Vous avez sélectionné : '+response);
        prix.get(response)
                              }










                
        else{

        }

                }
else{
console.log('Machine en attente de ravitaillement de gobelets. Merci de votre compréhension.');      
    }      






                   
sc.close();
                    }
await main()

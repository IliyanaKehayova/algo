import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});
let response = await sc.question('Est-ce qu\'il va faire beau demain ? OUI/NON'); 
console.log(response);


if(response=='OUI'){
console.log('Je vévifie l\'état de mon vélo'); 
response=await sc.question('Mon vélo fonctionne bien ? OUI/NON'); 

        if(response=='NON'){
        console.log('Je vais chez le garagiste.'); 

                response=await sc.question('Les réparations sont rapides ?'); 
                if(response=='OUI'){
                console.log('Je fais des petites réparations.')
                console.log('Je sors en vélo.'); 
                                        }
                else if(response=='NON'){
                console.log('Je laisse mon vélo au garage.');    
                console.log('Je vais à pied à l\'étang.');   
                    }  
                           }  
        else if(response=='OUI'){
        console.log('Je sors en vélo'); 
              
            }
                   }              
else if(response=='NON'){
console.log('Je souhaite rester lire chez moi.');
response=await sc.question('J\'ai trouvé Game Of Thrones chez moi ? OUI/NON'); 
        if(response=='NON'){
        console.log('Je vais à la bibliothéque.'); 
        response=await sc.question('Game Of Thrones est disponible à la bibliothéque ? OUI/NON'); 
                if(response=='NON'){
                console.log('Je vais emprunter un roman policier.'); 
                console.log('Je rentre bouquiner chez moi.');
                                   }
                else if(response=='OUI'){
                console.log('Je rentre bouquiner chez moi.');
                    }
                            }

else if(response=='OUI'){
console.log('Je reste bouquiner chez moi.'); 
            }
    }                           
sc.close();
                    }
await main()

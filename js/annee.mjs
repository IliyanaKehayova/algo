import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});
let response = parseInt(await sc.question('Choissez une année (format XXXX)')); 
console.log(response);
let text;


if(response%4!=0){
console.log('L\'année '+response +' est non bissextile'); 
                }
else{
        if(response%100==0){
                if(response%400!=0){
                console.log('L\'année '+response +' est non bissextile'); 
                                   }
                else{
                console.log('L\'année '+response +' est bissextile'); 
                    }
                           }
        else{
        console.log('L\'année '+response +' est bissextile'); 
            }
    }                         
sc.close();
                    }
await main()

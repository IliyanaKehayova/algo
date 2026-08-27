/*Pour cet exercice, vous devez créer une application web affichant la liste des employés d’une société. Les informations proviennent d’une API fictive et sont rendues disponibles dans le fichier JSON employees.json.
Les employés doivent être listés dans un tableau (sous forme d'objet littéral), avec les informations suivantes :
ID (fourni par API) 
Full name (Prenom Nom)
Email : (à calculer) Exemple pour John Doe => “j.doe@email.com”
Salaire mensuel : (à calculer)
Year of birth : (à calculer) 
Il faut créer un tableau d'objet littéraux qu'on pourra afficher avec console.table() ou une fonction d'affichage à faire; 
par exemple le premier objet 
{ id:1, 
full_name:"Tiger Wood", 
email : "t.wood@gmail.com", 
income_monthly:7180 , 
year_of_birth:1965 
}
 */


import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { readFile } from 'fs/promises';
async function main() {
const texteBrut = await readFile('./employes.json', 'utf-8');
        //console.log(texteBrut);
        // 2. On transforme ce texte en un véritable tableau d'objets littéraux JS
        const mesdata = JSON.parse(texteBrut);
        
        // 3. Utilisation du tableau
       // console.table( mesdata["data"]);
        let tabemployes= mesdata["data"];
        console.table(tabemployes);
        for (let i = 0; i < tabemployes.length; i++) {
            let objetemp= tabemployes[i];
            objetemp["mail"]=creerMail(tabemployes[i]);
            console.log(objetemp);
                                                     }

const sc = new createInterface({ input, output });

sc.close();

                        }
function creerMail( obj){
let chainemail='';
let chainenom= obj["employee_name"];
let tabnom=chainenom.split(' ');
chainemail+=tabnom[0].substring(0,1)+tabnom[1]+ "@gmail.com";
return chainemail.toLowerCase(); 
                        }


main();
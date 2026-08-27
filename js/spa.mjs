import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import{readFile} from "node:fs/promises";

async function main() {
const sc = new createInterface({ input, output });


const data = await readFile("./chats.json", "utf-8");
const catDataBase = JSON.parse(data);
console.table(catDataBase);


const catMap = catDataBase;
console.table(catMap);


console.log("La SPA de Mulhouse a actuellement "+catMap.length + " chats :");


catMap.forEach(cat => {
console.log("ID : "+cat.cat_id+" | Nom : "+cat.cat_name);
                       }
              )

let catChoice = parseInt(await sc.question("Parmi les chats ici, veuillez choisir le numéro du chat qui vous intéresse : "));
console.log(catChoice);



if (isNaN(catChoice)) {
    console.log("Veuillez entrer un nombre valide !");
                      } 
else {
    
    const chosenCat = catMap.find(cat => cat.cat_id === catChoice); //cette nouvelle variable est ce qu'on trouve dans la map si ça sorespond à l'id de chosenCat

    if (chosenCat) {
        showCat(chosenCat);

        let findCat = await sc.question("\nEst-ce que vous souhaitez réserver "+chosenCat.cat_name + " ? ");
        findCat = findCat.toLowerCase();
        console.log(findCat)

              
                if(findCat==="oui"){
                
                chosenCat.cat_status="indisponible";
                showCat(chosenCat);
                console.table(catMap);

                                    }
                                     
                                     
                    
        
                    }
                               
    else {
        console.log("Désolé, aucun chat avec l'ID "+catChoice+ "n'a été trouvé.");
         }
        
    }
         

sc.close();

                    }

function showCat(cat) {
    console.log("\n=== DÉTAILS DU CHAT ===");
    console.log("ID : "+cat.cat_id);
    console.log("Nom : "+cat.cat_name);
    console.log("Âge : "+cat.cat_age+" ans");
    console.log("Race : "+cat.cat_race);
    console.log("Couleur : "+cat.cat_fur_colors);
    console.log("Sexe : "+cat.cat_gender);
    console.log("Numéro de puce : "+cat.cat_microchip_number);
    console.log("Statut : "+cat.cat_status);
}





main();




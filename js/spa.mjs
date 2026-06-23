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

let catChoice = parseInt(await sc.question("Parmi les chats ici, veuillez choisir le numérodu chat qui vous intéresse : "));
console.log(catChoice);

if (isNaN(catChoice)) {
    console.log("Veuillez entrer un nombre valide !");
} else {
    const chosenCat = catMap.find(chat => chat.cat_id === catChoice);
    
    if (chosenCat) {
        showCat(chosenCat);
    } else {
        console.log(`Désolé, aucun chat avec l'ID ${catChoice} n'a été trouvé.`);
    }
}





/*
 let sortCats = []; 
    for (var key in catMap) { 
    
    console.table(`${catMap[key].cat_id} : ${catMap[key].cat_name}`);
    
    
                            };

    */
//console.table(sortCats);
/*
sortCats.forEach((element) => console.log(element));

 let sortCatsTab={};
      for (let i = 0; i < sortCats.length; i++) { //on parcourt tout le tableau sortable 
       
        sortCatsTab[sortCats[i][0]]= sortCats[i][1] //on remet 
        
      }                           
console.table(sortCatsTab);
*/
//console.table(sortCatsTab[0]);








/*

// Afficher d'abord la liste des chats disponibles
console.log("\n=== LISTE DES CHATS ===");
catMap.forEach(chat => {
    console.log(`ID: ${chat.cat_id} | Nom: ${chat.cat_name} | Race: ${chat.cat_race}`);
});
*/



// Vérifier si le choix est valide


//let myObj = {key1: ["value1", "value2"]};





/*
return{

cat_id: cats.cat_id,
cat_name: cats.cat_name,
cat_microchip_number: cats.cat_microchip_number,
cat_age: cats.cat_age,
cat_gender: cats.cat_gender,
cat_race: cats.cat_race,
cat_fur_colors: cats.cat_fur_colors,
}/*/

      


//fetch("ALGO/js/chats.json")  .then((response) => response.json())  .then((data) => console.table(data));
//console.log(catDataBase);

/*const allCatsTab = catDataBase.map((cats) => {

    
return{

cat_id: cats.cat_id,
cat_name: cats.cat_name,
cat_microchip_number: cats.cat_microchip_number,
cat_age: cats.cat_age,
cat_gender: cats.cat_gender,
cat_race: cats.cat_race,
cat_fur_colors: cats.cat_fur_colors,


      }

                                            }
                                    );

console.table(allCatsTab);
*/


sc.close();

}

function showCat(cat) {
    console.log("\n=== DÉTAILS DU CHAT ===");
    console.log(`ID : ${cat.cat_id}`);
    console.log(`Nom : ${cat.cat_name}`);
    console.log(`Âge : ${cat.cat_age} ans`);
    console.log(`Race : ${cat.cat_race}`);
    console.log(`Couleur : ${cat.cat_fur_colors}`);
    console.log(`Genre : ${cat.cat_gender}`);
    console.log(`Puce : ${cat.cat_microchip_number}`);
}
main();




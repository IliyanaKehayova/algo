import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import{readFile} from "node:fs/promises";

async function main() {
const sc = new createInterface({ input, output });


const data = await readFile("./chats.json", "utf-8");
const catDataBase = JSON.parse(data);
console.table(catDataBase);


const catMap = catDataBase.map((cats) => {
return{

cat_id: cats.cat_id,
cat_name: cats.cat_name,
cat_microchip_number: cats.cat_microchip_number,
cat_age: cats.cat_age,
cat_gender: cats.cat_gender,
cat_race: cats.cat_race,
cat_fur_colors: cats.cat_fur_colors,
}
});

console.table(catMap);


console.log("La SPA de Mulhouse a actuellement "+catMap.length + " chats :");


catMap.forEach(cats => {
console.log("ID : "+cats.cat_id+" | Nom : "+cats.cat_name);
                       }
              )

let catChoice = parseInt(await sc.question("Parmi les chats ici, veuillez choisir le numérodu chat qui vous intéresse : "));
console.log(catChoice);

if (isNaN(catChoice)) {
    console.log("Veuillez entrer un nombre valide !");
} else {
    const chatChoisi = catMap.find(chat => chat.cat_id === catChoice);
    
    if (chatChoisi) {
        console.log("\n=== DÉTAILS DU CHAT ===");
        console.log(`ID: ${chatChoisi.cat_id}`);
        console.log(`Nom: ${chatChoisi.cat_name}`);
        console.log(`Âge: ${chatChoisi.cat_age} ans`);
        console.log(`Race: ${chatChoisi.cat_race}`);
        console.log(`Couleur: ${chatChoisi.cat_fur_colors}`);
        console.log(`Genre: ${chatChoisi.cat_gender}`);
        console.log(`Puce électronique: ${chatChoisi.cat_microchip_number}`);
    } else {
        console.log(`Désolé, aucun chat avec l'ID ${catChoice} n'a été trouvé.`);
    }
}


function chooseCat(catChoice, catMap){

    
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




}
main();




/* Pour cet exercice, vous devez créer une application web affichant la liste des employés d’une société. Les informations proviennent d’une API fictive et sont rendues disponibles dans le fichier JSON employees.json.
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
}*/

import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";


async function loadData() {
let response = await fetch("https://arfp.github.io/tp/web/javascript2/03-employees/employees.json");
let data = await response.json();
console.log(data);

const [firstName, ...lastNameParts] = data.employee_name.split(" ");
const lastName = lastNameParts.join(" ").toLowerCase();
const email = `${firstName[0].toLowerCase()}.${lastName}@email.com`;
const year_of_birth = 2026-data.employee_age;
const income_monthly = data.employee_salary*12;

const employee = data.data.map((data)=>{

return{
id: data.id,
full_name: data.employee_name,
email: email,
year_of_birth : year_of_birth,
profile_image : data.profile_image,

}

}


)


let sortable = []; 
for (var key in data) { 
sortable.push([key, data[key]]); 
                                    }
console.table(sortable);





/*var result = [];

for (var key in data) { 
result.push([key, data[key]]); 
                                    }

console.table(result);*/
  
/*
function json2array(data){
    
    var keys = Object.entries(data);
    keys.forEach(function(key){
    result.push(data[key]);
    });
    return result;
}
console.table(result);
*/


    

//const workers = await fetch('https://arfp.github.io/tp/web/javascript2/03-employees/employees.json');
//const json = await Response.json();
//console.log(JSON.stringify(json));

/*async function getData() {
  const url = "https://arfp.github.io/tp/web/javascript2/03-employees/employees.json";
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const resultat = await reponse.json();
    console.log(resultat);
  } catch (erreur) {
    console.error(erreur.message);
  }
}

console.table()*/


//console.table(workers);

//const workersArray = Object.entries(workers);
//console.log(workersArray);

/*for (let i=0; i<workersArray.length; i++){
    console.log(workersArray[i]);
}*/

//console.table(workersArray);


//const values = Object.values(workers);
//console.log(values);

//const entries = Object.entries(workers);

/*for(const [key, value] of entries){
    console.log(key);
    console.log(value);
}*/

/*for(let key in workers){
    console.log(key);
    console.log(workers[key]);
                   };*/

//console.log(entries);


/*for(const key in workers){
    if (workers.hasOwnProperty(key)){
    console.log(workers[key]);
                                    }
                         }*/




/*function getId(){
    const id = [...this.id];
    let myString = `${this.employee_name} has an id of ${getId}`;
    getId.forEach(())
}*/



}

loadData();


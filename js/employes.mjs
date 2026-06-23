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

    let response = await fetch( //la méthode fetch sert comme une livraison de colis qui reste fermé lors de la livraison
        "https://arfp.github.io/tp/web/javascript2/03-employees/employees.json"
    );

    let data = await response.json(); //ici c'est comme si on ouvre le colis

    const employees = data.data.map((emp) => { //on va repartir les données dans une map afin de pouvoir les consulter avec la clé après

        const [firstName, ...lastNameParts] =
            emp.employee_name.split(" "); // on va diviser le nom entier par l'espace 

        const lastName =
            lastNameParts.join("").toLowerCase(); //on prend la deuxième partie du nom et on fait join pour qu'il s'affiche ensemble en miniscules

        const email =
            `${firstName[0].toLowerCase()}.${lastName}@email.com`; //l'adresse mail sera la lettre à la position zéro et le nom avec à la fin l'arobase

        const income_monthly =
            emp.employee_salary / 12; // on divise par 12 le salaire pour avoir le salaire mensuel

        const year_of_birth =
            2026 - emp.employee_age; //pour avoir l'annee de naicasse on fait 2026 moins l'age

        return { //on affiche les donnees demandees 

            id: emp.id,

            full_name: emp.employee_name,

            email: email,

            income_monthly: income_monthly,

            year_of_birth: year_of_birth

        };

    });

    console.table(employees);

}

loadData();
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






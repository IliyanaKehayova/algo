const myEmployee = {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    email: "",
    salary: 2150

}



myEmployee.email = myEmployee.firstname.toLowerCase() + "." + myEmployee.lastname.toLocaleLowerCase() + "@example.fr"
myEmployee.salary = myEmployee.salary + "€";


const tabDate = myEmployee[key].split("-");
myInput.value = tabDate[2] + "-" + tabDate[1] + "-" + tabDate[0];





const main = document.querySelector('main');
const myTable = document.createElement('table');
main.appendChild(myTable);
const myThead = myTable.createTHead();
const myBody = myTable.createTBody();

const myRow = document.createElement('tr');
myThead.appendChild(myRow);


//la version courte en format fonction
//on déclare que on a du texte dans le table head

function createHeaderCell (row, text) {
    const th = document.createElement('th');
    row.appendChild(th);
    th.textContent = text;
}

createHeaderCell(myRow, "Nom");
createHeaderCell(myRow, "Prenom");
createHeaderCell(myRow, "Date de naissance");
createHeaderCell(myRow, "Email");
createHeaderCell(myRow, "Salaire");

/*
La version longue du code

const myThName = document.createElement('th');
myRow.appendChild(myThName);
myThName.textContent = "Nom";
const myThSurname = document.createElement('th');
myRow.appendChild(myThSurname);
myThSurname.textContent = "Prenom";
const myThBirthday = document.createElement('th');
myRow.appendChild(myThBirthday);
myThBirthday.textContent = "Date de naissance";
const myThEmail = document.createElement('th');
myRow.appendChild(myThEmail);
myThEmail.textContent = "Email";
const myThSalary = document.createElement('th');
myRow.appendChild(myThSalary);
myThSalary.textContent = "Salaire";
*/



//on va définir ce qu'il y a dans le corps du tableau

const myFirstRow = document.createElement('tr');
myBody.appendChild(myFirstRow);

for (info in myEmployee){
    const infoTr = document.createElement('td');
    myFirstRow.appendChild(infoTr);
    infoTr.textContent = myEmployee[info];
    
}



//le titre du formulaire

const formTitle = document.createElement('p');
formTitle.textContent = "Modifier le profil";
main.appendChild(formTitle);

//on créé un champs formulaire

const myForm = document.createElement('form');
main.appendChild(myForm);




//on va afficher avec une fonction les labels dans le formulaire qui sert à modifier les informations

for (const key in myEmployee) {


    if(key=="email"){ //on saute le label mail
        continue;
    }
    

    
    const myFormLabel = document.createElement('label'); // on crée un label en élément html
    myForm.appendChild(myFormLabel);
    
    myFormLabel.textContent = key;

    //myFormLabel.appendChild(myLabel);
    //myFormLabel.htmlFor = key;
    const myInput = document.createElement('input'); // on crée l'élément input
    myForm.appendChild(myInput); // on le place dans le formulaire
    myInput.value = myEmployee[key]; // ce qui va s'afficher dans le champs input correspond a la valeur associée à key
    myInput.id = key;
    myFormLabel.htmlFor = myInput.id;

    if (key=="birthday"){
    const tabDate = myEmployee[key].split("-");
    myInput.value = tabDate[2] + "-" + tabDate[1] + "-" + tabDate[0];

    }

    /*
    for (const key in labels) {
        
        
        const label = object[key];
        
        
    }
*/

}




 const boutonEnregistrer = document.createElement('button');
    myForm.appendChild(boutonEnregistrer);
    boutonEnregistrer.textContent  = "Enregistrer";
    boutonEnregistrer.type = "button";

    boutonEnregistrer.addEventListener("click", majProfil);


function majProfil (boutonEnregistrer) {
    

    for (const element in myEmployee) {

        if(element=="email"){
        continue;
        }
        myEmployee[element] = document.getElementById(element).value;
        
    }
    myEmployee.email = myEmployee.firstname.toLowerCase() + "." + myEmployee.lastname.toLocaleLowerCase() + "@example.fr"
 
    for (const cell in myFirstRow.cells) {
        myFirstRow.cells[cell].textContent = Object.values(myEmployee)[cell];

        
}

}




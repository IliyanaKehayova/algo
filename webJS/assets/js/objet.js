const myEmployee = {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    email: "",
    salary: 2150

}

myEmployee.email = myEmployee.firstname.toLowerCase() + "." + myEmployee.lastname.toLocaleLowerCase() + "@example.fr"
myEmployee.salary = myEmployee.salary + "€"
const main = document.querySelector('main');
const myTable = document.createElement('table');
main.appendChild(myTable);
const myThead = myTable.createTHead();
const myBody = myTable.createTBody();

const myRow = document.createElement('tr');
myThead.appendChild(myRow);


//la version coutre en format fonction
//on déclare que on a du texte sur 

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


const myFirstRow = document.createElement('tr');
myBody.appendChild(myFirstRow);

for (info in myEmployee){
    const infoTr = document.createElement('td');
    myFirstRow.appendChild(infoTr);
    infoTr.textContent = myEmployee[info];
    
}


const formTitle = document.createElement('p');
formTitle.textContent = "Modifier le profil";
main.appendChild(formTitle);

const myForm = document.createElement('form');
main.appendChild(myForm);




for (const key in myEmployee) {


    if(key=="email"){
        continue;
    }


    
    const myFormLabel = document.createElement('label'); // on crée un label en él html
    myForm.appendChild(myFormLabel);
    myFormLabel.textContent = key;

    //myFormLabel.appendChild(myLabel);
    //myFormLabel.htmlFor = key;
    const myInput = document.createElement('input'); // on crée l'élément input
    myForm.appendChild(myInput); // on le place dans le formulaire
    myInput.value = myEmployee[key]; // ce qui va s'afficher dans le champs input correspond a la valeur associée à key
    myInput.id = key;
    myFormLabel.htmlFor = myInput.id;
    
    
}






const people = ['Mike Dev', 'John Makenzie', 'Léa Grande'];
people.push("Ariana Grande");
people.unshift("Dua Lipa");





let formContainer = document.createElement('form');

const rajoutTitre = document.createElement('p');
formContainer.appendChild(rajoutTitre);
rajoutTitre.textContent = "Ajouter une personne"





let labelNom = document.createElement('label');
formContainer.appendChild(labelNom);
let nomInput = document.createElement('input');
formContainer.appendChild(nomInput);
let labelPrenom = document.createElement('label');
formContainer.appendChild(labelPrenom);
let prenomInput = document.createElement('input');
formContainer.appendChild(prenomInput);
let boutonValider = document.createElement('button');
formContainer.appendChild(boutonValider);
boutonValider.type = "button";
boutonValider.textContent="Ajouter";
boutonValider.style.width="100px";
boutonValider.style.height="22px";
boutonValider.style.cursor = "pointer";





document.querySelector('main').appendChild(formContainer);

labelNom.textContent = "Nom";
labelPrenom.textContent = "Prenom";

boutonValider.addEventListener("click", function(event){
    event.preventDefault();


    const myNewAddedRow = document.createElement("tr");
    myBody.appendChild(myNewAddedRow);
    const myNewTdNom = document.createElement('td');
    myNewAddedRow.appendChild(myNewTdNom);
    myNewTdNom.style.border="1px solid #82a9c4";
    const myNewTdPrenom = document.createElement('td');
    myNewAddedRow.appendChild(myNewTdPrenom);
    myNewTdPrenom.style.border="1px solid #82a9c4";
    const myNewTdEmail = document.createElement('td');
    myNewAddedRow.appendChild(myNewTdEmail);
    myNewTdEmail.style.border="1px solid #82a9c4";
    const myNewTdX = document.createElement('td');
    myNewAddedRow.appendChild(myNewTdX);
    myNewTdX.style.border="1px solid #82a9c4";


    myNewTdNom.textContent = nomInput.value;
    myNewTdPrenom.textContent = prenomInput.value;
    
    myNewTdEmail.textContent = myNewTdPrenom.textContent.toLowerCase() + "." + myNewTdNom.textContent.toLowerCase() + "@exemple.com";
    myNewTdX.textContent = "X";
    
    const rajoutTexte = document.createElement('p');
    formContainer.appendChild(rajoutTexte);
    rajoutTexte.textContent = myNewTdPrenom.textContent + " " + myNewTdNom.textContent + " a été rajouté."
  

    myNewTdX.addEventListener("click", function() 
    {
        myNewAddedRow.remove()
    });

});




//fonction de Franck - on a sélectionné le main et dedans on a rajouté listContainer

function makeList(){


let listContainer = document.createElement('div');
let listElement = document.createElement('ul');
listElement.style.listStyle="none";
listElement.style.marginLeft=0;
listElement.style.paddingLeft=0;

document.querySelector('main').appendChild(listContainer);
listContainer.appendChild(listElement);

for (i=0; i< people.length; i++){
    const listItem = document.createElement('li');
    
    listItem.textContent = people[i];
    listElement.appendChild(listItem);
}
}
makeList();







const main = document.querySelector('main');
const myTable = document.createElement('table');

const myThead = myTable.createTHead();
const myBody = myTable.createTBody();


const myRow = document.createElement('tr');
myThead.appendChild(myRow);
const myThNom = document.createElement('th');
myRow.appendChild(myThNom);
myThNom.style.border = "1px solid #82a9c4";
const myThPrenom = document.createElement('th');
myRow.appendChild(myThPrenom);
myThPrenom.style.border = "1px solid #82a9c4";
const myThEmail = document.createElement('th');
myRow.appendChild(myThEmail);
myThEmail.style.border = "1px solid #82a9c4";
const myThX = document.createElement('th');
myRow.appendChild(myThX);
myThX.style.border = "1px solid #82a9c4";
myThX.style.cursor = "pointer";


myThNom.textContent = "Nom";
myThPrenom.textContent = "Prenom";
myThEmail.textContent = "Adresse mail";
myThX.textContent = "Supprimer";





for (i=0; i < people.length; i++){

    const person = people[i];
    const parts = person.split(" ");
    const prenom = parts[0];
    const nom = parts[1];
    const casePrenom = prenom.toLowerCase();
    const caseNom = nom.toLowerCase();
    const mail = casePrenom + "." + caseNom + "@exemple.com";

    const myNewRow = document.createElement('tr');
    myBody.appendChild(myNewRow);

    const myTdNom = document.createElement('td');
    myNewRow.appendChild(myTdNom);
    myTdNom.style.border = "1px solid #82a9c4";
    const myTdPrenom = document.createElement('td');
    myNewRow.appendChild(myTdPrenom);
    myTdPrenom.style.border = "1px solid #82a9c4";
    const myTdEmail = document.createElement('td');
    myNewRow.appendChild(myTdEmail);
    myTdEmail.style.border = "1px solid #82a9c4";
    const myTdX = document.createElement('td');
    myNewRow.appendChild(myTdX);
    myTdX.style.border = "1px solid #82a9c4";
    myTdX.style.cursor = "pointer";


    myTdNom.textContent = nom;
    myTdPrenom.textContent = prenom;
    myTdEmail.textContent = mail;
    myTdX.textContent = "X";



    myTdX.addEventListener("click", function() 
    {
        myNewRow.remove()
    });

    
    
    
}


main.appendChild(myTable);

myTable.style.border = "1px solid black";
myTable.style.borderCollapse = "collapse";














/*
const myTable = document.getElementById("myTable");
const myThead = myTable.createTHead();
const myTitleRow = myThead.insertRow();


function insertTitleCell (_value, _hook){
    const myTitleCell = document.createElement("th");
    myTitleCell.style.fontWeight="bold";
    myTitleCell.textContent="_value";
    _hook.appendChild(myTitleCell);
}
*/






/*
const ul = document.getElementsByTagName('ul');

for (i=0; i<=ul.lenght; i++){
    const li = document.getElementsByTagName('li');
    li.innerHTML = unorderedList[i];


    document.getElementById('unordered_list');
    ul.appendChild(li);
}
    */
function makeList(){

const people = ['Mike Dev', 'John Makenzie', 'Léa Grande'];
people.push("Ariana Grande");
people.unshift("Dua Lipa");


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

const person = people[i];
const parts = person.split(" ");
const prenom = parts[0];
const nom = parts[1];
const casePrenom = prenom.toLowerCase();
const caseNom = nom.toLowerCase();
const mail = casePrenom + "." + caseNom + "@exemple.com"

const myTable = document.createElement('table');
const myThead = myTable.createTHead();
const myBody = myTable.createTBody();
const myRow= document.createElement('tr');
myThead.appendChild(myRow);
const myThNom= document.createElement('th');
myRow.appendChild(myThNom);
const myThPrenom= document.createElement('th');
myRow.appendChild(myThPrenom);


myThNom.textContent = caseNom;
myThPrenom.textContent = casePrenom;



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
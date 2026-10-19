let today;
const myDate = document.getElementById('myDate');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');


function calculateAge() {
    result.textContent = "";
    let userDate = myDate.value;
    userDate = Date.parse(userDate);
    userDate = new Date(userDate);
    today = new Date();

    if (userDate > today) {
        result.textContent = "ERREUR : Sélectionnez une date dans le passé."
        return;
    }

    let dateFr = userDate.toLocaleDateString('fr-FR');
    let timeFr = userDate.toLocaleTimeString();

    result.innerHTML = "Vous êtes né(e) le <span>" + dateFr + "</span> à <span>" + timeFr +"</span>";

    let dateDiff = today - userDate;
    dateDiff = DateDiff / 1000 / 60 / 60 / 24 / 365.25;
    dateDiff=Math.floor(dateDiff); 

    result.innerHTML += "<br><br> Il s'est écoulé " + dateDiff + " années depuis votre naissance";

}

calculate.addEventListener('click', calculateAge);



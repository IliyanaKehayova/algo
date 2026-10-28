const main = document.getElementsByTagName('main');
const tbody = document.getElementById('cards-tbody');
const valider = document.getElementById('valider');
const stat = document.getElementById('stat');
const idParagraph = document.getElementById('id-paragraph')
const attackParagraph = document.getElementById('highest-attack-card-paragraph');
const nameParagraph = document.getElementById('name-paragraph');
const playedParagraph = document.getElementById('played-paragraph');
const victoryParagraph = document.getElementById('victory-paragraph');
const powerParagraph = document.getElementById('power-paragraph');
const armorParagraph = document.getElementById('armor-paragraph');

function createCell (row, value){

    const cell = document.createElement('td');
    cell.textContent = value;
    row.appendChild(cell);
}

fetch('./assets/json/tabjson.json')
.then(response=>response.json()) //convertir la réponse en objet
.then(data=> {
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const row = document.createElement("tr");
      for (const key in data[0]) {
            if (key === "description" && data[i][key] == undefined){
            createCell(row, "");
        }
        else {
            createCell(row, data[i][key]);
        }  
    }
   tbody.appendChild(row);
    }  


    /*
    
    valider.addEventListener('click',
    function findStat(event, stat){
        event.preventDefault();
        if(stat=="id" || 
            stat=="name" || 
            stat=="level" || 
            stat=="description" || 
            stat=="power" || 
            stat=="attack" || 
            stat=="armor" || 
            stat=="damage" || 
            stat=="mitigation" || 
            stat=="played" || 
            stat=="victory" || 
            stat=="defeat" || 
            stat=="draw"){
            
            return stat.value;
        }
        else {
            alert("You must enter a valid stat from the table.")
        } 
});        





    function findMax (data){
        let bestCard = null;
        
    
        for(let l = 0; l < data.length; l++){   
           if(data[l].findStat(stat) > max){
           bestCard = data[l]; //on stocke toutes les infos de l'objet dans une variable
            

           } 
}   return bestCard;
    }




        


    function fillField(findMax(data)){
    
    let idContent = "Id : " + bestCard.id;
    let nameContent = "Name : " + bestCard.name;
    let attackContent = "Attack : " + bestCard.attack;
    let playedContent = "Played : " + bestCard.played;
    let victoryContent = "Victories : " + bestCard.victory;
    let powerContent = "Power : " + bestCard.power;
    let armorContent = "Defense : " + bestCard.armor;

    return {
    idParagraph,
    nameParagraph,
    attackParagraph,
    playedParagraph,
    victoryParagraph,
    powerParagraph,
    armorParagraph
}
    }

    idParagraph.textContent = idContent;
    nameParagraph.textContent = nameContent;
    attackParagraph.textContent = attackContent;
    playedParagraph.textContent = playedContent;
    victoryParagraph.textContent = victoryContent;
    powerParagraph.textContent = powerContent;
    armorParagraph.textContent = armorContent;




*/









    function findMax (data){
        let maxAttack = 0;
        let cardName = "";
        let id = "";
        let played = "";
        let victory = "";
        let power = "";
        let armor = "";


        for(let l = 0; l < data.length; l++){   
           
           
           if(data[l].attack > maxAttack){
            maxAttack = data[l].attack;
            cardName = data[l].name;
            id = data[l].id;
            played = data[l].played;
            victory = data[l].victory;
            power = data[l].power;
            armor = data[l].armor;
           }
        

}   return {
    name: cardName,
    attack: maxAttack,
    id: id,
    played: played,
    victory: victory,
    power: power,
    armor: armor 
    };
    
    }

    const highestAttackCard = document.getElementById('highest-attack-card');
    const idParagraph = document.getElementById('id-paragraph')
    const attackParagraph = document.getElementById('highest-attack-card-paragraph');
    const nameParagraph = document.getElementById('name-paragraph');
    const playedParagraph = document.getElementById('played-paragraph');
    const victoryParagraph = document.getElementById('victory-paragraph');
    const powerParagraph = document.getElementById('power-paragraph');
    const armorParagraph = document.getElementById('armor-paragraph');
    idParagraph.textContent = "Id : " + findMax(data).id;
    nameParagraph.textContent = "Name : " + findMax(data).name;
    attackParagraph.textContent = "Attack : " + findMax(data).attack;
    playedParagraph.textContent = "Played : " + findMax(data).played;
    victoryParagraph.textContent = "Victories : " + findMax(data).victory;
    powerParagraph.textContent = "Power : " + findMax(data).power;
    armorParagraph.textContent = "Defense : " + findMax(data).armor;
    

    

}) //on récupère la data
.catch(error=> console.error("Erreur : "+ error));





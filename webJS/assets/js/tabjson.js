const tbody = document.getElementById('cards-tbody');

function createCell (row, value){

    const cell = document.createElement('td');
    cell.textContent = value;
    row.appendChild(cell);

}


function maxAttack () {
    for (const key in data[0]){
        if(key === "attack")

    }
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

    

}) //on récupère la data
.catch(error=> console.error("Erreur : "+ error));




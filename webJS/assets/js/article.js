import {Articles} from articles.js;

const formulaire = document.getElementById('formulaire');
const nom = document.getElementById('nom');
const tva = document.getElementById('tva');
const prix = document.getElementById('prix');
const valider = document.getElementById('valider');

valider.addEventListener('click',
    function(event){
        event.preventDefault();

        if(nom !== "" && prix !== "" && tva !== ""){

            formulaire.submit();
        }
        else {

        }

    }
)


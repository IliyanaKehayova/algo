const text = document.querySelector("#txtSize");
const btnIncrease = document.querySelector("#augmenter");
const btnDecrease = document.getElementById("diminuer");
const paragraphe = document.querySelector("#text");

function sizing (event) {

    const getEventId = event.target.id;
    console.log("getEventId");


    if (parseInt(zoneSize.value)==undefined) {
        console.error("la taille du texte n'est pas un nombre")

    }
    
    let sizeTxt = parseInt(zoneSize.value)
    

if(sizeTxt>= 8 && sizeTxt <=48 && getEventId === "txtSize") {
    //on fait rien
}
else if(sizeTxt> 8 && sizeTxt <48 && getEventId === "btnIncrease"){
    sizeTxt++;
}
else if(sizeTxt> 8 && sizeTxt <48 && getEventId === "btnDecrease"){
    sizeTxt--;
}

else {
    sizeTxt=16;
}


paragraphe.style.fontSize = sizeTxt+"px";
zoneSize.value = sizeTxt;


btnIncrease.addEventListener("click", sizing);
btnDecrease.addEventListener("click", sizing);
zoneSize.addEventListener("change", sizing);


}

const mybtnSubmit= document.getElementById("valider");
const txtName=document.querySelector("#myName");
const chaine1 = document.querySelector("#myPassword1");
const chaine2= document.querySelector("#myPassword2");
const myBirthDate = document.getElementById('myBirthDate');
const myPassword1 = document.getElementById('myPassword1');
const myPassword2 = document.getElementById('myPassword2');
const myPhone = document.getElementById('myPhone')


mybtnSubmit.addEventListener("click",
    function(event){
        event.preventDefault();

        const myForm=document.querySelector("form");

        if (validateName(txtName.value)==true && validatePassword(chaine1.value,chaine2.value)==true ) {
       
            myForm.submit();   
        }else{

            alert("saisie du nom incorrect! ou mot de passe différents");
        }

    }
)
/**
 * 
 * @param {*} chaine 
 */

function validateName(chaine)
{ 
    let regexName=/^[A-Z][a-z]{3,}$/;
    
    return regexName.test(chaine);
}


/*
function validatePassword(chaine1,chaine2)
{
if (chaine1===chaine2) {
    
    return true;
}
return false;
}
*/

function validDate (myBirthDate) {
    let birthDate = myBirthDate.value;

    if (birthDate === ""){
        return false;
    }

    let [year, month, day] = birthDate.split("-").map(Number);

    /*
    birthDate = Date.parse(birthDate);
    birthDate = new Date(userDate);
    const birthDay = getDate(birthDate);
    const birthMonth = getMonth(birthDate);
    const birthYear = getFullYear(birthDate);
    */

    const newDate = new Date (Date.UTC(birthDay, birthMonth-1, birthYear));

    if (
        newDate.getUTCDate() !== birthDay ||
        newDate.getUTCMonth() !== birthMonth ||
        newDate.getUTCFullYear() !== birthYear
    ){
        return false;
    }
    
    let today = new Date();
    let todayString = today.getFullYear()+"-"+String((today.getMonth())+1).padStart(2,"0")+"-"+String((today.getDate())+1).padStart(2,"0");

    if (newDate >= todayString){
        return false;
    }
    else {
        return true;
    }

}
   



function validPassword (myPassword1, myPassword2) {
    let regexPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\]!@#$%&*(),.?":{}|<>^-]).{9,}$/;

    if (myPassword1 === myPassword2 && regexPassword.includes(myPassword1)){
        return true;
    }
    else {
        return false;
    }

}

function validNumber (myPhone) {
    let regexNumber = /^0[1-79][0-9]{8,8}$/g;


    if (regexNumber.includes(myPhone))
        return true;
    else {
        return false;
    }
}




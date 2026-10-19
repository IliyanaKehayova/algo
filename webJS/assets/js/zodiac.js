const date = document.getElementById('date');
const signe = document.getElementById('signe');
const calculate = document.getElementById('calculate');

function defineSign () {
    let birthDate = date.value;
    birthDate = Date.parse(birthDate);
    birthDate = new Date(birthDate);
    const birthDay = birthDate.getDate();
    const birthMonth = birthDate.getMonth()+1;


    if ((birthMonth === 1 &&  (birthDay >= 20 && birthDay <=31)) || (birthMonth === 2 &&  (birthDay >= 1 && birthDay <=18))) {
        signe.innerHTML = '<p>Votre signe zodiacal est Verseau.</p><br><br><img src="./assets/img/verseau.png">'
    }
    else if ((birthMonth === 2 &&  (birthDay >= 19 && birthDay <=29)) || (birthMonth === 3 &&  (birthDay >= 1 && birthDay <=20))){
        signe.innerHTML = '<p>Votre signe zodiacal est Poissons.</p><br><br><img src="./assets/img/poissons.png">'
    }
    else if ((birthMonth === 3 &&  (birthDay >= 21 && birthDay <=31)) || (birthMonth === 4 &&  (birthDay >= 1 && birthDay <=19))){
        signe.innerHTML = '<p>Votre signe zodiacal est Bélier.</p><br><br><img src="./assets/img/belier.png">'
    }
    else if ((birthMonth === 4 &&  (birthDay >= 20 && birthDay <=30)) || (birthMonth === 5 &&  (birthDay >= 1 && birthDay <=20))){
        signe.innerHTML = '<p>Votre signe zodiacal est Taureau.</p><br><br><img src="./assets/img/taureau.png">'
    }
    else if ((birthMonth === 5 &&  (birthDay >= 21 && birthDay <=30)) || (birthMonth === 6 &&  (birthDay >= 1 && birthDay <=20))){
        signe.innerHTML = '<p>Votre signe zodiacal est Gémeaux.</p><br><br><img src="./assets/img/gemeaux.png">'
    }
    else if ((birthMonth === 6 &&  (birthDay >= 21 && birthDay <=30)) || (birthMonth === 7 &&  (birthDay >= 1 && birthDay <=22))){
        signe.innerHTML = '<p>Votre signe zodiacal est Cancer.</p><br><br><img src="./assets/img/cancer.png">'
    }
    else if ((birthMonth === 7 &&  (birthDay >= 23 && birthDay <=31)) || (birthMonth === 8 &&  (birthDay >= 1 && birthDay <=22))){
        signe.innerHTML = '<p>Votre signe zodiacal est Lion.</p><br><br><img src="./assets/img/lion.png">'
    }
    else if ((birthMonth === 8 &&  (birthDay >= 23 && birthDay <=31)) || (birthMonth === 9 &&  (birthDay >= 1 && birthDay <=22))){
        signe.innerHTML = '<p>Votre signe zodiacal est Vierge.</p><br><br><img src="./assets/img/vierge.png">'
    }
    else if ((birthMonth === 9 &&  (birthDay >= 23 && birthDay <=30)) || (birthMonth === 10 &&  (birthDay >= 1 && birthDay <=22))){
        signe.innerHTML = '<p>Votre signe zodiacal est Balance.</p><br><br><img src="./assets/img/balance.png">'
    }
    else if ((birthMonth === 10 &&  (birthDay >= 23 && birthDay <=31)) || (birthMonth === 11 &&  (birthDay >= 1 && birthDay <=21))){
        signe.innerHTML = '<p>Votre signe zodiacal est Scorpion.</p><br><br><img src="./assets/img/scorpion.png">'
    }
    else if ((birthMonth === 11 &&  (birthDay >= 22 && birthDay <=30)) || (birthMonth === 12 &&  (birthDay >= 1 && birthDay <=21))){
        signe.innerHTML = '<p>Votre signe zodiacal est Sagittaire.</p><br><br><img src="./assets/img/sagittaire.png">'
    }
    else if ((birthMonth === 12 &&  (birthDay >= 22 && birthDay <=31)) || (birthMonth === 1 &&  (birthDay >= 1 && birthDay <=19))){
        signe.innerHTML = '<p>Votre signe zodiacal est Capricorne.</p><br><br><img src="./assets/img/capricorne.png">'
    }


}

calculate.addEventListener('click', defineSign);

function getDateOfBirth() {
    const birthDateValue = document.getElementById('dateOfBirth').value;
    const message = document.getElementById('messageEnDessous');

    if (!birthDateValue) {
        message.textContent = 'Merci de rentrer votre date de naissance.';
        return;
    }

    const dob = new Date(birthDateValue + 'T00:00:00');
    const aujourdhui = new Date();
    let age = aujourdhui.getFullYear() - dob.getFullYear();
    const monthDifference = aujourdhui.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && aujourdhui.getDate() < dob.getDate())) {
        age--;
    }

    message.textContent = 'Vous avez ' + age + ' ans.';
    document.getElementById('p1').textContent = Date();
    document.getElementById('p2').textContent = Date.now();
}

document.getElementById('buttonCalculate').addEventListener('click', getDateOfBirth);



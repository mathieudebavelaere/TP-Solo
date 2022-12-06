//-------------------------------------------Formulaire D'Inscription


const validateFormulaire = document.getElementById('validateFormulaire');
console.log(validateFormulaire);


//-----------------------firstName
validateFormulaire.addEventListener ('click', ()=> {
    const firstName = document.getElementById('firstName').value;
    console.log(firstName);

    const controlF = /^[a-zA-Z]+$/;

    if (controlF.test(firstName)) {
        alert ('ok');
    } else {
        alert ('mauvaise réponse mais fonctionne firstName');
    }
})
//-----------------------LastName
validateFormulaire.addEventListener('click', () => {
    const lastName = document.getElementById('lastName').value;
    console.log(lastName);

    const controlL = /^[a-zA-Z]+$/;

    if (controlL.test(lastName)) {
        alert ('ok');
    }
    else {
        alert ('mauvaise réponse mais fonctionne LastName');

    }
})

//-----------------------Date
validateFormulaire.addEventListener('click', () => {
    const birthDay = document.getElementById('birthDay').value;
    console.log(birthDay);

    const controlDate = /^\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])$/;

        if (controlDate.test(birthDay)) {
            alert ('ok');
        }
        else {
            alert ('mauvaise réponse mais fonctionne birthDay');
    
        }
})

//-----------------------Email
validateFormulaire.addEventListener('click', () => {
    const eMail = document.getElementById('eMail').value;
    console.log(eMail);

    const controlM = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

        if (controlM.test(eMail)) {
            alert ('ok');
        }
        else {
            alert ('mauvaise réponse mais fonctionne eMail');
    
        }
    
})

//-----------------------passWord

validateFormulaire.addEventListener('click', ()=> {
    const passWord = document.getElementById('passWord').value;
console.log(passWord);

const confPassWord = document.getElementById('confPassWord').value;
console.log(confPassWord);

const controlP = /^([a-zA-Z]{8,8}[0-9]{1,1})$/;

if (controlP.test(passWord)){
    if (passWord == confPassWord) {
       alert('ok mots de passe identique');

    } else {
        alert ('mot de pas non identique');
    }
} else {
    alert ('minimum 8 caractères et 1 nombre')
}
})
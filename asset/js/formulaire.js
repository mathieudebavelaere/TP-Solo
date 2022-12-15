
/*------------------blockFirstName---------------------*/
const blockFirstName = document.getElementById('blockFirstName');

blockFirstName.addEventListener('click', () => {
    placeFirstName.classList.remove('textL');
    placeFirstName.classList.add('textS');
})
/*------------------blockLastName---------------------*/

/*------------------blockFirstName---------------------*/
const blockLastName = document.getElementById('blockLastName');

blockLastName.addEventListener('click', () => {
    placeLastName.classList.remove('textL');
    placeLastName.classList.add('textS');
})
/*------------------blockLastName---------------------*/

/*------------------blockBirthDay---------------------*/
const blockBirthDay = document.getElementById('blockBirthDay');

blockBirthDay.addEventListener('click', () => {
    placeBirthDay.classList.remove('textBL');
    placeBirthDay.classList.add('textBS');
})
/*------------------blockLastName---------------------*/

/*------------------blockBirthDay---------------------*/
const blockMails = document.getElementById('blockMails');

blockMails.addEventListener('click', () => {
    placeMails.classList.remove('textL');
    placeMails.classList.add('textS');
})
/*------------------blockLastName---------------------*/

/*------------------blockMails---------------------*/
const blockpassWord = document.getElementById('blockpassWord');

blockPassWord.addEventListener('click', () => {
    placePassWord.classList.remove('textPWL');
    placePassWord.classList.add('textPWS');
})
/*------------------blockMails---------------------*/

/*------------------blockMails---------------------*/
const blockconfPassWord = document.getElementById('blockConfPassWord');

blockConfPassWord.addEventListener('click', () => {
    placeConfPassWord.classList.remove('textPWL');
    placeConfPassWord.classList.add('textPWS');
})
/*------------------blockMails---------------------*/


//-------------------------------------------Validation-REGEX


const validateFormulaire = document.getElementById('validateFormulaire');
console.log(validateFormulaire);


//-----------------------firstName
validateFormulaire.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    console.log(firstName);

    const controlF = /^[a-zA-Z]+$/;

    if (controlF.test(firstName)) {
        blockFirstName.style.border = 'solid rgba(65, 65, 65, 0.426) 2px';
    } else {
        blockFirstName.style.border = 'solid rgb(194, 46, 46) 2px';
    }
})
//-----------------------LastName
validateFormulaire.addEventListener('click', () => {
    const lastName = document.getElementById('lastName').value;
    console.log(lastName);

    const controlL = /^[a-zA-Z]+$/;

    if (controlL.test(lastName)) {
        blockLastName.style.border = 'solid rgba(65, 65, 65, 0.426) 2px';

    }
    else {
        blockLastName.style.border = 'solid rgb(194, 46, 46) 2px';
    }
})

//-----------------------BirthDay
validateFormulaire.addEventListener('click', () => {
    const birthDay = document.getElementById('birthDay').value;
    console.log(birthDay);

    const controlDate = /^\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])$/;

    if (controlDate.test(birthDay)) {
        blockBirthDay.style.border = 'solid rgba(65, 65, 65, 0.426) 2px';
    }
    else {
        blockBirthDay.style.border = 'solid rgb(194, 46, 46) 2px';
    }
})

//-----------------------Email
validateFormulaire.addEventListener('click', () => {
    const eMail = document.getElementById('mails').value;
    console.log(eMail);

    const controlM = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    if (controlM.test(eMail)) {
        blockMails.style.border = 'solid rgba(65, 65, 65, 0.426) 2px';
    }
    else {
        blockMails.style.border = 'solid rgb(194, 46, 46) 2px';
    }

})

//-----------------------passWord

validateFormulaire.addEventListener('click', () => {
    const passWord = document.getElementById('passWord').value;
    console.log(passWord);

    const confPassWord = document.getElementById('confPassWord').value;
    console.log(confPassWord);

    const controlP = /^([a-zA-Z]{8,8}[0-9]{1,1})$/;

    if (controlP.test(passWord)) {
        if (passWord == confPassWord) {
            blockPassWord.style.border = 'solid rgba(65, 65, 65, 0.426) 2px';
            blockConfPassWord.style.border = 'solid rgba(65, 65, 65, 0.426) 2px';
        } else {
            blockPassWord.style.border = 'solid rgb(194, 46, 46) 2px';
            blockConfPassWord.style.border = 'solid rgb(194, 46, 46) 2px';
        }
    } else {
        blockPassWord.style.border = 'solid rgb(194, 46, 46) 2px';
        blockConfPassWord.style.border = 'solid rgb(194, 46, 46) 2px';
    }
})
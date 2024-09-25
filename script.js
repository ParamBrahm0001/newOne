let isDOBOpen = false;
let dateOfBirth;
let settingCogEl = document.querySelector('#settingIcon');
let settingContentEl = document.querySelector('#settingContent');
let initialTextEl = document.querySelector('#initialText');
let afterDOBBtnTextEl = document.querySelector('#afterDOBBtnText');
let dobButtonEl = document.querySelector('#dobButton');
let dobInputEl = document.querySelector('#dobInput');

let yearEl = document.querySelector('#year');
let monthEl = document.querySelector('#month');
let dayEl = document.querySelector('#day');
let hourEl = document.querySelector('#hour');
let minutEl = document.querySelector('#minut');
let secondEl = document.querySelector('#second');

let twoDigitNumber = (number) =>{
    return number > 9 ? number: `0${number}`
}

const toggleDateOfBirthSelector = () => {
    if(isDOBOpen){
        settingContentEl.classList.add('hide');
    }else{
        settingContentEl.classList.remove('hide');
    }
    isDOBOpen = !isDOBOpen;
};
let updateAge = () =>{
    let currentDate = new Date();
    let dateDiff = currentDate - dateOfBirth;
    let year = Math.floor(dateDiff/(1000 * 60 * 60 * 24 * 365));
    let month = Math.floor(dateDiff/(1000 * 60 * 60 * 24 * 365)) % 12;
    let day = Math.floor(dateDiff/(1000 * 60 * 60 * 24)) % 30;
    let hour = Math.floor(dateDiff/(1000 * 60 * 60)) % 24;
    let minut = Math.floor(dateDiff/(1000 * 60)) % 60;
    let second = Math.floor(dateDiff/ 1000 % 60);

    yearEl.innerHTML = twoDigitNumber(year);
    monthEl.innerHTML = twoDigitNumber(month);
    dayEl.innerHTML = twoDigitNumber(day);
    minutEl.innerHTML = twoDigitNumber(minut);
    hourEl.innerHTML = twoDigitNumber(hour);
    secondEl.innerHTML= twoDigitNumber(second);
};

let setDateOfHandler = () => {
    let dateString = dobInputEl.value;
    dateOfBirth = dateString ? new Date(dateString): null;
    if(dateOfBirth){
        initialTextEl.classList.add('hide');
        afterDOBBtnTextEl.classList.remove('hide');
        setInterval(() => updateAge(), 1000);
    }else{
        afterDOBBtnTextEl.classList.add('hide');
        initialTextEl.classList.remove('hide');
    }
}
setDateOfHandler();



settingCogEl.addEventListener('click', toggleDateOfBirthSelector);
dobButtonEl.addEventListener('click', setDateOfHandler);
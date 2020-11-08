var currentDay = document.getElementById('currentDay')
var cardEl = document.querySelector("#booking-card");
var saveEvent = document.getElementById('save');
var input = document.getElementById("saveInput");

// global active day/time to be booked
var day = ''
var time = ''

// 
function setDay( value ){
    console.log( `[setDay] setting day value to: ${value}`)
    day = value;
}

function setTime( value ){
    console.log( `[setTime] setting time value to: ${value}`)
    time = value;
}




//displays current date
currentDay.innerText = moment().format('dddd, MMMM Do YYYY');

//adds an event that that displays a card block 
function addEventBtnEl(event) {
    event.preventDefault();

    if (day === ''){
        alert( 'Must choose day of the week')
        return;
    } if (time === ''){
        alert( 'Must choose a time')
        return;
    }

    displayCard();
}

//display day of the week and time in the card-block per event added
function displayCard(){
    console.log( `[displayCard] setting card....` )
    cardEl.style.visibility = "visible";
    
    document.querySelector('#day-block').innerHTML = `Booking @ ${day} at ${time}`;

}

// save button adds event to local storage
function saveEvent() {
    document.querySelector("#saveInput").innerHTML = input
    localStorage.setItem("inputServer", input.val());
    localStorage.input = JSON.stringify(input)
    
}
input = localStorage.input ? JSON.parse(localStorage.input) : "";
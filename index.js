var currentDay = document.getElementById('currentDay')
var cardEl = document.querySelector("#booking-card");

// global active day/time to be booked
var day = ''
var time = ''
var timeArray = JSON.parse(localStorage.getItem("inputServer"));
console.log(timeArray)
if (!timeArray) {
    timeArray = [];
}
console.log(timeArray)
// 
function setDay(value) {
    console.log(`[setDay] setting day value to: ${value}`)
    day = value;
}

function setTime(value) {
    console.log(`[setTime] setting time value to: ${value}`)
    time = value;
}

//displays current date selected by getElementById
currentDay.innerText = moment().format('dddd, MMMM Do YYYY');

//adds an event that that displays a card block 
function addEventBtnEl(event) {
    event.preventDefault();

    if (day === '') {
        confirm('Must choose day of the week.')
        return;
    } if (time === '') {
        confirm('Must choose a time.')
        return;
    }
    displayCard();

}

//display day of the week and time in the card-block per event added
function displayCard() {
    console.log(`[displayCard] setting card....`)
    cardEl.style.visibility = "visible";
    var saveToDo = "";
    document.querySelector('#day-block').innerHTML = '<h3>' + `Booking @ ${day} at ${time}` + '</h3>';
    for (var i = 0; i < timeArray.length; i++) {
        if (timeArray[i].day === day && timeArray[i].hour === time) {
            saveToDo = timeArray[i].toDo
        }
    }
    document.querySelector('#userToDo').textContent = saveToDo
}

//saves input as string
function writeInput() {
    var userInput = document.getElementById('writeInput').value

    var timeObject = {
        day: day,
        hour: time,
        toDo: userInput,
    };
    var doesTimeObjExist = timeArray.some(function (value) {
        if (value.hour === time && value.day === day) {
            value.toDo = userInput
        }
        return value.hour === time && value.day === day
    });
    console.log(doesTimeObjExist)
    if (!doesTimeObjExist) {
        timeArray.push(timeObject)
    }
    console.log(timeArray)
    // writeInput = localStorage.writeInput ? JSON.parse(localStorage.writeInput) : "";
    localStorage.inputServer = JSON.stringify(timeArray);
    document.querySelector('#userToDo').textContent = userInput
    document.getElementById('writeInput').value = ''

}
// save button adds event to local storage
function saveEntry() {
    writeInput();
    // localStorage.writeInput = JSON.stringify(writeInput);
}
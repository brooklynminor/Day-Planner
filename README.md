# Day Planner

## Objective
The purpose of this project was to create a calander application that allows the user to input and save events per each hour of the week. The app is created using three files. The app runs in the DOM while powered by JavaScript, and jQuery. The CSS is altered using a stylesheet which is linked to index.html.

## User Story
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Algorithms
The web-application documents the date and time using Moment.js.
```
currentDay.innerText = moment().format('dddd, MMMM Do YYYY');
```
Once the user selects a date and time, they wish to add an event too, a card becomes visible. The card allows the user to input and save the text. This is done using local storage, this stores data locally within the user's browser.

The user must select both a day and time in order to procceed to input an event. If the user fails to select either, they will be returned a confirm message of the requirements. 
```
function addEventBtnEl(event) {
    event.preventDefault();

    if (day === ''){
        confirm( 'Must choose day of the week.')
        return;
    } if (time === ''){
        confirm( 'Must choose a time.')
        return;
    }
    displayCard();

}
```
Event Listeners are methods that attach an event handler to a specified element without overwritting existing handlers. This method allows event listeners to be added to any HTML DOM object or element.

JSON is used to exchange data to and from a web server. The data received from the web server is displayed as a string. When the data is parsed it becomes a JS object. 
```
var timeArray =  JSON.parse(localStorage.getItem("inputServer"));
```
The text inputed into the date displayed, which varies depending on the date selected, is saved as a string. The object is converted with JSON.stringify.
```
    localStorage.inputServer = JSON.stringify( timeArray );
    document.querySelector('#userToDo').textContent = userInput
    document.getElementById('writeInput').value = ''
```
The getElementById method returns the element that has the ID attribute with the specified value. It is used when manipulating an element from the document. If no elements with a specified ID exists, console.log will return null.

A for loop is added in order for the user to cycle through the properties, while displaying a different value. This allows user to implement an event or modifiy on a specific date.
```
for(var i=0; i<timeArray.length; i++){
        if(timeArray[i].day === day && timeArray[i].hour === time){
            saveToDo = timeArray[i].toDo
        }
```

Query selector method is used to return an element that matches the specified selectors. In this case, it is used to select HTML elements based on their id and classes.
```
var cardEl = document.querySelector("#booking-card");
```




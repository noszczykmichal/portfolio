"use strict";

//I grab elements in the DOM
const contSoft=document.querySelector('[class*=contSoft]'); //I grab containers for the icons
const contHard=document.querySelector('[class*=contHard]'); 
const displaySoft=document.querySelector('[class*=soft]');//I grab paragraphs that will serve as displays
const displayHard=document.querySelector('[class*=hard]');
let eventTarget=null;


//I set addEventListener's-when the user will mouseover on the icons in 'myskills' div the exact content will be displayed in the paragraph, depending on attribute 'value' of the given icon

contSoft.addEventListener('mouseover', function(event){
    eventTarget=event.target;

    if(eventTarget==contSoft){
        displaySoft.innerText="najedź na ikonę";
    }else{
        displaySoft.innerText=eventTarget.getAttribute('value');
    }
})

contHard.addEventListener('mouseover', function(event){
    eventTarget=event.target;;

    if(eventTarget==contHard){
        displayHard.innerText="najedź na ikonę";
    }else{
        displayHard.innerText=eventTarget.getAttribute('value');
    }
})




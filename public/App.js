
var allElements= document.querySelector('.container');
var display2 = document.querySelector('#displayt');
var nameButton = document.querySelector('#nameid');
var skillButton = document.querySelector('#skillid');
var counternum = document.querySelector('.counternum');

display2.textContent ='My name is Ida';




function clickedName(){

display2.textContent ='My name is Ida';
}

nameButton.addEventListener("click", clickedName);




function clickedSkills(){

display2.textContent='I am a Front-End Developer';
}

skillButton.addEventListener("click", clickedSkills);







counternum.textContent = 0;

var allElements= document.querySelector('.container');
var display2 = document.querySelector('#displayt');
var nameButton = document.querySelector('#nameid');
var skillButton = document.querySelector('#skillid');

function App() {


function clickedName(){

display2.textContent ='I am a Front-End Developer';
}

nameButton.addEventListener("click", clickedName);




function clickedSkills(){

display2.textContent ='I am a Front-End Developer';
}

skillButton.addEventListener("click", clickedSkills);


}


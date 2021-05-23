import './responsive.css';
import './styles.css';

var display2 = document.querySelector('#displayt');
var nameButton = document.querySelector('.name');
var skillButton = document.querySelector('.skills');

function App() {


function clickedName(){

display2.textContent ='I am a Front-End Developer';
}

skillButton.addEventListener("click", clickedName);




function clickedSkills(){

display2.textContent ='I am a Front-End Developer';
}

skillButton.addEventListener("click", clickedSkills);


}


export default App;

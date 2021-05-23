import './responsive.css';
import './styles.css';

var display2 = document.querySelector('#skill');
var mainButton = document.querySelector('.skills');

function clickedButton(){

display2.textContent ='I am a Front-End Developer';
}

mainButton.addEventListener("click", clickedButton);






export default App;

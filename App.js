// Updated UI interaction logic and state handling
// Refined for cleaner state management and improved UX behavior

const container = document.querySelector('.container');
const displayText = document.querySelector('#displayt');
const nameButton = document.querySelector('#nameid');
const skillButton = document.querySelector('#skillid');
const counterDisplay = document.querySelector('.counternum');
const likeButton = document.querySelector('#likeid');

// Initial state
let likeCount = 0;
displayText.textContent = 'My name is Ida';
counterDisplay.textContent = likeCount;

// Event handlers
const showName = () => {
  displayText.textContent = 'My name is Ida';
};

const showSkills = () => {
  displayText.textContent = 'I am a Front End Developer with a focus on UI and interaction';
};

const handleLike = () => {
  likeCount += 1;
  counterDisplay.textContent = likeCount;
  
  likeButton.style.transform = 'scale(1.1)';
setTimeout(() => {
  likeButton.style.transform = 'scale(1)';
}, 100);
};

// Event listeners
nameButton.addEventListener('click', showName);
skillButton.addEventListener('click', showSkills);
likeButton.addEventListener('click', handleLike);
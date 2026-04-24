import { useState } from 'react';
import './responsive.css';
import './styles.css';


function App() {
  const [text, setText] = useState('My name is Ida');
  const [likes, setLikes] = useState(0);

  return (
    <div className="container">
      <div className="profile">


        <img 
  className="image" 
  src={process.env.PUBLIC_URL + '/images/linkedinphoto.jpg'} 
  alt="linkedin profile" 
/>

        <h1>Hi!</h1>
        <h2>{text}</h2>

        <div className="buttons">
          <button onClick={() => setText('My name is Ida')}>
            Name
          </button>

          <button onClick={() =>
            setText('I am a Front End Developer with a focus on UI and interaction')
          }>
            Skills
          </button>
        </div>

        <p className="counternum">{likes}</p>

     <img
  className="like"
  src={process.env.PUBLIC_URL + '/images/heart_011.jpg'}
  id="likeid"
  alt="like"
  onClick={() => setLikes(likes + 1)}
  style={{ cursor: 'pointer' }}
/>
        

      </div>
    </div>
  );
}

export default App;


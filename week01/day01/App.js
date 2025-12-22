import './App.css';
import image from './assets/image.png';

function App() {
  return (
    <div className="container">
      <img src={image} alt="Welcome" className="image" />

      <h1>Welcome </h1>
      <h2>I am Kiruthiga</h2>
      <p>
        This is my first React welcome page.
      </p>
      <p>Learn and give more innovative ideas.</p>    
    </div>
  );
}

export default App;

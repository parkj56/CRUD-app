// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Movie Reviews!</h1>

      <div className='review-form'>
        <label>Movie Name</label>
        <input className="movie-names" type="text" name="movieName" />
        <label>Review Here</label>
        <input className="review-cont" type="text" name="review" />

        <button>Submit</button>
      </div>
      
    </div>
  );
}

export default App;

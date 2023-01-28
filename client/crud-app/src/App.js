// import logo from './logo.svg';
import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', 
    {movieName: movieName, movieReview: review,}).then(()=>{
      alert('succesful insert');
    });
  }

  return (
    <div className="App">
      <h1>Movie Reviews!</h1>

      <div className='review-form'>
        <label>Movie Name</label>
        <input className="movie-names"
          type="text" 
          name="movieName" 
          onChange={(e)=>{
            setMovieName(e.target.value)
        }}/>

        <label>Review Here</label>
        <input className="review-cont" 
          type="text"
          name="review" 
          onChange={(e)=>{
            setReview(e.target.value)
        }}/>

        <button onClick={submitReview}>Submit</button>
      </div>
      
    </div>
  );
}

export default App;

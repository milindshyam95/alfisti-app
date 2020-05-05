import React from 'react';
import './App.css';
import MilindPic from "./images/milind.jpg"

function App() {
  return (
    <section id="container">
      <h1>Hi, I am Milind.</h1>
      <img src={MilindPic}></img>
      <p>I am a software engineer who has worked on backend technologies and am now exploring the frontend.</p>
      <button>LinkedIn</button>
    </section>
  );
}

export default App;
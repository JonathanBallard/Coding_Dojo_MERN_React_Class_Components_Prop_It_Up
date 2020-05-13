import React from 'react';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  const p1 = {
    first_name: "Jane",
    last_name: "Doe",
    age: 45,
    hair_color: "Black",
  }

  const p2 = {
    first_name: "John",
    last_name: "Smith",
    age: 88,
    hair_color: "Brown",
  }

  const p3 = {
    first_name: "Millard",
    last_name: "Fillmore",
    age: 50,
    hair_color: "Brown",
  }

  const p4 = {
    first_name: "Maria",
    last_name: "Smith",
    age: 62,
    hair_color: "Brown",
  }


  return (
    <div className="App">
      < PersonCard p1 />
      < PersonCard p2 />
      < PersonCard p3 />
      < PersonCard p4 />
    </div>
  );
}

export default App;

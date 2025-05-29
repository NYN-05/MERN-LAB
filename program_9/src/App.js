import React from 'react';
import './App.css';
import SearchFilter from './components/p9'; // Fixed import path

function App() {
  return (
    <div className="App">
      <h1>Search Filter Example</h1>
      <SearchFilter /> {/* Use the SearchFilter component */}
    </div>
  );
}

export default App;

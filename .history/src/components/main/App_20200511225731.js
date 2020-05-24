import React, { useState, useEffect } from 'react';
import './App.css';
import Search from '../search/Search'


const App = () => {

  return (
    <div className="main-container">
      <h1 className="app-title">Welcome to the Beer-finder app</h1>
      <Search />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';
import Category from './components/category/category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
    </div>
  );
}

export default App;
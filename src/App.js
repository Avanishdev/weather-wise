import React from 'react';
import MainDashboard from './components/MainDashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather Dashboard</h1>
      </header>
      <MainDashboard />
    </div>
  );
}

export default App;

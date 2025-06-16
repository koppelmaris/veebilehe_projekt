import React from 'react';
import Header from './components/Header';

import MainPage from './components/MainPage';
import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: '#35353D', minHeight: '100vh' }}>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
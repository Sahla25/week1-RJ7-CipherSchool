import React from 'react';
import './App.css';
import AllUserList from './components/AllUserList';
import Demo from './components/Demo';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <Demo/>
      <AllUserList/>
      <UserDetails/>
      
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import BussinessList from './components/BusinessList/BussinessList' ;
import SearchBar from './components/SearchBar/SearchBar' ;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BussinessList /> 
    </div>
    );
  }
    
}

export default App ;

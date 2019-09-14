import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

onButtonClick(e){
  console.log(e.target.id)
  var res = axios.get('http://localhost:8081/wake')
}

  render(){
    return (
      <div className="App">
        <body>
          <button onClick={this.onButtonClick} id="20:DE:20:DE:20:DE">Home PC</button>
          <button onClick={this.onButtonClick} id="21:DE:20:DE:20:DE">Laptop</button>
        </body>
      </div>
    );
  }
  
}

export default App;

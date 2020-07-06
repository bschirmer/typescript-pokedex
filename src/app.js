import React, { Component} from "react";
import "./app.css";
import Pokedex from './components/pokedex'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Typed Pokedex </h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Ben10Card from "./components/Ben10Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Audio from "./components/Audio";
import alias from "./alias.json";
import "./style.css";

class App extends Component {
  // Setting this.state.alias to the alias json array
  state = {
    message: "Time to begin!",
    alias:alias,
    unselectedAlias: alias,
    curScore: 0,
    highScore: 0
  };

  componentDidMount() {

  }

  mixArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  winner() {
    const checkScore = this.state.curScore;
    if(checkScore === 23) {
      console.log("winner");
    } else {
      console.log("no winner yet")
    }
  }

  selectAlias = id => {
    const findAlias = this.state.unselectedAlias.find(item => item.id === id);

    if (findAlias === undefined) {
      this.setState({
        message: "You Guessed Wrong",
        highScore: (this.state.curScore > this.state.highScore) ? this.state.curScore : this.state.highScore,
        curScore: 0,
        alias: alias,
        unselectedAlias: alias
      });
    }
    else {
      const newAlias = this.state.unselectedAlias.filter(item => item.id !== id);

      this.setState({
        message: "You Guessed Correct",
        curScore: this.state.curScore + 1,
        alias: alias,
        unselectedAlias: newAlias
      });
      console.log(this);
    }
    this.mixArray(alias);
    this.winner();
  };

  // Map over this.state.alias and render a Ben10Card component for each friend object
  render() {
    return (
      <div>
      <Title 
          message={this.state.message}
          curScore={this.state.curScore}
          highScore={this.state.highScore}
      />
      <Audio />
      <Wrapper>
          
        {this.state.alias.map(alias => (
          <Ben10Card
            id={alias.id}
            key={alias.id}
            name={alias.name}
            image={alias.image}
            selectAlias={this.selectAlias}
            curScore={this.state.curScore}
          />
        ))
        }
      </Wrapper>
      </div>
    );
  }
}

export default App;

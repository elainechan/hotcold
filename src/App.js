import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feedback from './components/Feedback';
import NumberForm from './components/NumberForm';
import Count from './components/Count';
import Records from './components/Records';
import NewGame from './components/NewGame';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: 0,
      feedback: false,
      counter: 0,
      records: []
    }
    this.getRandomNum = this.getRandomNum.bind(this);
    this.onGuess = this.onGuess.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.compare = this.compare.bind(this);
    this.giveFeedback = this.giveFeedback.bind(this);
  }
  // on start, choose random number
  // setState answer
  componentDidMount() {
    this.getRandomNum();
  }

  componentWillUnmount() {}

  // get random number and store in localstorage
  getRandomNum() {
    const randNum = Math.round(Math.random()*100);
    this.setState({answer: randNum});
    localStorage.setItem('answerKey', randNum);
  }
  // increment counter on NumberForm submit
  incrementCounter() {
    this.setState({counter: this.state.counter + 1})
  }

  onGuess() {
    this.incrementCounter();
    this.compare();
    this.giveFeedback();
  }
  // compare num on submit
  compare() {
    const answerKey = localStorage.getItem('answerKey');

  }
  
  // setState feedback on compare
  giveFeedback() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hot or Cold</h1>
          <NewGame />
        </header>
        <Feedback feedback={this.state.feedback} />
        <NumberForm onGuess={guess => this.setState({records: [...this.state.records, ...guess]})} />
        <Count count={this.state.counter} />
        <Records records={this.state.records} />
      </div>
    );
  }
}

export default App;

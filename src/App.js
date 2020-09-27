import logo from './logo.svg';
import './App.css';
import { config } from './config.js';
import React, { Component } from 'react';
import Tasks from './components/tasks';
import 'axios';


class App extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    fetch("https://disneydidfine.wpengine.com/wp-json/wp/v2/tasks/")
    .then(res => res.json())
    .then((data) => {
      this.setState({ tasks: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Tasks tasks={this.state.tasks} />
    )
  }
/*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	  My Second Deployed App on WP Engine's Headless Platform!
        </p>
        <p>{config.rootURL}</p>
      </header>
    </div>
  );
  */
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Test/Test'
import Dumb from './Dumb/Dumb'
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [{ name: 'Scott', age: 57 },
    { name: 'Kylie', age: 26 },
    { name: 'Kathy', age: 59 }
    ]
  }

  switchNameHandler = () => {

    console.log('click')
    // Wrong: this.state.persons[2].age = '[Redacted]';
    this.setState(
      {
        persons: [{ name: 'Scott', age: 57 },
        { name: 'Kylie', age: 26 },
        { name: 'Kathy', age: '[Redacted]' }]
      })

  };

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [{ name: 'Scott', age: 57 },
        { name: event.target.value, age: 26 },
        { name: 'Kathy', age: 59 }]
      })
  }

  render() {

    const style = {

      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <p>-RSS-</p>
          <Test />
          <Dumb />
          <button 
          style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
          <Person 
             name={this.state.persons[0].name} 
             age={this.state.persons[0].age}>Hobbies: (Bad) Golf
             
          </Person>
          
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            change={this.nameChangedHandler} />

          <Person 
             name={this.state.persons[2].name} 
             age={this.state.persons[2].age} 

          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

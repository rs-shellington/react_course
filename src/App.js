import React, { Component } from 'react';

import './App.css';

import Test from './Test/Test'
import Dumb from './Dumb/Dumb'
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
    { id: 'rss', name: 'Scott', age: 57 },
    { id: 'kes', name: 'Kylie', age: 26 },
    { id: 'kms', name: 'Kathy', age: 59 }
    ],
    showPersons: true,
  }

  deletePersonHandler = (index) => {

    console.log('delete '+index);
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});

  }

  switchNameHandler = () => {

    console.log('click')
    // Wrong: this.state.persons[2].age = '[Redacted]';
    let toggle = !this.state.showPersons;

    this.setState(
      {
        persons: [{ name: 'Scott', age: 57 },
        { name: 'Kylie', age: 26 },
        { name: 'Kathy', age: '[Redacted]' }],
        showPersons: toggle,
      })

  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex( p => 
      {return p.id === id}
      )
    
    const person = {
      ...this.state.persons[personIndex]
    }

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    person.name = event.target.value;

    this.setState(
      {
        persons: persons
      })
  }

  render() {

    const style = {

      backgroundColor: 'white',
      background: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} 
                    name={person.name} 
                    age={person.age} 
                    change={(event) => this.nameChangedHandler(event,person.id)}
                    key={person.id}/>
            })
          }

          
        </div>
      );

      style.background = 'red';

    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
      classes.push('bold');
    }

    return (
      <div className="App">
        <header className="App-header">
          

          <p className={classes.join(' ')}>-RSS-</p>
          <Test name='TestComponent'/>
          <Dumb />
          <button 
          style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
          {persons}
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

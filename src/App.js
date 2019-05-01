import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';


import Test from './components/Test/Test'
import Dumb from './components/Dumb/Dumb'
import Persons from './components/Persons/Persons'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App.js constructor');
  }

  state = {
    persons: [
    { id: 'rss', name: 'Scott', age: 57 },
    { id: 'kes', name: 'Kylie', age: 26 },
    { id: 'kms', name: 'Kathy', age: 59 }
    ],
    showPersons: true,
  }

  static getDerivedStateFromProps(props, state) {

    console.log('getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('componentDidMount');
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
        persons: [{id: 'rss',  name: 'Scott', age: 57 },
        { id: 'kes', name: 'Kylie', age: 26 },
        { id: 'kms', name: 'Kathy', age: '[Redacted]' }],
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

      
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor:'lightgreen',
        color:'black',
      }

    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangedHandler}/>

          

          
        </div>
      );

      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      }

    }

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
      classes.push('bold');
    }

    return (
      <StyleRoot>
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
      </StyleRoot>
    );
  }
}

export default Radium(App);

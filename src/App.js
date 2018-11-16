import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Head />
          <Select />
      </div>
    );
  }
}

class Head extends Component{
    render() {
        return (
            <div>
                <h1 className ="head">Поиск б\у автомобилей</h1>
            </div>
        );
    }
}

class Select extends Component{
    render() {
        return (
            <div>
            <select className="select">
                <option className="option">Пункт 1</option>
                <option className="option">Пункт 2</option>
            </select>

        </div>
    );
    }
}


export default App;


import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class App extends Component {
  render (){
    return (
      <div className="app">
        <div className="title">
          Reminder
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input className="from-control" placeholder="I have to..."/>
          </div>
          <button type="button" className="btn btn-success">Add Reminder</button>
        </div>
      </div>
    ) 
  }
}
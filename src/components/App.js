import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//
import { addReminder } from '../actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  addReminder = () => {
    console.log("this", this);
  }

  render (){
    return (
      <div className="app">
        <div className="title">
          Reminder
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input className="from-control" placeholder="I have to..." onChange={this.onChange}/>
          </div>
          <button type="button" className="btn btn-success" onClick={this.addReminder}>Add Reminder</button>
        </div>
      </div>
    ) 
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addReminder }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
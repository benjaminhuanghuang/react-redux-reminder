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

  changeState = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  addReminder = () => {
    console.log("this", this);
    this.props.addReminder(this.state.text);
  }

  renderReminders(){
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (  
              <li key={reminder.id} className="list-group-item">
                <div>{reminder.text}</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render (){
    return (
      <div className="app">
        <div className="title">
          Reminder
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input className="from-control" placeholder="I have to..." onChange={this.changeState}/>
          </div>
          <button type="button" className="btn btn-success" onClick={this.addReminder}>Add Reminder</button>
        </div>
        {this.renderReminders()}
      </div>
    ) 
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addReminder }, dispatch);
// }

function mapStateToProps(state){
  return {
    reminders: state
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, {addReminder})(App);
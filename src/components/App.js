import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import moment from 'moment';
//
import { addReminder, deleteReminder } from '../actions';

class App extends Component {

  constructor(props) {
    super(props);
     this.state = {
      text: '',
      dueDate:''
    }
  }

  changeState = (event) => {
    this.setState({
      text: event.target.value,
      dueDate: event.target.value
    });
  }

  addReminder = () => {
    console.log("this", this);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id){
    this.props.deleteReminder(id);
  }

  renderReminders(){
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (  
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div>{moment(new Date(reminder.dueDate)).fromNow()}</div>
                </div>
                <div className="list-item delete-button" onClick={()=>this.deleteReminder(reminder.id)}>
                  &#x2715;
                </div>
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
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input className="form-control" placeholder="I have to..." onChange={event => this.setState({text: event.target.value})}/>
            <input className="form-control" type="datetime-local" onChange={event => this.setState({dueDate: event.target.value})}/>
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
export default connect(mapStateToProps, {addReminder, deleteReminder})(App);
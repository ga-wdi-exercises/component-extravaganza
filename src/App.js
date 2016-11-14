import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
  }
  handlePassword(event){
    console.log("password");
  }
  handleSubmit(event){
    event.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h2>Please Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Username: <input type="text" value={this.state.value } onChange={this.handleChange} /></p>
          <p>Password: <input type="text" /></p>
          <p>Confirm Password: <input type="text" /></p>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

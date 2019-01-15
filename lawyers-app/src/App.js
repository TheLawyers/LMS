import React, { Component } from 'react';
import './App.css';
//import HomePage from './components/HomePage';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lowyers: [],
      dashboard: [],
      dashboardLowyers: [],
      lowyerName: ''
    }
  }

  componentDidMount(){
    const url = 'http://localhost:3000/lawyers';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        lowyers: data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }




  render() {
    return (
      <div className="App">
        {/* <HomePage/> */}
      </div>

    );
  }
}

export default App;
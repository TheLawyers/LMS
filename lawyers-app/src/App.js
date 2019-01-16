import React, { Component } from 'react';
import './App.css';
//import HomePage from './components/HomePage';
import Show from './components/Show';
import Profile from './components/Profile';
import { button } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
     lawyer: [],
      dashboard: [],
      dashboardLawyers: [],
      lawyerName: '', 
      activeShow: 'show'
      

    }
  }

  // change view function 



  componentDidMount(){
    const url = 'http://localhost:3000/lawyers';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
       lawyer: data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }


// (){
//   // set state to active show = show 
// }

goHome(show) {
  this.setState({
    activeShow: "show"
  })
}

goProfile(show) {
  this.setState({
    activeShow: "profile"
  })
}



  render() {
    return (
      <div className="app">
      <header> 
        
      </header>
      <div className="logo">Lawyers Managment System</div>
     <div className="home-btn">
     <button className="btn btn-primary btn-sm"onClick={this.goHome.bind(this)}>Home</button>
     <button className="btn btn-primary btn-sm" onClick={this.goProfile.bind(this)}>Profile</button>

     </div>

{this.state.activeShow === 'show' ? <Show/> : ''}
{this.state.activeShow === 'profile' ? <Profile/> : ''}

        {/* <HomePage/> */}
      </div>

      // @flow 


    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Show from './components/Show';
import Profile from './components/Profile';


import { button } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lawyersData: [],
      dashboard: [],
      dashboardLowyers: [],
      lawyerName: '',
      displayProfile: false,
      activeShow: 'show'
    }
  }

  // change view function 



  componentDidMount(){
    this.fetchLawyers();
    this.fetchDashData();
  }

  fetchLawyers() {
    const url = 'http://localhost:3000/lawyers';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        lawyersData: data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  fetchDashData() {

  }

  hendelName(name){
    //console.log(name)
    this.setState({
      lawyerName: name,
      displayProfile: true 
    })
  }

  renderProfile(data){
    // return data.map((el, index) => {
    //   return el.lawyer === this.state.lawyerName ? <Profile lawyer={el} key={index} /> : ''
    // })

console.log(data); 


    let lawyerProfile = data.filter( d => d.lawyer === this.state.lawyerName);
    console.log("lawyerProfilelawyerProfile\n\n " , lawyerProfile); 
    return (<Profile data={lawyerProfile }  /> )
  }

  renderShow(){

    return  <Show hendelName={this.hendelName.bind(this)} />
  }

  /* renderShowCases(data){
    return <ShowCases  />
  } */
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
      <div className="App">
      {this.state.displayProfile ? this.renderProfile(this.state.lawyersData) : this.renderShow() }
        
        
        {/* {this.state.lawyerName !== '' ? this.renderProfile(this.state.lawyers): ''} */}
     
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

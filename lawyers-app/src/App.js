import React, { Component } from 'react';
import './App.css';
import Show from './components/Show';
import Profile from './components/Profile';
//import ShowCases from './components/ShowCases';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lawyersData: [],
      dashboard: [],
      dashboardLowyers: [],
      lawyerName: '',
      displayProfile: false
    }
  }

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


  render() {
    return (
      <div className="App">
      {this.state.displayProfile ? this.renderProfile(this.state.lawyersData) : this.renderShow() }
        
        
        {/* {this.state.lawyerName !== '' ? this.renderProfile(this.state.lawyers): ''} */}
      </div>
    );
  }
}

export default App;

// import LawDashboard from './components/DashboardLowyers'
import React, { Component } from 'react';
import './App.css';
import Show from './components/Show';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      lawyersData: [],
      dashboard: [],
      dashboardLowyers: [],
      lawyerName: '',
      displayProfile: false
    }
  }

  componentDidMount() {
    this.fetchLawyers();
    this.fetchDashData();
    // this.fetchDashLaw()
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
    const url = 'http://localhost:3000/Dashboard';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          dashboard: data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  fetchDashLaw(id) {
    const url = `http://localhost:3000/lawyers/Dashboard/${id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {

        this.setState({
          dashboardLowyers: data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }


  hendelName(name) {
    //console.log(name)
    this.setState({
      lawyerName: name,
      displayProfile: true
    })
  }

  renderProfile(data) {
    // return data.map((el, index) => {
    //   return el.lawyer === this.state.lawyerName ? <Profile lawyer={el} key={index} /> : ''
    // })
    // const lawyerid =
    const lawyerProfile = (data.cases).filter(d => d.lawyer === this.state.lawyerName);
    //console.log("lawyerProfilelawyerProfile\n\n ", lawyerProfile);
    return (<Profile
      fetchDashLaw={this.fetchDashLaw.bind(this)}
      data={lawyerProfile}
      dashboardLowyers={this.state.dashboardLowyers}
    />

    )
  }

  renderShow() {

    return <div>
      <div className="imgheader">
        <Show hendelName={this.hendelName.bind(this)} />
      </div>
      <div className="info1">
      <div>
      <Dashboard
        dashboard={this.state.dashboard}
      /></div>
      <div>
        <h2> New </h2>
      </div>
      
      </div>
      </div>
  }

  /* renderShowCases(data){
    return <ShowCases  />
  } */


  render() {
    return (
      <div className="App">

        <div className="header">
          <div className="bar">
            <h2>LMS</h2>
          </div>
        </div>
<div>
        {this.state.displayProfile ? this.renderProfile(this.state.lawyersData) : this.renderShow()}
        </div>
        {/* {this.state.lawyerName !== '' ? this.renderProfile(this.state.lawyers): ''} */}
     <div>
       
     </div>
     
      </div>
    );
  }
}

export default App;

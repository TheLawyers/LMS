// import LawDashboard from './components/DashboardLowyers'
import React, { Component } from 'react';
import './App.css';
import Show from './components/Show';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard'

import FooterPage from './components/FooterPage'

class App extends Component {
  constructor() {
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

  componentDidMount() {
    this.fetchLawyers();
    this.fetchDashData();
    this.fetchDashLaw()
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
        console.log(data);
        // const dataa = this.state.lawyersData.filter(data => data.id !== id)
        // console.log(dataa);
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
    console.log("lawyerProfilelawyerProfile\n\n ", lawyerProfile);
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

        <div className="info12"><h2> News</h2></div>

        <div className="info12"><h2>Upcoming today </h2></div>

        <div className="info12"> <h2> Dashboard</h2>
          <Dashboard
            dashboard={this.state.dashboard}
          /></div>

      </div>




    </div> // landing end 


  }

  /* renderShowCases(data){
    return <ShowCases  />
  } */

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

        <div className="navbar navbar-inverse">
          <h1 className="navbar-brand" > <img src="https://i.imgur.com/f2rbFxG.png" style={{width:100, marginTop: -7}} /></h1>

        <h1 className="lms">Law Managment System</h1>
          <div className="navbar-header">
            <button type="button" className="btn btn-secondary" onClick={this.goHome.bind(this)}>Home</button> 
           
            <button type="button" className="btn btn-secondary" onClick={this.goProfile.bind(this)}>Profile</button>
        
            <button type="button" className="btn btn-secondary" onClick={this.goProfile.bind(this)}>Sign up</button>
          </div>

          {/* <ul class="navbar navbar-inverse">
      <li><button type="button" className="btn btn-secondary"onClick={this.goHome.bind(this)}>Home</button></li>
      <li><button  type="button" className="btn btn-secondary" onClick={this.goProfile.bind(this)}>Profile</button></li>
    </ul>
        */}

        <FooterPage/> 

        </div>





        {this.state.displayProfile ? this.renderProfile(this.state.lawyersData) : this.renderShow()}
        {/* {this.state.activeShow === 'show' ? <Show /> : ''}
        {this.state.activeShow === 'profile' ? <Profile /> : ''} */}

        {/* {this.state.lawyerName !== '' ? this.renderProfile(this.state.lawyers): ''} */}
      </div>


    );
  }
}

export default App;

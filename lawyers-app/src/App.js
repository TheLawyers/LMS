import React, { Component } from 'react';
import './App.css';
import Show from './components/Show';
import Profile from './components/Show';
import Dashboard from './components/Dashboard'
import LawDashboard from './components/DashboardLowyers'


class App extends Component {
  constructor() {
    super();
    this.state = {
      lawyersData: [],
      dashboard: [],
      dashboardLowyers: null,
      lawyerName: '',
      displayProfile: false
    }
  }
  componentDidMount() {
    this.fetchLawyers();
    this.fetchDashData();
    this.fetchDashLaw();
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
   id = 1
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

    console.log(data);


    let lawyerProfile = data.filter(d => d.lawyer === this.state.lawyerName);
    console.log("lawyerProfilelawyerProfile\n\n ", lawyerProfile);
    return (<Profile data={lawyerProfile} />)
  }

  renderShow() {

    return <div>  <Show hendelName={this.hendelName.bind(this)} />
    <LawDashboard 
    lawyerName={this.state.lawyerName}
    dashboardLowyers={this.state.dashboardLowyers} />
    </div>
  }

  homeDash(data) {

    const url = 'http://localhost:3000/Dashboard'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA')
        console.log(data);
        this.setState({
          dashboard: data,
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.displayProfile ? this.renderProfile(this.state.lawyersData) : this.renderShow()}

        <Dashboard
          dashboard={this.state.dashboard}
        />

        {/* {this.state.lawyerName !== '' ? this.renderProfile(this.state.lawyers): ''} */}
      </div>
    );
  }
}

export default App;
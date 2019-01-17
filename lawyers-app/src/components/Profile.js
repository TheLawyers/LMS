import React, { Component } from 'react';
// import ShowEdit from './ShowEdit';
import LawDashboard from './DashboardLowyers';
import ShowForm from './ShowForm';

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      showCases: true,
      case: [],
      edit: false,
      create: false
    }
  }

  handelSubmit(data) {
    this.setState({
      case: data,
      showCases: false,
      edite: false,
      create: false
    })
  }

  handelShowEdite(event) {
    event.preventDefault();
    this.setState({
      edit: true
    })
  }

  handelShowCreate(event) {


    event.preventDefault();
    this.setState({
      create: true
    })

    console.log("\n\n\n\n\n\n", "something")
    console.log(this.state.create)
  }
  

  handleSubmit(data) {
    if (this.state.case) {
      this.updateCase(data)
    } else {
      this.createCase(data)
    }
  }

  

  deleteCase(cases) {
    const url = `http://localhost:3000/lawyers/${cases.id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  createCase(cases) {
    const url = 'http://localhost:3000/lawyers'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cases)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  updateCase(cases) {
    const url = `http://localhost:3000/lawyers/${cases.id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cases)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })

  }

  renderShowForm() {
    return <ShowForm handleSubmit={this.handleSubmit.bind(this)} data={this.state.case} />
  }

  renderShow(data) {
    console.log(data)
    return (
      <div>
        <div>
          <button onClick={this.handelShowEdite.bind(this)}>Edit</button>
          <button onClick={() => this.deleteCase(this.state.case)}>Delete</button>
        </div>
        <p>Case name: {data.case_name}</p>
        <p>legal_instruments: {data.legal_instruments}</p>
        <p>description: {data.description}</p>
        <p>date: {data.date}</p>
        <p>prosecultor: {data.prosecultor}</p>
        <p>defendant: {data.defendant}</p>
        <p>type: {data.type}</p>
        <p>corut_name: {data.corut_name}</p>
        <p>location: {data.location}</p>
        {this.state.edit ? this.renderShowForm() : false}

      </div>
    )
  }

  renderCases() {
    return this.props.data.map((el, index) => {
      return (
        <div key={index} onClick={() => this.handelSubmit(el)}>
          <p> Legal Instruments: {el.legal_instruments}</p>
          <p> Description: {el.description}</p>
          <p>date: {el.date}</p>
        </div>
      );
    })
  }
  render() {
    return (
      <div>
        <h1>Lawyer: {this.props.data[0].lawyer}</h1>
        <h2> cases </h2>
        <button onClick={this.handelShowCreate.bind(this)}>Create</button>
        {this.state.showCases ? this.renderCases() : this.renderShow(this.state.case)}
        {this.state.create ? this.renderShowForm() : false}
        {this.props.fetchDashLaw(this.props.data[0].lawyers_id)}
        <LawDashboard
          // lawyerName={this.props.lawyerName}
          dashboardLowyers={this.props.dashboardLowyers} />
      </div>
    );
  }
}

export default Profile;

import React, { Component } from 'react';
import ShowForm from './ShowForm';
import DashboardLowyers from './DashboardLowyers';
import Location from './Location';

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
    }, function () {
      console.log(this.state.create)
    })

    console.log("\n\n\n\n\n\n", "something")

  }

  handleSubmit(data) {
    /* console.log('profile handlesubmit data')
    console.log(data);
    console.log('state:')
    console.log(this.state.case) */
    if (this.state.case.length > 0) {
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
        this.props.deleteCases(cases.id)
      })
      .catch(error => {
        console.log(error);
      })
  }

  createCase(cases) {
    console.log(cases);
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
        this.props.createCases(data)
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
        this.props.updateCases(data)
      })
      .catch(error => {
        console.log(error)
      })

  }

  renderShowForm() {
    return <ShowForm handleSubmit={this.handleSubmit.bind(this)} data={this.state.case} idData={this.props.data}
      // toggleModal={this.toggleModal.bind(this)}

    />
  }

  renderShow(data) {
    console.log(data)
    return (
      <div>
        <div className="container">
          <div className="show">

            <div>
              <button className="btn" onClick={this.handelShowEdite.bind(this)}>Edit</button>
              <button className="btn" onClick={() => this.deleteCase(this.state.case)}>Delete</button>
            </div>
            {/* <p>Case name: {data.case_name}</p> */}
            <p>legal_instruments: {data.legal_instruments}</p>
            <p>description: {data.description}</p>
            <p>date: {data.date}</p>
            <p>prosecultor: {data.prosecultor}</p>
            <p>defendant: {data.defendant}</p>
            <p>type: {data.type}</p>
            <p>corut_name: {data.corut_name}</p>
            <p>location: {data.location}</p>
            <div className="show-details">
              <Location />
            </div>
            {this.state.edit ? this.renderShowForm() : false}
          </div>
        </div>
      </div>
    )
  }

  // toggleModal() {
  //   this.setState({
  //     showCase: true,
  //     create: false,
  //     edit: false

  //   })
  // }

  renderCases() {
    return this.props.data.map((el, index) => {
      return (
        <div>
          <div key={index} onClick={() => this.handelSubmit(el)}>
            <div className="cases">
              <p> <h3>Legal Instruments:</h3> {el.legal_instruments}</p>
              <p>  <h3>Description: </h3> {el.description}</p>
              <p> <h3>date:</h3>  {el.date}</p>
            </div>
          </div>

        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="proheader">
          <button type="button" onClick={() => { this.setState({ showCases: true, create: false, edit: false }) }}>Profile</button>
          <div className="infolaw">
            <i class="fa fa-user-circle-o"></i>
            <h1>Lawyer: {this.props.data[0].lawyer}</h1>
          </div>
        </div>
        <div className="well">
          <h2>Dashboard</h2>

          {/* {this.fetchDashLaw(this.state.case.lawyer_id)} */}
        </div>
        <div> <DashboardLowyers
          dashboardLowyers={this.props.dashboardLowyers}
        /></div>
        <div className="well blockquote">
          <h2>CASES</h2></div>
        <div className="shows">
          <div className="action-buttons">
            <div onClick={this.handelShowCreate.bind(this)}>+</div>
          </div>

          {this.state.showCases ? this.renderCases() : this.renderShow(this.state.case)}
          {this.state.create ? this.renderShowForm() : false}
        </div>




      </div>
    );
  }
}

export default Profile;
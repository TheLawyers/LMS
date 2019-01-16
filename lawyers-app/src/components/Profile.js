import React, { Component } from 'react';

class Profile extends Component {
  constructor(){
    super()
    this.state = {
      showCases: true,
      case: []
    }
  }

  handelSubmit(data){
    this.setState({
      case: data,
      showCases: false
    })
  }

  renderShow(data){
    console.log(data)
    return (
      <div>
          <form>
            <button>Edit</button>
            <button>Delete</button>
          </form>
          <p>Case name: {data.case_name}</p>
          <p>legal_instruments: {data.legal_instruments}</p>
          <p>description: {data.description}</p>
          <p>date: {data.date}</p>
          <p>prosecultor: {data.prosecultor}</p>
          <p>defendant: {data.defendant}</p>
          <p>type: {data.type}</p>
          <p>corut_name: {data.corut_name}</p>
          <p>location: {data.location}</p>
      </div>
    )
  }

  renderCases(){
   return this.props.data.map((el , index)  => {
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
          {this.state.showCases ? this.renderCases() : this.renderShow(this.state.case)}

       
      </div>
    );
  }
}

export default Profile;

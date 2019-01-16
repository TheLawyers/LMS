import React, { Component } from 'react';


class Show extends Component {
    constructor(){
        super()
        this.state = {
            inputName: ''
        }
    }


    handleChange(event){
        const inputName = event.target.value;
        this.setState({
            inputName: inputName
        })
    }

    handelSubmit(event){
        event.preventDefault();
        this.props.hendelName(this.state.inputName)
    }

  render() {
    return (
      <div>
          <form onSubmit={this.handelSubmit.bind(this)}>
              <label>User Name:</label><input type="text" onChange={this.handleChange.bind(this)}/>
              <button>Access</button>
          </form>
      </div>
    );
  }
}

export default Show;
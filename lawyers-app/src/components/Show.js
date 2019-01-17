import React, { Component } from 'react';


class Show extends Component {
    constructor() {
        super()
        this.state = {
            inputName: ''
        }
    }


    handleChange(event) {
        const inputName = event.target.value;
        this.setState({
            inputName: inputName
        })
    }

    handelSubmit(event) {
        event.preventDefault();
        this.props.hendelName(this.state.inputName)
    }

    render() {
        return (

            <div>

                <div classNam="quote"> <h1>Stay focused, Save Time</h1> </div>

                <div className="landing-show">

                    <form onSubmit={this.handelSubmit.bind(this)}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                    <i className="fa fa-user prefix"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" onChange={this.handleChange.bind(this)} />

                            <button>Access</button>

                        </div>
                    </form>

                </div>





            </div>
        );
    }
}

export default Show;

{/* <div className="inputName">

          <form onSubmit={this.handelSubmit.bind(this)}>
              <label>User Name:</label><input type="text" onChange={this.handleChange.bind(this)}/>
              <button>Access</button>
          </form>
      </div> */}
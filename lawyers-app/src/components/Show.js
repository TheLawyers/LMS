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
                <div className="quote"> <h3>" Stay focused, Save Time "</h3> </div>


                <div className="inputheader">
                    <div className="group">
                        <form onSubmit={this.handelSubmit.bind(this)}>


                            <input type="text" className="input" required onChange={this.handleChange.bind(this)} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label className="label">  Your Username</label>

                            <button className="btn btn-secondary">Access</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;
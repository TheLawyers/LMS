import React, { Component } from 'react';


class ShowForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            case_name: props.data ? props.data.case_name: '',
            legal_instruments: props.data ? props.data.legal_instruments : '',
            description: props.data ? props.data.description : '',
            date: props.data ? props.data.date : '',
            prosecultor: props.data ? props.data.prosecultor : '',
            defendant: props.data ? props.data.defendant : '',
            type: props.data ? props.data.type : '',
            lawyers_id: props.data ? props.data.lawyers_id : '',
            court_id: props.data ? props.data.court_id : '',
            corut_name: props.data ? props.data.corut_name : '',
            location: props.data ? props.data.location : '',
            office: props.data ? props.data.office : '',
            id: props.data ? props.data.id : null

        }
    }

    handleChange(event){
        const data = {}; 
        data[ event.target.name] =  event.target.value
        this.setState(data)
        console.log(data)
    }

    handelSubmit(event){
        event.preventDefault();
        console.log('show form state, submission', this.state)
        this.props.handleSubmit(this.state)
    }

    render() {
        return (
            <div>
                <div className="modal">
                    <form onSubmit={this.handelSubmit.bind(this)}>
                        <label>case_name:</label><input type="text" value={this.state.case_name} name="case_name" onChange={this.handleChange.bind(this)} /><br />
                        <label>legal_instruments:</label><input type="text" value={this.state.legal_instruments} name="legal_instruments" onChange={this.handleChange.bind(this)} /><br />
                        <label>description:</label><input type="text" value={this.state.description} name="description" onChange={this.handleChange.bind(this)} /><br />
                        <label>date:</label><input type="date" value={this.state.date} name="date" onChange={this.handleChange.bind(this)} /><br />
                        <label>prosecultor:</label><input type="text" value={this.state.prosecultor} name="prosecultor" onChange={this.handleChange.bind(this)} /><br />
                        <label>defendant:</label><input type="text" value={this.state.defendant} name="defendant" onChange={this.handleChange.bind(this)} /><br />
                        <label>type:</label><select name="type" value={this.state.type} onChange={this.handleChange.bind(this)}>
                                                <option value="Legal rights">Legal rights</option>
                                                <option value="Criminal">Criminal</option>
                                                <option value="Family">Family</option>
                                                <option value="Commercial">Commercial</option>
                                                <option value="Commercial">Labour</option>
                                            </select><br />
                        {/* <label>lawyers_id:</label><select value={this.state.lawyers_id} onChange={this.handleChange.bind(this)}><option value={this.props.idData.lawyers_id}>{this.props.idData.lawyer}</option></select><br />
                        <label>court_id:</label><select value={this.state.court_id} name="court_id" onChange={this.handleChange.bind(this)}><option value={this.props.idData.court_id}>{this.props.idData.corut_name}</option></select><br /> */}
                        <label>lawyers_id:</label><input type="number" value={this.state.lawyers_id} name="lawyers_id" onChange={this.handleChange.bind(this)} /><br />
                        <label>court_id:</label><input type="number" value={this.state.court_id} name="court_id" onChange={this.handleChange.bind(this)} /><br />
                        <label>corut_name:</label><input type="text" value={this.state.corut_name} name="corut_name" onChange={this.handleChange.bind(this)} /><br />
                        <label>location:</label><input type="text" value={this.state.location} name="location" onChange={this.handleChange.bind(this)} /><br />
                        <label>office:</label><input type="text" value={this.state.office} name="office" onChange={this.handleChange.bind(this)} /><br />
                        <button>submit</button>
                        
                    </form>
                </div>
            </div>
        );
    }
}

export default ShowForm;
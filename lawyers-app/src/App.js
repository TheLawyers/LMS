import React, { Component } from 'react';
import './App.css';
import ShowLanding from './components/ShowLanding';

const API_URL = 'http://localhost:3000'

class App extends Component {
  render() {
    return (
      <div>
        <header>My Shows</header>
        {this.renderContent()}
        {this.state.modal ? 
          <ShowForm 
            handleSubmit={this.handleSubmit.bind(this)} 
            toggleModal={this.toggleModal.bind(this)}
            activeShow={this.state.activeShow}
            /> : ''}
            <show/> 
      </div>

    );
  }
}

export default App;

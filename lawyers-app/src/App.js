import React, { Component } from 'react';
import './App.css';
import Show from './components/Show';
import Profile from './components/Profile';
import News from './components/News';
import Dashboard from './components/Dashboard';


class App extends Component {
  constructor() {
    super();
    this.state = {
      lawyersData: [],
      dashboard: [],
      dashboardLowyers: [],
      lawyerName: '',
      displayProfile: false,
      news: []
    }
  }

  componentDidMount() {
    this.fetchLawyers();
    this.fetchDashData();
    this.fetchNews();
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

  deleteCases(id) {
    const deleteCases = this.state.lawyersData.filter(cases => cases.id !== id)
    this.setState({
      lawyersData: deleteCases
    })
  }

  updateCases(cases) {
    const updateCases = this.state.lawyersData.map(el => {
      return el.id === cases.id ? cases : el
    })
    this.setState({
      lawyersData: updateCases
    })
  }

  createCases(data) {
    console.log("HE", data)
    const newCases = this.state.lawyersData.concat([data]);
    this.setState({
      lawyersData: newCases
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

        const updatedShows = this.state.lawyersData.map(el => {
          return el.id === data.id ? data : el
        })
        console.log('current state: ', this.state.shows);
        console.log('new state: ', updatedShows)

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


    let lawyerProfile = data.cases.filter(d => d.lawyer === this.state.lawyerName);
    //console.log("lawyerProfilelawyerProfile\n\n " , lawyerProfile); 
    return (
      <Profile
        createCases={this.createCases.bind(this)}
        deleteCases={this.deleteCases.bind(this)}
        updateCases={this.updateCases.bind(this)}
        data={lawyerProfile}
      // fetchDashLaw={this.fetchDashLaw.bind(this)}

      />)
  }


  fetchNews() {
    const url = 'https://newsapi.org/v2/top-headlines?apikey=ac66aa0c9d0648afab226f0eaafbbed7&q=court'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('data from api: ', data.articles)
        this.setState({ news: data.articles })
      })
      .catch(error => { console.log(error); })
  }


  renderNewsData() {
    console.log('news\n\n\n', this.state.news);

    const newsCourt = this.state.news.map(result => {
      //console.log("map ======> ",result)
      return (
        <News key={result.id} news={result} />
      )


    })
    return newsCourt;

  }



  renderShow() {

    return (<div>
      <div className="imgheader">



        <Show hendelName={this.hendelName.bind(this)} />
      </div>

      <div className="info1">

        <div className="info12 "><h2> News</h2>
          <div id="breaking-news-container">
            <div id="breaking-news-colour" className="slideup animated">

            </div>
            <div className="breaking-news-headline delay-animated2 fadein marquee">
              {this.renderNewsData()}
            </div>
          </div>
        </div>

        <div className="info12"><h2>Upcoming today </h2></div>

        <div className="info12">
          <Dashboard
            dashboard={this.state.dashboard}
          /></div>

      </div>


    </div>
    )
  }


  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <header>
          <h1 className="navbar-brand" > <img src="https://i.imgur.com/f2rbFxG.png" style={{ width: 100, marginTop: -7 }} alt='' /></h1>
          <div className="navbar-header">
            <div type="button" className="btn" onClick={() => { this.setState({ displayProfile: false }) }}>Home</div>
            <div type="button" className="btn" onClick={() => { this.setState({ showCases: true, create: false, edit: false }) }}>Profile</div>

            {/* <button type="button" className="btn btn-secondary" onClick={() => {this.setState({displayProfile: true})}}>Profile</button> */}
          </div>
        </header>
        {this.state.displayProfile ? this.renderProfile(this.state.lawyersData) : this.renderShow()}


        {/* {this.state.lawyerName !== '' ? this.renderProfile(this.state.lawyers): ''} */}

        <div className="footer">

          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> Geek </a>

        </div>
      </div>
    );
  }
}

export default App;
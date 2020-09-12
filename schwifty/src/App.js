import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Landing from './Components/Landing'; 
import Feed from './Components/Feed'; 
import Message from './Components/Message'; 
import Profile from './Components/Profile';
import Navigation from './Components/Navigation';

class App extends React.Component {
  state = {
    loggedIn: false,
    links: []
  }

  goToHomePage = () =>{
    let l = !this.state.loggedIn
    this.setState({
      loggedIn: l
    })
  }

  renderPages = () =>{
    if (this.state.loggedIn){
      return(<Redirect to='/home'/>)
    }
    else {
      return(<Redirect to='/'/>)
    }
  }
  
  renderLinks = () =>{
    if (this.state.loggedIn){
      return(<Navigation links={this.state.links}/>)
    }
  }

  setLinks = (links) => {
    this.setState({
      links
    })
  }

  render(){
    return (
      <>
        <br/>
        <Router>
          {this.renderPages()}
          {this.renderLinks()}
          <Route path='/' exact render={(props) => <Landing goToHomePage={this.goToHomePage}/>}/>
          <Route path='/home' exact render={(props) => <Feed setLinks={this.setLinks}/>}/>
          <Route path='/message' exact render={(props) => <Message setLinks={this.setLinks}/>}/>
          
          <Route path='/user' exact render={(props) => <Profile setLinks={this.setLinks}/>}/>
           
        </Router>
      </>
    );
  }
}

export default App;

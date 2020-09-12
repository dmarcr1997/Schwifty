import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Landing from './Components/Landing'; 
import Feed from './Components/Feed'; 
import Message from './Components/Message'; 
import Profile from './Components/Profile';

class App extends React.Component {
  state = {
    loggedIn: false
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

  render(){
    return (
      <>
        <br/>
        <Router>
          {this.renderPages()}
          <Route path='/' exact render={(props) => <Landing goToHomePage={this.goToHomePage}/>}/>
          <Route path='/home' exact render={(props) => <Feed/>}/>
          {/* <Message/> */}
          {/* <Profile/> */}
        </Router>
      </>
    );
  }
}

export default App;

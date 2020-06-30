import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Redirect, Link, Route } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Main from './components/Main';
import Profile from './components/Profile';

@observer
@inject('userStore')
class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoged: true
    }
  }

  login = async () => {
    await this.setState({
      isLoged: true
    })
    const user = this.props.userStore
    localStorage.setItem(`phone`, `${user.phone}`);
    localStorage.setItem(`password`, `${user.password}`);
  }

  componentDidMount() {
    const isUserinLocalstorage = localStorage.getItem('phone')
    console.log(isUserinLocalstorage)
    if (isUserinLocalstorage) {
      this.props.userStore.login(localStorage.getItem('phone'), localStorage.getItem('password'))
    }
  }

  render() {

    return (
      <Router>
        <Route path="/login" exact render={() => <Login login={this.login} isLoged={this.state.isLoged}/>} />
        <Route path="/registration" exact render={() => <Registration login={this.login}  isLoged={this.state.isLoged}/>} />
        {this.state.isLoged ? <Route path="/main" exact render={() => <Main />} /> : null}
       {/* <Route path="/main" exact render={() => <Main />} /> */}
       <Route path="/profilesettings" exact render={() => <Profile />} />

      </Router>
    );
  }
}

export default App;


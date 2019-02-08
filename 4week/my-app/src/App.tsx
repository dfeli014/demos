import React, { Component } from 'react';
import './App.css';
import './include/Bootstrap';
import { NavComponent } from './components/nav/Nav.component';
import { HomeComponent } from './components/home/Home.component';
import { ClickerComponent } from './components/clicker/Clicker.component';
import { BrowserRouter, Route } from 'react-router-dom';
import { SignInComponent } from './components/sign-in/SignIn.component';
import { ChuckNorrisComponent } from './components/chuck-norris/ChuckNorris.component';
import { FirstComponent } from './components/first/First.component';
import { SecondComponent } from './components/second/Second.component';
import { NestedComponent } from './components/nested/Nested.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavComponent />
          <div id="app-content-container">
            <Route path="/home" component={HomeComponent} />
            <Route path="/clicker" component={ClickerComponent} />
            <Route path="/sign-in" component={SignInComponent} />
            <Route path="/chuck-norris" component={ChuckNorrisComponent} />
            <Route path="/first" component={FirstComponent} />
            <Route path="/second" component={SecondComponent} />
            <Route path="/nested" component={NestedComponent} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AboutUs from './components/About-Us/AboutUs';
import Home from './components/Home/home';
import Blog from './components/Blogs/Blog';
import LoadSearchResultMatch from './components/Search-Bar/LoadSearchResultMatch';
import LoginPage from './components/Login/LoginPage';
import privacyPolicy from './components/Privacy-Policy/PrivacyPolicy.js'
import Disclaimer from "./components/Disclaimer/Disclaimer.js"
require('dotenv').config();
//https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project/48669909#48669909





class App extends React.Component  {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/search" component={LoadSearchResultMatch} />
        <Route exact path="/user/:oauthid" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/shubham-chavan" component={AboutUs} />
        <Route exact path="/article/:topic" component={Blog} />
        <Route exact path="/privacypolicy" component={privacyPolicy}/>
        <Route exact path="/disclaimer" component={Disclaimer}/>

      </Switch>
    );
  }
}

export default App;

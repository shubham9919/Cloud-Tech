import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import AboutUs from './components/About-Us/AboutUs';
import Home from './components/Home/home';
import Blog from './components/Blogs/Blog';
import LoadSearchResultMatch from './components/Search-Bar/LoadSearchResultMatch';


//https://stackoverflow.com/questions/40714583/how-to-specify-a-port-to-run-a-create-react-app-based-project/48669909#48669909

function App() {
  return (
    <Switch>
      <Route exact path="/search" component={LoadSearchResultMatch} />
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/:topic" component={Blog} />
    </Switch>
  );
}

export default App;

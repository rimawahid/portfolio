import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home";
import Project from "./components/Pages/Project/Project";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import Resume from "./components/Pages/Resume";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/project' component={Project} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

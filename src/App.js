import './App.css';
import React, { Component } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/Resume';
import Project from './pages/Project';
import Contact from './pages/Contact';
import TopbarPhoto from './topbar_photo.jpg';



class App extends Component {
  document.title = "Hang's website";
  render() {  
    return (
	<BrowserRouter>
	
	<div  style={{
		background: `url(${TopbarPhoto})`,
		}}
	>
	<h3 style ={{color: "black"}}>Tommy To's personal website</h3>
	<ul>
	<p className = "p1"><Link to="/">Home</Link>&nbsp;
	<Link to="/resume">Resume</Link>&nbsp;
	<Link to="/project">Project</Link>&nbsp;
	<Link to="/contact">Contact</Link>
	</p>
	</ul>
	
	<Route exact path="/" component={Home} />
	<Route path="/resume" component={Resume} />
	<Route path="/project" component={Project} />
	<Route path="/contact" component={Contact} />
	</div>
	
	</BrowserRouter>
    );
  }
  


}

export default App;

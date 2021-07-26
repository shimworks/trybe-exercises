import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { AiFillGithub } from 'react-icons/ai'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="">
          <h1>Meu portifólio</h1>
        </header>
        <div className="header">
          <div className="linkContent">
          <Link className="Link" to="/">Home</Link>
          <Link className="Link" to="/about">About</Link>
          <Link className="Link" to="/contact">Contact</Link>
          <Link className="Link" to="/projects">Projects</Link>
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
      <footer>
        <span>Todos os direitos reservados a Caio Takeshi Shimizo</span>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/shimworks"><AiFillGithub /> GitHub</a>
      </footer>
    </BrowserRouter>
  );
}

export default App;

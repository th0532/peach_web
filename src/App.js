import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Header from './component/header';
import Content from './Route/content';
import Login from './Route/login';
import Signup from './Route/signup';
import CrewFind from './Route/crewFind';
import CrewCreate from './Route/crewCreate';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header></Header>
        <Route exact path="/" component={Content}/>
        <Route path="/login/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/crewFind" component={CrewFind}/>
        <Route path="/crewCreate" component={CrewCreate}/>
      </HashRouter>
    </div>
  );
}

export default App;

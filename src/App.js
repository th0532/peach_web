import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Header from './pages/component/header';
import Footer from './pages/component/footer';
import MainRoute from './Route/mainRoute';
import LoginRoute from './Route/loginRoute';
import SignupRoute from './Route/signupRoute';
import CrewFindRoute from './Route/crewFindRoute';
import CrewCreateRoute from './Route/crewCreateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header></Header>
        <Route exact path="/" component={MainRoute}/>
        <Route path="/login/" component={LoginRoute}/>
        <Route path="/signup" component={SignupRoute}/>
        <Route exact path="/crewfind" component={CrewFindRoute}/>
        <Route path="/crewcreate" component={CrewCreateRoute}/>
        <Footer></Footer>
      </HashRouter>
    </div>
  );
}

export default App;

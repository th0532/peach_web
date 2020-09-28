import React,{useState, useEffect} from 'react';
import { HashRouter, Route} from "react-router-dom";
import axios from "axios";
import Header from './pages/header';
import Footer from './pages/footer';
import MainRoute from './Route/mainRoute';
import LoginRoute from './Route/loginRoute';
import SignupRoute from './Route/SignupRoute';
import SigninRoute from './Route/SigninRoute';
import CrewCategoryRoute from './Route/CrewCategoryRoute';
import CrewFindRoute from './Route/CrewFindRoute';
import CrewDetailRoute from './Route/CrewDetailRoute';
import CrewCreateRoute from './Route/CrewCreateRoute';
import ScrollToTop from './Route/ScrollToTop';
import './App.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop>
          <Header></Header>
          <Route exact path="/" component={MainRoute}/>
          <Route path="/login" component={LoginRoute}/>
          <Route path="/signin" component={SigninRoute}/>
          <Route path="/signup" component={SignupRoute}/>
          <Route path="/crewcategory" component={CrewCategoryRoute}/>
          <Route path="/crewfind" component={CrewFindRoute}/>
          <Route path="/crewdetail" component={CrewDetailRoute}/>
          <Route path="/crewcreate" component={CrewCreateRoute}/>
          <Footer></Footer>
        </ScrollToTop>
      </HashRouter>
    </div>
  );
}

export default App;

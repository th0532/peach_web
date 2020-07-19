import React,{useState, useEffect} from 'react';
import { HashRouter, Route} from "react-router-dom";
import axios from "axios";
import Header from './pages/component/header';
import Footer from './pages/component/footer';
import MainRoute from './Route/mainRoute';
import LoginRoute from './Route/loginRoute';
import SignupRoute from './Route/signupRoute';
import CrewCategoryRoute from './Route/CrewCategoryRoute';
import CrewFindRoute from './Route/CrewFindRoute';
import CrewDetail from './pages/crewDetail';
import CrewCreateRoute from './Route/crewCreateRoute';
import ScrollToTop from './Route/ScrollToTop';
import './App.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop>
          <Header></Header>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ exact path="/" component={MainRoute}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/login/" component={LoginRoute}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/signup" component={SignupRoute}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/crewcategory" component={CrewCategoryRoute}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/crewfind" component={CrewFindRoute}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/crewdetail" component={CrewDetail}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/crewcreate" component={CrewCreateRoute}/>
          <Footer></Footer>
        </ScrollToTop>
      </HashRouter>
    </div>
  );
}

export default App;

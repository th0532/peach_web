import React,{useState, useEffect} from 'react';
import { HashRouter, Route} from "react-router-dom";
import axios from "axios";
import Header from './pages/component/header';
import Footer from './pages/component/footer';
import MainRoute from './Route/mainRoute';
import LoginRoute from './Route/loginRoute';
import SignupRoute from './Route/signupRoute';
import CrewCategory from './pages/crewCategory';
import CrewFindRoute from './Route/CrewFindRoute';
import CrewDetail from './pages/crewDetail';
import CrewCreateRoute from './Route/crewCreateRoute';
import ScrollToTop from './Route/ScrollToTop';
import './App.css';


function App() {
  const [loading , setLoading] = useState(false);
  const [crewData, setCrewData] = useState();

  const getData = async() =>{
    axios
    .get('http://localhost:5000/api/crewdata')
    .then(({ data }) => {
      setLoading(true);
      setCrewData(data.crewData);
    })
    .catch(e => {  // API 호출이 실패한 경우
      setLoading(false);
      console.error(e);  // 에러표시
    });
  } 
  
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop>
          <Header></Header>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ exact path="/" data={crewData} component={MainRoute}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/login/" dataA={crewData} component={LoginRoute}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/signup" dataA={crewData} component={SignupRoute}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/crewcategory" data={crewData} component={CrewCategory}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/crewfind" dataA={crewData} component={CrewFindRoute}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/crewdetail" dataA={crewData} component={CrewDetail}/>
          <Route  /*onUpdate={() => window.scrollTo(0, 0)}*/ path="/crewcreate" dataA={crewData} component={CrewCreateRoute}/>
          <Footer></Footer>
        </ScrollToTop>
      </HashRouter>
    </div>
  );
}

export default App;

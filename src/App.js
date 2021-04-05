import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./containers/principal/inicio";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import ListCompany from "./containers/company/listCompany";
import AddCompany from "./containers/company/addCompany";
import EditCompany from "./containers/company/editCompany";
import "./App.css";
import "./bootstrap.min.css";


function App() {
  const [bussinesAPI, setBussines] = useState([]);
  const [recharge, setRecharge] = useState(true);

  useEffect(() => {
    if(recharge){
      consultAPI();
      setRecharge(false)
    }
  },[recharge]);

  const consultAPI = async () => {
    try {
      const answer = await fetch("http://localhost:3005/company");
      const result = await answer.json();
      setBussines(result);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/empresas">
          <ListCompany bussinesAPI={bussinesAPI} setRecharge={setRecharge}/>
        </Route>
        <Route exact path="/empresas/nueva">
          <AddCompany setRecharge={setRecharge}/>
        </Route>
        <Route exact path="/empresas/editar">
          <EditCompany />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

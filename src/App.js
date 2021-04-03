import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./containers/principal/inicio";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import ListCompany from "./containers/company/ListCompany";
import AddCompany from "./containers/company/AddCompany";
import EditCompany from "./containers/company/EditCompany";
import "./App.css";
import "./bootstrap.min.css";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/empresas">
          <ListCompany />
        </Route>
        <Route exact path="/empresas/nueva">
          <AddCompany />
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

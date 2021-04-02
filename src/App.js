import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./containers/principal/inicio";
import Header from "./common/header";
import Footer from "./common/footer";
import "./App.css";
import "./bootstrap.min.css";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

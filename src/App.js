import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./Principal/Inicio";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
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

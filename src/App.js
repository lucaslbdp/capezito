import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./containers/principal/inicio";
import Login from "./containers/login/";
import Header from "./components/common/header";
import Footer from "./components/common/footer";

import "./bootstrap.min.css";
import "./App.css";
function App() {

    return (  
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/login" component={Login} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;

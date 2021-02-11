import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logoHead from "../img/logoHead.png";
import facebookIcon from "../img/facebookIcon.png";
import instagramIcon from "../img/instagramIcon.png";
import whatsappIcon from "../img/whatsappIcon.png";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="grey lighten-3" dark expand="md" className="fixed-top" scrolling transparent>
        <MDBNavbarBrand href="/" className="pt-0 ml-5 pl-5"><img src={logoHead} alt="logo empresa"></img>
        </MDBNavbarBrand>
        <MDBNavbarToggler  onClick={this.toggleCollapse}/>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <div className="ml-auto mr-5">
        <a style={{ color: "black" }}
                        target="_blank noreferrer"
                        href="https://www.instagram.com/capezcomunicacion/"
                    >
                        <img src={instagramIcon} alt="icono ig" className="mr-2" style={{ maxWidth: "40px" }}></img></a>
                    <a style={{ color: "black" }}
                        target="_blank noreferrer"
                        href="https://api.whatsapp.com/send?phone=+5493815516016"
                    >
                        <img src={whatsappIcon} alt="icono wp" style={{ maxWidth: "40px" }} className="mr-2"></img></a>
                    <a style={{ color: "black" }}
                        target="_blank noreferrer"
                        href="https://www.facebook.com/capezcomunicacion"
                    >
                        <img src={facebookIcon} alt="icono fb" style={{ maxWidth: "40px" }} className="mr-5"></img></a>
                        </div>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;
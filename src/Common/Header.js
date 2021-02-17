import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBAnimation
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logoHead from "../img/logoHead.png";
import facebookIcon from "../img/facebookIcon.png";
import instagramIcon from "../img/instagramIcon.png";
import whatsappIcon from "../img/whatsappIcon.png";
import "../App.css";

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
      <MDBNavbar color="grey lighten-3" light expand="md" className="fixed-top pl-0 pr-0" scrolling transparent>
        <MDBNavbarBrand href="/" className="pt-0 img-header">
        <MDBAnimation type="flipInX" infinite duration="3s" delay="1s"><img src={logoHead} alt="logo empresa"></img></MDBAnimation>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} dark expand="md"/>
        <MDBCollapse id="navbarCollapse1" className="redesHeader" isOpen={this.state.isOpen} navbar>
          <div className="ml-auto mr-5">
        <a style={{ color: "black" }}
                        target="_blank noreferrer"
                        href="https://www.instagram.com/capezcomunicacion/"
                    >
                        <img src={instagramIcon} alt="icono ig" className="mr-3" style={{ maxWidth: "40px" }}></img></a>
                    <a style={{ color: "black" }}
                        target="_blank noreferrer"
                        href="https://api.whatsapp.com/send?phone=+5493815516016"
                    >
                        <img src={whatsappIcon} alt="icono wp" style={{ maxWidth: "40px" }} className="mr-3"></img></a>
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
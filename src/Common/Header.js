import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavLink, MDBAnimation, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import "../App.css";
import logoHead from "../img/logoHead.png";
import instagramIcon from "../img/instagramIcon.png";
import whatsappIcon from "../img/whatsappIcon.png";
import facebookIcon from "../img/facebookIcon.png";
import { Link } from "react-scroll";


class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar color="grey lighten-4" light expand="md" className="pb-2 pt-2 sticky-top" scrolling transparent>
          <div className="container">
            <MDBNavbarBrand className="black-text">
              <MDBNavLink to="/">
              <MDBAnimation type="slideInLeft">
              <Link
                      activeClass="active"
                      to="section1"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
              >
                <img src={logoHead} alt="logo" className="img-header"></img></Link></MDBAnimation></MDBNavLink>
            </MDBNavbarBrand >
            <MDBNavbarToggler onClick={this.toggleCollapse} className="header-no" />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>

                <div className="redes-container pb-2 header-no">
                  <ul style={{ paddingLeft: "110" }}>
                    <li>  <a
                      target="_blank noreferrer"
                      href="https://www.instagram.com/capezcomunicacion/"
                    >
                      <img src={instagramIcon} alt="instag" className="icono-header"></img></a></li>
                    <li>     <a 
                      target="_blank noreferrer"
                      href="https://api.whatsapp.com/send?phone=+5493815516016"
                    >
                      <img src={whatsappIcon} alt="whats" className="icono-header"></img></a></li>
                    <li>      <a
                      target="_blank noreferrer"
                      href="https://www.facebook.com/capezcomunicacion"
                    >
                      <img src={facebookIcon} alt="fb" className="icono-header"></img></a></li>
                  </ul>   </div>
              </MDBNavbarNav>
            </MDBCollapse>
          </div>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Header;
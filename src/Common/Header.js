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
                <MDBNavbar color="grey lighten-4" light expand="md" className="pb-0 pt-0 sticky-top" scrolling>
                    <div className="container">
                        <MDBNavbarBrand className="black-text mr-0">
                            <MDBNavLink to="/" className="pl-0 pr-0 img-header">
                                <MDBAnimation type="slideInLeft">
                                    <img src={logoHead} alt="logo" className="img-header"></img>
                                </MDBAnimation>
                            </MDBNavLink>
                        </MDBNavbarBrand >
                        <MDBNavbarNav right>

                            <div className="redes-container pb-2 header-no">
                                <ul className="pl-0">
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
                    </div>
                </MDBNavbar>
            </Router>
        );
    }
}

export default Header;
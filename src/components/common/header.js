import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBView, MDBNavItem, MDBNavLink, MDBAnimation, MDBNavbarNav, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import "../../App.css";
import logoHead from "../../img/logoHead.png";
import instagramIcon from "../../img/instagramIcon.png";
import whatsappIcon from "../../img/whatsappIcon.png";
import facebookIcon from "../../img/facebookIcon.png";


class Header extends Component {

    state = {
        navbarCollapse1: ''
    }
    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    };

    render() {
        return (
            <Router>
                <MDBNavbar color="grey lighten-4" light expand="md" className="pb-0 pt-0 sticky-top " scrolling transparent>
                    <div className="container">
                        <MDBNavbarBrand className="black-text mr-0">
                            <MDBNavLink to="/" className="pl-0 pr-0 img-header pt-0 pb-0">
                                <MDBAnimation type="slideInLeft">
                                    <img src={logoHead} alt="logo" className="img-header"></img>
                                </MDBAnimation>
                            </MDBNavLink>
                        </MDBNavbarBrand  >
                        <MDBNavbarToggler className="header-no" image="https://mdbootstrap.com/img/svg/hamburger6.svg?color=2BBBAD " onClick={this.toggleCollapse('navbarCollapse1')} />
                        <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
                            <MDBNavbarNav right>

                                <div className="redes-container header-no">
                                    <ul className="pl-3">
                                        <li>  <a
                                            target="_blank noreferrer"
                                            href="https://www.instagram.com/capezcomunicacion/"
                                        >
                                            <MDBView hover zoom>
                                                <img src={instagramIcon} alt="instag" className="icono-header"></img></MDBView></a></li>
                                        <li>     <a
                                            target="_blank noreferrer"
                                            href="https://api.whatsapp.com/send?phone=+5493815516016"
                                        >
                                            <MDBView hover zoom>
                                                <img src={whatsappIcon} alt="whats" className="icono-header"></img></MDBView></a></li>
                                        <li>      <a
                                            target="_blank noreferrer"
                                            href="https://www.facebook.com/capezcomunicacion"
                                        >
                                            <MDBView hover zoom>
                                                <img src={facebookIcon} alt="fb" className="icono-header"></img></MDBView></a></li>
                                    </ul>
                                    <MDBNavItem>
                                        <MDBNavLink to="/empresas">Empresas</MDBNavLink>
                                    </MDBNavItem>   </div>
                            </MDBNavbarNav></MDBCollapse>
                    </div>
                </MDBNavbar>
            </Router>
        );
    }
}

export default Header;
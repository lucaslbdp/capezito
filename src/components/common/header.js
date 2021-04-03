import React, { useState } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavLink,
    MDBNavItem,
    MDBAnimation,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
} from "mdbreact";
import "../../App.css";
import logoHead from "../../img/logoHead.png";
import instagramIcon from "../../img/socialMedia/instagramIcon.png";
import whatsappIcon from "../../img/socialMedia/whatsappIcon.png";
import facebookIcon from "../../img/socialMedia/facebookIcon.png";
import SocialMediaIcon from './socialMediaIcon'

const Header = () => {
    const [navbarCollapse, SetNavbarCollapse] = useState('');
    const navbarCollapseId = 'navbarCollapse';
    return (
        <MDBNavbar color="grey lighten-4"
            light expand="md"
            className="pb-0 pt-0 sticky-top"
            scrolling
            transparent>
            <div className="container">
                <MDBNavbarBrand className="black-text mr-0">
                    <MDBNavLink to="/"
                        className="pl-0 pr-0 img-header pt-0 pb-0">
                        <MDBAnimation type="slideInLeft">
                            <img src={logoHead}
                                alt="logo"
                                className="img-header"></img>
                        </MDBAnimation>
                    </MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler className="header-no"
                    image="https://mdbootstrap.com/img/svg/hamburger6.svg?color=2BBBAD "
                    onClick={() => { SetNavbarCollapse(navbarCollapse !== navbarCollapseId ? navbarCollapseId : ''); }}
                />
                <MDBCollapse id={navbarCollapseId} isOpen={navbarCollapse} navbar>
                    <MDBNavbarNav right>
                        <div className="redes-container d-flex">
                            <ul className="pl-3">
                                <li>
                                    <SocialMediaIcon url='https://www.instagram.com/capezcomunicacion/'
                                        icon={instagramIcon}>
                                    </SocialMediaIcon>
                                </li>
                                <li>
                                    <SocialMediaIcon url='https://api.whatsapp.com/send?phone=+5493815516016'
                                        icon={whatsappIcon}>
                                    </SocialMediaIcon>
                                </li>
                                <li>
                                    <SocialMediaIcon url='https://www.facebook.com/capezcomunicacion'
                                        icon={facebookIcon}>
                                    </SocialMediaIcon>
                                </li>
                                <MDBNavItem className="m-2">
                                    <MDBNavLink to="/login">Login</MDBNavLink>
                                </MDBNavItem>
                            </ul>
                        </div>
                    </MDBNavbarNav>
                </MDBCollapse>
            </div>
        </MDBNavbar>
    );

}

export default Header;
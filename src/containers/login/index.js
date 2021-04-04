import { connect } from 'react-redux'
import { executeLogin } from '../../redux/authorization/authorizationActions'
import { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from "mdbreact";
import './login.css'

const Login = (props) => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const { executeLogin } = props;

    const handleChangeInput = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    return (
        <MDBContainer className="mt-4 mb-4">
            <MDBRow className="justify-content-center">
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <p className="h4 text-center mb-4">Login</p>
                            <MDBInput
                                label="E-mail"
                                icon="user"
                                group
                                type="text"
                                onChange={(e) => handleChangeInput(e)}
                                name="email"
                                value={userInfo.email}
                            />
                            <MDBInput
                                label="Password"
                                icon="key"
                                group
                                type="password"
                                onChange={(e) => handleChangeInput(e)}
                                name="password"
                                value={userInfo.password}
                            />
                            <div className="text-center mt-4">
                                <MDBBtn type="submit" onClick={() => { executeLogin(userInfo) }}>Login</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

const mapDispatchToProps = {
    executeLogin
}

export default connect(null, mapDispatchToProps)(Login);
import { connect } from 'react-redux'
import { executeLogin } from '../../redux/authorization/authorizationActions'
import { useState } from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import ErrorsApi from '../../components/common/errorsApi'
import Card from '../../components/common/card';

const Login = (props) => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const { executeLogin, user } = props;

    const handleChangeInput = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    return (
        <Card size="col-md-6">
            <p className="h4 text-center mb-4">Login</p>
            <ErrorsApi error={user.error} />
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
                <MDBBtn type="submit" onClick={() => { executeLogin(userInfo); }}>Login</MDBBtn>
            </div>
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.userInfo
    }
}

const mapDispatchToProps = {
    executeLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
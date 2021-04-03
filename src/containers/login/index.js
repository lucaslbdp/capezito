import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import './login.css'

const Login = () => {
    return (
        <MDBContainer className="mt-4">
            <MDBRow className="justify-content-center">
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">Login</p>
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input type="email"
                            id="email"
                            className="form-control" />
                        <br />
                        <label htmlFor="password">
                            Password
                         </label>
                        <input type="password"
                            id="password"
                            className="form-control" />
                        <div className="text-center mt-4">
                            <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Login;
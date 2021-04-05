
import { MDBContainer, MDBRow, MDBCard, MDBCardBody } from "mdbreact";

const Card = (props) => {
    const { size } = props;
    return (
        <MDBContainer className="mt-4 mb-4">
            <MDBRow className="justify-content-center">
                <div className={size}>
                    <MDBCard>
                        <MDBCardBody>
                            {props.children}
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </MDBRow>
        </MDBContainer>
    );
}

export default Card;
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { MDBBtn } from "mdbreact";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "./add.css";
import Swal from 'sweetalert2';

const AddCompany = (props) => {
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [taxId, setTaxId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            businessName.trim() === "" ||
            email.trim() === "" ||
            taxId.trim() === "" ||
            phoneNumber.trim() === "") {
            setError(true);
            return;
        }
        setError(false);

        const dates = {
            businessName,
            email,
            taxId,
            phoneNumber
        }

        try {
            const allDates = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dates),
            };

            const result = await fetch(
                "http://localhost:3005/company",
                allDates
            );
            console.log(result);
            if (result.status === 201) {
                Swal.fire(
                    '¡Genial!',
                    '¡La empresa se añadió correctamente!',
                    'success'
                )
            }
            props.setRecharge(true);
            props.history.push("/empresas");


        } catch (error) {
            console.log(error);
        }

    }
    return (
        <Container className="d-flex justify-content-center">
            <Form className="w-50 mb-5" onSubmit={handleSubmit}>
                <h1 className="title my-5">Agregar empresa nueva</h1>
                {
                    error ? (
                        <Alert variant={"danger"} className="text-center">
                            Todos los campos son obligatorios
                        </Alert>) : null
                }
                <Form.Group controlId="businessName" className="text-center">
                    <Form.Label style={{ fontSize: "20px" }}>Nombre de la empresa</Form.Label>
                    <Form.Control type="text" name="nameBussines"
                        onChange={(e) => setBusinessName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="email" className="text-center">
                    <Form.Label style={{ fontSize: "20px" }}>Email</Form.Label>
                    <Form.Control type="email" name="emailBussines"
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="taxId" className="text-center">
                    <Form.Label style={{ fontSize: "20px" }}>Cuit</Form.Label>
                    <Form.Control type="number" name="cuitBussines"
                        onChange={(e) => setTaxId(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="phoneNumber" className="text-center">
                    <Form.Label style={{ fontSize: "20px" }}>Numero de Contacto</Form.Label>
                    <Form.Control type="number" name="numberBussines"
                        onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Group>
                <div className="text-center">
                    <MDBBtn outline color="success" type="submit" className="w-50 my-5">Agregar</MDBBtn>
                </div>
            </Form>
        </Container>
    );
};

export default withRouter(AddCompany);
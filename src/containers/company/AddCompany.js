import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddCompany = () => {
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [taxId, setTaxId] = useState();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [category, setCategory] = useState("");

    const readCategory = (e)=>{
        setCategory(e.target.value)
    }


    return (
        <Container className="d-flex justify-content-center">
            <Form className="w-50 mb-5">
                <h1 className="text-center my-5">Agregar empresa nueva</h1>
                <Form.Group controlId="businessName">
                    <Form.Label>Nombre de la empresa</Form.Label>
                    <Form.Control type="text" name="nameBussines"
                     onChange={(e) => setBusinessName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="emailBussines"
                     onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="taxId" className="text-center">
                    <Form.Label>Cuit</Form.Label>
                    <Form.Check type="number" name="cuitBussines"
                     onChange={(e) => setTaxId(e.target.value)}  />
                </Form.Group>
                <Form.Group controlId="phoneNumber" className="text-center">
                    <Form.Label>Numero de Contacto</Form.Label>
                    <Form.Check type="number" name="numberBussines"
                     onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Group>
                <h2 className="text-center mt-4">Categoria</h2>
                <div className="text-center my-4">
                    <Form.Check inline type="radio" label="Distribuidora" value="distribuidora" name="category" onChange={readCategory} />
                    <Form.Check inline type="radio" label="ventas" value="ventas" name="category" onChange={readCategory} />
                    <Form.Check inline type="radio" label="negocio" value="negocio" name="category" onChange={readCategory} />
                    <Form.Check inline type="radio" label="atencion al publico" value="atencion al publico" name="category" onChange={readCategory} />
                </div>
                <Button variant="primary" type="submit" className="w-100 mb-5">
                    Agregar Empresa
  </Button>

            </Form>
        </Container>
    );
};

export default AddCompany;
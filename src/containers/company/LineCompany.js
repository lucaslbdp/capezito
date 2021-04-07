import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { MDBBtn } from "mdbreact";
import Swal from "sweetalert2";

const LineCompany = (props) => {

    const deleteCompany = (id) => {
        Swal.fire({
            title: '¿Esta seguro de eliminarlo?',
            text: "No puedes recuperar un producto eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then(async (result) => {
            if (result.isConfirmed) {

                try {
                    const result = await fetch(`http://localhost:3005/company/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (result.status === 200) {
                        Swal.fire(
                            '¡Borrado!',
                            'La empresa fue borrada',
                            'success'
                        )
                    }
                    props.setRecharge(true);

                } catch (error) {

                }
            }
        })
    }


    return (
        <ListGroup.Item className="d-flex">
            <div>
                <p><strong>{props.bussines.businessName}</strong></p>
                <p>{props.bussines.email}</p>
                <p>{props.bussines.taxId}</p>
                <p>{props.bussines.phoneNumber}</p></div>
            <div className="ml-auto mt-5">
                <MDBBtn color="success">Editar</MDBBtn>
                <MDBBtn color="danger" onClick={() => deleteCompany(props.bussines.id)}>Eliminar</MDBBtn></div>
        </ListGroup.Item>
    );
};

export default LineCompany;
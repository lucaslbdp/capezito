import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';

const LineCompany = () => {

    const deleteCompany = async (id) =>{
        Swal.fire({
            title: '¿Esta seguro de eliminar el producto?',
            text: "No puedes recuperar un producto eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then(async(result) =>{

        })
    }



    return (
        <ListGroup.item className="d-flex">

        </ListGroup.item>
    );
};

export default LineCompany;
import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import LineCompany from './lineCompany';

const ListCompany = (props) => {
  return (
    <section className="container my-5">
      <h1 className="text-center my-5" style={{textTransform:"initial"}}>
        Lista de Empresas
        </h1>
      <ListGroup>
      {
        props.bussinesAPI.map((bussines)=> <LineCompany key={bussines.id} bussines={bussines} setRecharge={props.setRecharge}></LineCompany>)
      }
      </ListGroup>
    </section>
  );
}

export default ListCompany;
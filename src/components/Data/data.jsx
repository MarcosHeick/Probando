import React from 'react'
import { useEffect,useState} from 'react';
import { getAll } from '../../redux/actions';
import {useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function DaTa(){
const dispatch= useDispatch()

useEffect (()=>{
    dispatch(getAll())
},[]);
const allInformation = useSelector ((state)=>state.information)
//console.log(allInformation)
return(

        <Container fluid> 
        
        <h1 className='title'> 
            Base de datos   
        </h1>
        <Row >
               
              <Col>            Nombre completo       </Col>
              <Col>            Fecha de cumpleaños   </Col>
              <Col>             Pais de origen       </Col>
              <Col>              Email               </Col>
             
         </Row>
     { 
     
        allInformation.map(e=>{return(
            <Row>
               
                <Col>            {e.full_name}             </Col>
                <Col>            {e.birth_date}                </Col>
                <Col>            {e.country_of_origin}            </Col>
                <Col>            {e.email}                      </Col>
           
            </Row>

        )})
     
     }

        </Container>
)
}
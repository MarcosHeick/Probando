import React from 'react'
import { useEffect,useState} from 'react';
import { getAll } from '../../redux/actions';
import {useDispatch, useSelector } from 'react-redux'
    // import Container from 'react-bootstrap/Container';
    // import Row from 'react-bootstrap/Row';
    // import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './data.css'
export default function DaTa(){
const dispatch= useDispatch()

useEffect (()=>{
    dispatch(getAll())
},[]);

const allInformation = useSelector ((state)=>state.information)
//console.log(allInformation)
return(

        
        <div className='divMainData'>
        <h1 className='title'> 
            Base de datos   
        </h1>
        <Table striped bordered hover className='mainData' size="sm"> 
        <thead className='header '>
            <tr  >
            
              <th className='Column1'>            Nombre completo       </th>
              <th className='Column2'>            Fecha de cumpleaños   </th>
              <th className='Column1'>             Pais de origen       </th>
              <th className='Column2'>              Email               </th>
             
              </tr>
         </thead>
         <tbody>
     { 
     
        allInformation.map(e=>{return(
            
               <tr>
                <td className='Column1'>            {e.full_name}               </td>
                <td className='Column2'>            {e.birth_date}             </td>
                <td className='Column1'>            {e.country_of_origin}      </td>
                <td  className='Column2'>            {e.email}                 </td>
                </tr>
           

        )})
     
     }
     </tbody>
     </Table> 
      
    </div>
       
)
}
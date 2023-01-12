import React from 'react';
import { useEffect,useState } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { getData,postForm } from '../../redux/actions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import FormGroup from 'react-bootstrap/esm/FormGroup';
import Alert from 'react-bootstrap/Alert';
import Swal from 'sweetalert2';
import './home.css'


export default function Home (){
    const dispatch = useDispatch();
    const allLabels = useSelector ((state)=>state.labels);
    var obj= {}
    allLabels.items?.map(er=>{return obj[er?.name]=""})
   
    const [input,setInput] = useState(
       {}
    );
 
   const [check,setCheck] = useState(
    {res:true}
    );
 
 const  [errors,setErrors] =useState(
        {}
    );


    useEffect (()=>{
        dispatch(getData())
    },[]);

    function handleChange(data){
    console.log(data.target.name)
     if(data.target.type==='checkbox'){
     
            setCheck( 
                {   ...check,
                     res: !check.res
                }
    
                )   
        setInput({
            ...input,
            [data.target.name]: check.res
        })
        return null
    }
      
       if(data.target.type) {setInput({
             ...input,
            [data.target.name]: data.target.value
        })
        setErrors(validate({
            ...input,
           [data.target.name]: data.target.value
       }))
        }
        //console.log(input,"eee")
       
    }
  
 function validate(validation){
            console.log(validation.full_name,"asdasdasdas")
    let error= {}
   
       let Regex = new RegExp(/^[a-zA-Z\s]*$/);
       if( Regex.test(validation.full_name) === false ) {
         error.full_name= "El campo no debe contener caracteres especiales ni numeros"
       }   
      
   return error
 }

    function handleClick(send){
    //console.log(input,"asd")
   
    if (Object.keys(errors).length!==0){return Swal.fire({
        title: 'Datos incompletos o Erroneos',
        icon: 'error',
      })}
      send.preventDefault();        
      
     postForm(input)         
     setInput({})
     send.target.reset()
        Swal.fire({
            icon: 'success',
            title: 'Los datos se han cargado correctamente',
            footer: '<a href="https://prueba-tecnica-gamma.vercel.app/data">Ver la base de datos?</a>'
          })
      

    }

return(
  
    <div className='container'>
        <h1 className='title'> 
            Formulario
        </h1>
        <Form  className='mb-3' onSubmit={(e)=>handleClick(e)}>
        <h3>{allLabels.items?.map(e=> {return (

            e.type!== 'select'&& e.type!=='submit'&& e.type!=='checkbox'?
            
          
                <Form.Group
                 className='mb-4'
                 
                 >
                               

                    <Form.Label className='mb-3'>
                    {e.label}
                    </Form.Label>
                    <Form.Control
                    name={e.name}
                    className='labels'
                    type={e.type}
                    onChange={(e)=>handleChange(e)}
                    required={e.required}
                    min='1983-01-01'
                    max='2016-12-31'
                    placeholder={e.label}
                    />
                    <Form.Text className="txt" >{e.required===true&&!input[e.name]?'Campo obligatorio':null}</Form.Text>                
                    {errors[e.name]&&(<Alert className='alert' variant='warning' >{errors[e.name]}</Alert>)}
                    </Form.Group>
            
        :

        e.type==='select'?
        <Form.Group
        className='mb-4'
        controlId="floatingInput" >
              <Form.Label className='mb-3'>
                        {e.label}
              </Form.Label>
                <Form.Select
                className='SelectC'
                name={e.name} 
                onChange={(e)=>handleChange(e)} 
                required={e.required}
                > 

                    <option
                     value={null}>{"Seleccionar un pais"}
                     </option>
                     
                     {
                     e.options?.map(el=> 
                    {
                    return (
                        <option name={e.name} className='options' value={el.value}>
                            {el.label}
                        </option>)
                    }
                    )
                    }
                    
                </Form.Select>
                <Form.Text className="txt">{e.required===true&&!input[e.name]?'Campo obligatorio':null}</Form.Text>
               
             </Form.Group>

        :
        e.type==='submit'?
        <Form.Group className='submit' controlId="formBasicCheckbox">
            <Button className='btn' variant="dark" type={e.type} >{e.label}</Button>
            </Form.Group> 

            :
            <Form.Group  className="mb-4" controlId="formBasicCheckbox" value={!check.res} onChange={(e)=>handleChange(e)}>
            <Form.Check  name={e.type} type="checkbox" label={e.label}  required={e.required} />
          </Form.Group>
         )})

    }
   </h3>
   </Form>
    </div>
    
)
}
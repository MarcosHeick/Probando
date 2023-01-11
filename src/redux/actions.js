//import axios from 'axios';
import items from '../db.json'
import appFireBase from '../Firebase';
import {getFirestore,collection,addDoc, getDoc, getDocs, doc} from 'firebase/firestore'
import swal from 'sweetalert';

const db= getFirestore(appFireBase)

const data = items

export function getData() {
    return async function (dispatch){
        try{
            // const allData = (await axios(data));
            return dispatch ({
             type: 'GET_DATA',
             payload: data});
        }
        catch (error){
            console.log(error,'Route Error');
        }
    }
};
export  async function postForm(payload){

  
    try{
        await addDoc(collection(db,'formulario'),{
            ...payload,
        })
        
        swal({
            title: 'Datos cargados con Exito',
            icon: 'success',
            })
        
        return ({
            type:'POST_FORM',
            payload:payload
        })
    }
    catch(error){
        return    alert(error,'ups salio mal')
    }

}

export function getAll(){
    return async function(dispatch){
        try{
            const querySnapshot = await getDocs(collection(db, "formulario"));
          const b =  (querySnapshot.docs || []).reduce((prev, doc) => ({ ...prev, [doc.id]: doc.data() }), {})
          const values = Object.values(b); 
        return dispatch({
            type:'GET_ALL',
            payload: values
        })
   }
   catch(error)
   {    
    return alert(error)
   }
}
}
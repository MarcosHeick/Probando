
import appFireBase from '../../Firebase';
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import swal from 'sweetalert';
const db= getFirestore(appFireBase)
export async function postForm(payload){

   
    try{
        await addDoc(collection(db,'formulario'),{
            ...payload,
        })
        return   swal({
            title: 'Datos cargados con Exito',
            icon: 'success',
            })
    }
    catch(error){
        return    alert(error,'ups salio mal')
    }
}
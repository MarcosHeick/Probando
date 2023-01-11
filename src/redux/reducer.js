
import swal from'sweetalert'

const intialState= {

    labels :[],
    information : []
};

export default function rootReducer(state= intialState,action)

{

    switch(action.type){

        case 'GET_DATA' :
            return {
                ...state,
                labels:action.payload,
            }
            case "POST_FORM":{
                return{
                   ...state
                }
            }
            case "GET_ALL" :
                return{
                    ...state,
                    information:action.payload
                }
    default : return {...state}
    };
   
};
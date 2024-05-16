import { type } from "@testing-library/user-event/dist/type";
import { ACTIONS } from "./Project02";


export default function OperationButton({ dispatch, operation}) {

    return <button onClick={ () => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation} })}>{operation}</button>
    
    
}




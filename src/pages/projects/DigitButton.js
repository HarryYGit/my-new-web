import { type } from "@testing-library/user-event/dist/type";
import { ACTIONS } from "./Project02";


export default function DigitButton({ dispatch, digit}) {

    return <button onClick={ () => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit} })}>{digit}</button>
    
    
}




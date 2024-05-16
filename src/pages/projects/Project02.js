import { useReducer } from "react"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"


import "./project02-styles.css"
import { type } from "@testing-library/user-event/dist/type"


export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }

            if (payload.digit === "0" && state.currentOperand === "0") {
                return state
            }
            if (payload.digit === "." && state.currentOperand.includes(".")) {
                return state
            }

            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }

        
        // get operation from operation buttons
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previourOperand == null) {
                return state
            }


            // handle change operation to another one
            if (state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                }
            }



            // get input number from inputs
            if (state.previourOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previourOperand: state.currentOperand,
                    currentOperand: null,
                }
            }


            //handle click operation button after a compution, store prev value to next compution
            return {
                ...state,
                previourOperand: evaluate(state),
                operation : payload.operation,
                currentOperand: null,
            }

        // for AC button, clear all
        case ACTIONS.CLEAR:
            return {}

        case ACTIONS.DELETE_DIGIT:
            if (state.overwrite){
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null

                }
            }

            if (state.currentOperand == null) {
                return state
            }

            if (state.currentOperand.length === 1) {
                return {...state, currentOperand:null}
            }
            
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1)
            }



        case ACTIONS.EVALUATE:
            if (state.operation == null || state.currentOperand == null || state.previourOperand == null) {
                return state
            }

            return {
                ...state,

                //overwrite last result, when start a new computation
                overwrite: true,

                previourOperand: null,
                operation: null,
                currentOperand: evaluate(state)

            }

        
        

        
    }
}


function evaluate({currentOperand, previourOperand, operation}) {

    const prev = parseFloat(previourOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return ""

    let computation = ""
    switch (operation) {
        case "+":
            computation = prev + current
            break
        case "-":
            computation = prev - current
            break
        case "*":
            computation = prev * current
            break
        case "/":
            computation = prev / current
            break        
    }

    return computation.toString()

}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {maximumFractionDigits: 0,})

function formatOperand(operand) {

    if (operand == null) return
    const [integer, decimal] = operand.split('.')
    if (decimal == null) return INTEGER_FORMATTER.format(integer) 
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`

}

function Project02() {

    const [{ currentOperand, previourOperand, operation }, dispatch] = useReducer(reducer, {})
    
    return (
        
        <div className="calculator-grid">
            <div className="calculator-output">
                <div className="previous-operand">{formatOperand(previourOperand)} {operation}</div>
                <div className="current-operand">{formatOperand(currentOperand)}</div>
            </div>

            <button className="calculator-span-two" onClick={() => dispatch({type:ACTIONS.CLEAR}) }>AC</button>
            <button onClick={() => dispatch({type:ACTIONS.DELETE_DIGIT}) }>DEL</button>
           

            <OperationButton operation="/" dispatch={dispatch} />
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <OperationButton operation="*" dispatch={dispatch} />
            
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton operation="+" dispatch={dispatch} />
            

            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <OperationButton operation="-" dispatch={dispatch} />
            <DigitButton digit="." dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />


           
            <button className="calculator-span-two" onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>


        </div>
    
    
    
    


)
    
}

export default Project02
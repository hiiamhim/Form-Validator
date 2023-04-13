import { useReducer} from "react"

const initialState={
    value:'',
    isFormTouched:false
}

const inputReducer=(state,action)=>{
    if(action.type==='Change'){
      return {value:action.value,isFormTouched:state.isFormTouched}
    }
    if(action.type==='Reset'){
        return initialState;
    }
    if(action.type==='Blur'){
        return {
            isFormTouched:true,
            value:state.value
        }
    }
   return initialState
}

const useInput=(validateValue)=>{
   const[inptstate,dispatch]= useReducer(inputReducer,initialState)
   
  const valueIsValid=validateValue(inptstate.value)
  const hasError=!valueIsValid && inptstate.isFormTouched

  const valueChangeHandler=(event)=>{
    dispatch({type:'Change',value:event.target.value})
   
   
  }
  
  const valueBlurHandler=()=>{
    dispatch({type:"Blur"})
    }

    const reset=()=>{
    dispatch({type:'Reset'})
    }


  return {
    value:inptstate.value,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    isValid:valueIsValid,
    reset

  }


}

export default useInput
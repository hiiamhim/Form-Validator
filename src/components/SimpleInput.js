import useInput from "../hooks/use-input";
const SimpleInput = (props) => {

  const {value:enteredName,hasError:nameInpError,valueBlurHandler:nameBlurHandler,valueChangeHandler:nameChangeHandler,isValid:isNameValid,reset:resetName}=useInput(value=>value.trim()!=='')

  const {value:enteredEmail,hasError:emailInpError,valueBlurHandler:emailBlurHandler,valueChangeHandler:emailChangeHandler,isValid:isEmailValid,reset:resetEmail}=useInput(value=>value.includes('@'))

   let isFormValid=false;
   
   if(isEmailValid && isNameValid){
      isFormValid=true
   }

  
 



  const formHandler=(event)=>{
     event.preventDefault()
     if(!isFormValid){
      return 
     }
     console.log(enteredEmail)
     console.log(enteredName)
     resetName()
     resetEmail()
  }
  
  const nameclass=nameInpError?'form-control invalid':'form-control';
  const emailclass=emailInpError?'form-control invalid':'form-control';
  return (
    <form onSubmit={formHandler}>
      <div className={nameclass}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameBlurHandler}  value={enteredName} onChange={nameChangeHandler} type='text' id='name' />
      </div>
      {nameInpError && <p className="error-text">  Name Must Be A Valid Value</p>}
      <div className={emailclass}>
        <label htmlFor='Email'>Your Email</label>
        <input onBlur={emailBlurHandler} value={enteredEmail} onChange={emailChangeHandler} type='text' id='email' />
      </div>
     {emailInpError && <p className="error-text">  Email Must Be A Valid Value</p>}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

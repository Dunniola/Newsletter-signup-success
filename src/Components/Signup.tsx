import { useState, useRef} from "react";
import "./Signup.css";

function Signup() {
  const[showState, setShowState] = useState(false)
  const[errorEmail,setErrorEmail] = useState('')
  const[activeError, setActiveError] = useState(false)
  const inputRefEmail = useRef(null)


  function isValidEmail(email){
    return /\S+@\S+\.\S+/.test(email)
  }
  const switchToSignup = ()=>{
    setShowState(false)
  }

  function emailValue(){
    return inputRefEmail.current.value
  }

    const submitEmail=(e)=>{
        e.preventDefault();

        if(inputRefEmail.current.value === "" || !isValidEmail(inputRefEmail.current.value)){
            setErrorEmail("Valid email required")
            setShowState(false)
            setActiveError(true)
            
        }else{
          setShowState(true)
          setActiveError(false)
          setErrorEmail('')
        }
    }
    const thankState = () =>{
        return(
          <div>
          
     
      <div className="thank-you">
        <div className="logo">
      <img src="src/images/icon-success.svg" alt="icon-list" />
      </div>
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <span>{emailValue()}</span>. Please open it and click the button inside to confirm your subscription 
      </p>
      <button onClick={switchToSignup}>Dismiss message</button>
      </div>
      </div>
    
        )
      }
 
      
    const signupState =()=>{

        return (
        
          
            <div className='main-container'>
              <div className="updated">
              <h1>Stay updated!</h1>
              <p className="join">Join 600,000+ product managers receiving monthly updates on:</p>
             
            <div className='list-icon'>
                <div className="list-box">
              <img src="src/images/icon-success.svg" alt="icon-list" />
              <p>Product discovery and building what matters</p>
              
              </div>

              <div className="list-box">
              
              <img src="src/images/icon-success.svg" alt="icon-list" />
              
              <p>Measuring to ensure updates are a success</p> 
              </div>

              <div className="list-box">
              <img src="src/images/icon-success.svg" alt="icon-list" />
              <p>And much more!</p>
              </div>
             
            </div>
              
              <div className ='form'>
                <div className="label-box">
                    <div className ='label-state' ref={inputRefEmail}>Email Address 
                  <div className ='error-state'> {errorEmail}</div>
              </div>
              </div>
              </div>
             
                <input 
                type="email" placeholder='email@company.com' 
                ref={inputRefEmail}
                 style={{
                  borderColor: activeError ? "hsla(4, 100%, 67%, 0.4)" : "",
                  backgroundColor: activeError ? "hsla(4,100%, 67%, 0.2)" : "",
                  color: activeError ? "hsl(4, 100%, 67%)" : ""
                }}
                />  
              
              <button onClick={submitEmail}>Subscribe to monthly newsletter </button>
              
              </div>
              <div >
        <img src="src/images/illustration-sign-up-desktop.svg" alt=""></img>
        </div>
        </div>
              
            
              
              
             
        
      
              
      
        
         
         
        )
      }





  return (
    <div className='main'>
       {showState ? <div>{thankState()}</div> : <div>{signupState()}</div>}
       </div>
  )

  }

export default Signup

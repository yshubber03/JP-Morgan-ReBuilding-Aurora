import './signin.css'
import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

/* there are some console errors about useNavigate, but it's bc we don't have a router yet*/

// component for signing up as a volunteer
export default function SignUp(props){
    
    // useNavigate to navigate after successful sign up
    //const navigate = useNavigate()
  
    // state that stores values in inputs
    const [inputValue, setInputValue] = useState({name: "", email:"", password: ""})
  
    // regex test to see if email is valid
    const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue.email) || inputValue.email==""
  
    // returns an error if validEmail is false
    const validEmailMessage = validEmail ? "": <div style={{textAlign:"left", padding: "0", color: "red", fontSize:".8rem"}}>*Please enter a valid email</div>
  
    // regex test to see if name is valid
    const validName = /[^\d\s]/.test(inputValue.name) || inputValue.name==""
  
    // on submission, the function sends post request to backend, and navigates away if successful
    function handleSubmit(event){
      event.preventDefault();
      console.log(inputValue.name)
      //will uncomment once we know where to post, missing the post url and success url 
      /* axios.post("", inputValue)
        .then(response => {
          navigate("/")
          console.log(response.data)
        })
        .catch(error => console.log(error)) */
    }

    //onclick register pulls up register div and disappears sign up div
    //function to appear register div, function to disappear sign up div
    
    return(
      <div id="container">
        <div id="signin">
            <div id="toprow" className="">
                <h1 id="" className="half-width">
                    Sign in
                </h1>
                <button id="register" className="half-width" type="button">
                    Register
                </button>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="inputs">
                        <strong>Name</strong>
                        <input type="text" value={inputValue.name} onChange={(e) => setInputValue({...inputValue, name: e.target.value})}/>
                    </div>
                    
                    {/* email */}
                    <div className="inputs">
                        <strong>Email</strong>
                        <input type="text" value={inputValue.email} onChange={(e) => setInputValue({...inputValue, email: e.target.value})}/>
                        {validEmailMessage}
                    </div>

                    {/* password */}
                    <div className="inputs">
                        <strong>Password</strong>
                        <input type="text" value={inputValue.password} onChange={(e) => setInputValue({...inputValue, password: e.target.value})}/>
                    </div>

                    <input className="submitButton" type="submit"></input>
                </form>
            </div>
        </div>
      </div>
    )
}
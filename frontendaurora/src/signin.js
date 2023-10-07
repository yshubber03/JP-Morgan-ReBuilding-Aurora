import './signin.css'
import axios from 'axios'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from './contexts/AuthContext.js'

/* there are some console errors about useNavigate, but it's bc we don't have a router yet*/

// component for signing up as a volunteer
export default function SignUp(props){
    
  //signup
  const {signup} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

    // useNavigate to navigate after successful sign up
    //const navigate = useNavigate()
  
    // state that stores values in inputs
    const [inputValue, setInputValue] = useState({name: "", email:"", password: ""})
  
    // regex test to see if email is valid
    const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue.email) || inputValue.email===""
  
    // returns an error if validEmail is false
    const validEmailMessage = validEmail ? "": <div style={{textAlign:"left", padding: "0", color: "red", fontSize:".8rem"}}>*Please enter a valid email</div>
  
    // regex test to see if name is valid
    const validName = /[^\d\s]/.test(inputValue.name) || inputValue.name===""
  
    // on submission, the function sends post request to backend, and navigates away if successful
    async function handleSubmit(event){
      event.preventDefault();
      console.log(inputValue.name)

      //signup
      if (inputValue.password.value !== inputValue.confirm_password.value){
        return setError('Passwords do not match')
      }

      try{
        setError('')
        setLoading(true)
        await signup(inputValue.email.value, inputValue.password.value)
      } catch{
        setError('Failed to create an account')
      }
      setLoading(false)


      //will uncomment once we know where to post, enter post url and success url 
      /* axios.post("", inputValue)
        .then(response => {
          navigate("/")
          console.log(response.data)
        })
        .catch(error => console.log(error)) */
    }
    
    return(
      <div id="container">

        <div id="toprow" className="">
            <h1 id="" className="half-width">
                Sign in
            </h1>
            <button className="half-width" type="button">
                Register
            </button>
        </div>

        <div id = "signup">
            <form onSubmit={handleSubmit}>
            {/* name */}
            <div><strong>Name</strong></div>
            <input type="text" value={inputValue.name} onChange={(e) => setInputValue({...inputValue, name: e.target.value})}/>
            
            {/* email */}
            <div><strong>Email</strong></div>
            <input type="text" value={inputValue.email} onChange={(e) => setInputValue({...inputValue, email: e.target.value})}/>
            {validEmailMessage}

            {/* password */}
            <div><strong>Password</strong></div>
            <input type="text" value={inputValue.password} onChange={(e) => setInputValue({...inputValue, password: e.target.value})}/>

            {/*confirm password */}
            <div><strong>Confirm Password</strong></div>
            <input type="text" value={inputValue.confirm_password} onChange={(e) => setInputValue({...inputValue, confirm_password: e.target.value})}/>


            <input disabled={loading} type="submit"></input>
            </form>
        </div>
      </div>
    )
}
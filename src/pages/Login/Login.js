import {useState} from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

export default function Login (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () =>{
        if(username.length===0 || password.length===0){
            alert("Invalid credentials");
        }
        else{
            navigate("/dashboard");
        }
    };
    return(
        <div className="container">
        <h1>Get ready to do!</h1>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={username} onChange= {(e)=>setUsername(e.target.value)}/>
            <label form="password">password</label>
            <input type="text" name="password" id="password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
            <div className="registration">
                <input type="button" name="Login" id="Login" value={"LOGIN"} onClick={handleSubmit}/>
                <input type="button" name="Login" id="Register" value={"REGISTER"} onClick={handleSubmit}/>
            </div>
        </div>
    )
}
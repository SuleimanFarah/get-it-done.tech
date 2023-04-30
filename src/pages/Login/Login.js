import {useState} from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfmg2Fl4QgPPlcb-BDykgO7jOFGCCVLc4",
    authDomain: "deerhacks-todo-list-website.firebaseapp.com",
    projectId: "deerhacks-todo-list-website",
    storageBucket: "deerhacks-todo-list-website.appspot.com",
    messagingSenderId: "924205301321",
    appId: "1:924205301321:web:48e7203b2642a9d4940998",
    measurementId: "G-MG4D4JXZH0"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);

export const auth = firebase.auth();
export const database = firebase.database();

export default function Login (){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () =>{
        if(username.length===0 || password.length===0){
            alert("Invalid credentials");
        }
        else{
            auth.signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
              const userId = userCredential.user.uid;
              database.ref(`users/${userId}`).set({ username });
              navigate("/dashboard");
            })
            .catch((error) => {
              alert("Invalid credentials")
              console.error(error);
            });
        }
    };

    const handleRegister = () => {
        if (username.length === 0 || password.length === 0) {
          alert("Invalid credentials");
        } else {
          auth
            .createUserWithEmailAndPassword(username, password)
            .then((userCredential) => {
              const userId = userCredential.user.uid;
              database.ref(`users/${userId}`).set({ username });
              navigate("/dashboard");
            })
            .catch((error) => {
              alert("Registration failed");
              console.error(error);
            });
        }
    };

    return(
        <div className="container">
        <h1>USER REGISTRATION</h1>
            <label htmlFor="username">Email</label>
            <input type="text" name="username" id="username" value={username} onChange= {(e)=>setUsername(e.target.value)}/>
            <label form="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
            <div className="registration">
                <input type="button" name="Login" id="Login" value={"LOGIN"} onClick={handleSubmit}/>
                <input type="button" name="Login" id="Register" value={"REGISTER"} onClick={handleRegister}/>
            </div>
        </div>
    )
}
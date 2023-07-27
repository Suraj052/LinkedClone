import React, { useState } from 'react';
import "./Login.css";
import { auth } from './firebase';
import { login } from '../features/userSlice';
import { useDispatch } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfile] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    setIsLoading(true);
    auth.signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          }));
      })
      .catch((error) => alert(error))
      .finally(() => {
        setIsLoading(false); // Hide the loading indicator
      });
  };

  const handleRegistration = () => {
    setIsRegistering(true);
  };

  const handleLogin = () => {
    setIsRegistering(false);
  };

  const register = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name) {
      return alert("Please enter your full name");
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              }));
          });
      })
      .catch((error) => alert(error))
      .finally(() => {
        setIsLoading(false); // Hide the loading indicator
      });
  };

  return (
    <div className='login'>
      <img
        src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-2011.png'
        alt='logo'
      />
      <form>
        
          
        {isRegistering && (<input
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder='Full name' type='text'></input>)}

        {isRegistering && (<input
          value={profilePic} onChange={(e) => setProfile(e.target.value)}
          placeholder='Profile Picture' type='text'></input>)}
          
        <input
          value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder='Email' type='email'></input>
        <input
          value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder='Password' type='password'></input>

        <button type='submit' onClick={isRegistering ? register : loginToApp}>
          {isRegistering ? 'Register' : 'Sign In'}
        </button>

        {isLoading && 
          <div className="loading-container">
            <CircularProgress />
          </div>}

      </form>

      <p>
        {isRegistering
          ? 'Already have an account?'
          : 'Not a member?'
        }
        <span
          className="login_register"
          onClick={isRegistering ? handleLogin : handleRegistration}>
          {isRegistering ? 'Login' : 'Register Now'}
        </span>
      </p>
    </div>
  )
}

export default Login;

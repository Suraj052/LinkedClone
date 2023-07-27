import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { useDispatch } from "react-redux";
import { auth } from './components/firebase';
import { login } from './/features/userSlice';
import Widgets from './components/Widgets';
import { useMediaQuery } from '@mui/material'; 
import User from './components/User';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isView1 = useMediaQuery('(max-width: 800px)');
  const isView2 = useMediaQuery('(max-width: 600px)');
  
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
          })
        );
      } else {
        dispatch(logout());
      }
      setIsLoading(false); // Set loading to false once authentication state is determined
    });

    // Unsubscribe from the auth state listener when the component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  // Show loading indicator while checking the authentication state
  if (isLoading) {
    return (
      <div className="loading-container">
            <CircularProgress />
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header */}
      {user && !isView1 && <Header/>}
      {user && isView1 && <User/>}
      {!user ?(
        <Login/>
      )  
        :(
          <div className='app_body'>
            {!isView2 && <Sidebar/>}
            <Feed/>
            {!isView1 && <Widgets/>}
          </div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "./topbar.css";
import { GrLanguage } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";


import Button from '@material-ui/core/Button';


export default function Topbar() {

  

  const provider = new firebase.auth.GoogleAuthProvider();

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email)
        console.log("estas logueado")
      } else {
        console.log("no logueado")
        setUser(null, setUser)
      }
    })
  }, [])

  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log("estoy logeado con google")
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error en login errorCode:${errorCode}, msg:${errorMessage}`)
      });
  }

  const signOut = () => {
    firebase.auth().signOut();
  }

  return (
    <div className="Topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DIVERGENTES</span>
        </div>
        {user ? (
              <>
                {user}
                <Button onClick={signOut} color="inherit">Logout</Button>
              </>
            ) :
              (
                <Button onClick={signInWithGoogle} color="inherit">Login</Button>

              )}
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline />
            <span className="topIconbadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <GrLanguage />
            <span className="topIconbadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <AiFillSetting />
            <span className="topIconbadge">3</span>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

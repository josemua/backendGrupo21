import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyDYCZqAgZloUvQkGChHgqRlLcsuMVmd2XU",
  authDomain: "ciclo3divergentes.firebaseapp.com",
  projectId: "ciclo3divergentes",
  storageBucket: "ciclo3divergentes.appspot.com",
  messagingSenderId: "789521266228",
  appId: "1:789521266228:web:c09742e5e2dfc5c511bc61",
  measurementId: "G-CFPFY2SGX5"
}

if(!firebase.apps[0]){
  firebase.initializeApp(firebaseConfig);
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

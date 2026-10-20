import { initializeApp } from 
'https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js';

import { getAuth } from 
'https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyDw33DJTssHsqXNMji36kOVwoFwbwyrtT8",
    authDomain: "maintenance-system-49404.firebaseapp.com",
    projectId: "maintenance-system-49404",
    storageBucket: "maintenance-system-49404.firebasestorage.app",
    messagingSenderId: "816006616482",
    appId: "1:816006616482:web:c2228dc469bd1bc4e68efb",
    measurementId: "G-WND1N7L7R1"
  };

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

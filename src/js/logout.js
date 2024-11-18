import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAphlWDH_8qub3s5jj_HN6_jpJ5Ken7zsE",
  authDomain: "digirec-auth.firebaseapp.com",
  databaseURL: "https://digirec-auth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "digirec-auth",
  storageBucket: "digirec-auth.firebasestorage.app",
  messagingSenderId: "1007487925219",
  appId: "1:1007487925219:web:e5e07d82f6ff85e2333ed6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.logout = function() {
  signOut(auth)
    .then(() => {
      console.log('User signed out');
      // Redirect to login page
      window.location.href = 'index.html'; // Assuming your login page is named index.html
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
};
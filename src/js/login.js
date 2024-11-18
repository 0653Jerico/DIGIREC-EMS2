import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAphlWDH_8qub3s5jj_HN6_jpJ5Ken7zsE",
  authDomain: "digirec-auth.firebaseapp.com",
  databaseURL:
    "https://digirec-auth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "digirec-auth",
  storageBucket: "digirec-auth.firebasestorage.app",
  messagingSenderId: "1007487925219",
  appId: "1:1007487925219:web:e5e07d82f6ff85e2333ed6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessageDiv = document.getElementById("error-message");

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("User signed in:", user);

    // Fetch user role from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const userRole = userData.role;

      // Redirect based on user role
      if (userRole === "admin") {
        window.location.href = "adminDashboard.html";
      } else if (userRole === "doctor") {
        window.location.href = "doctorDashboard.html";
      } else if (userRole === "secretary") {
        window.location.href = "secretaryDashboard.html";
      } else {
        errorMessageDiv.textContent =
          "Role not recognized. Please contact support.";
      }
    } else {
      errorMessageDiv.textContent =
        "User data not found. Please contact support.";
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
    errorMessageDiv.textContent = "Invalid credentials. Please try again.";
  }
};
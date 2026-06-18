import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { auth, db } from "./firebaseconfig.js";

window.login = async function (){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

 if (!email || !password) {
    return alert("Please enter your email and password.");
}

try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await addDoc(collection(db, "userlogin"), {
        email: user.email,
        lastLogin: serverTimestamp(),
    });
window.location.href = "gi.html";
}

catch (err) {
    return alert("Login failed: " + err.message);
}
}


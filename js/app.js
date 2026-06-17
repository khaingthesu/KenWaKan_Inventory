import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

    window.login = async function(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

try{
await signInWithEmailAndPassword(auth, email, password);   
window.location.href = "gi.html"; 
}
catch (error){
alert("Login Failed: " + error.message);

}
}
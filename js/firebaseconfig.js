import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfPMOcF9GH5Fbv_tkgBNfHx7fMxDGQ6Uw",
  authDomain: "ken-wa-kan.firebaseapp.com",
  projectId: "ken-wa-kan",
  storageBucket: "ken-wa-kan.firebasestorage.app",
  messagingSenderId: "186768120045",
  appId: "1:186768120045:web:9cba9de43b9027fa8054e4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };

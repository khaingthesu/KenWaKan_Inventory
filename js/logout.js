import { signOut }
from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import { auth }
from "./firebaseconfig.js";

document
    .getElementById("logoutBtn")
    .addEventListener("click", async () => {

        try {

            await signOut(auth);

            window.location.href = "index.html";

        }
        catch(error){

            alert(error.message);

        }

    });

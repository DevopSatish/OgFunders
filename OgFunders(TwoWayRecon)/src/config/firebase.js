import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyBnIiyBovnGFAUQYhSN5b2f5bc4UVlIqYw",
  authDomain: "aadhar-e365d.firebaseapp.com",
  projectId: "aadhar-e365d",
  storageBucket: "aadhar-e365d.appspot.com",
  messagingSenderId: "1084516995094",
  appId: "1:1084516995094:web:57a1e922be199403cb6537",
  measurementId: "G-3VQM3K31TE"
};

// Initialize Firebase
export function setupFirebase() {
    if (getApps().length === 0) initializeApp(firebaseConfig);
}

export async function logoutUser() {
    const auth = getAuth();
    if (auth.currentUser) await auth.signOut();
    localStorage.clear();
}

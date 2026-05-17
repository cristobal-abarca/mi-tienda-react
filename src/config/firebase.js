import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbv-43iT-FWudrJrpb6mSroyEgZmQk-U4",
  authDomain: "mi-tienda-react-29278.firebaseapp.com",
  projectId: "mi-tienda-react-29278",
  storageBucket: "mi-tienda-react-29278.firebasestorage.app",
  messagingSenderId: "594964217898",
  appId: "1:594964217898:web:ac709ab861b5c9c0df4353",
  measurementId: "G-Q4T9PKZE7F"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
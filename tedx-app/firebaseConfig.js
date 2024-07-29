import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBgi7aDYdvEBNODpP_tDnrobAM1Yd9-ITE",
  authDomain: "prueba-tedex-login.firebaseapp.com",
  projectId: "prueba-tedex-login",
  storageBucket: "prueba-tedex-login.appspot.com",
  messagingSenderId: "874443124916",
  appId: "1:874443124916:web:f6e9b669c183719522e7e1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { products } from "../data/asyncMock";
const firebaseConfig = {
    apiKey: "AIzaSyCOzoEzg5IWtmeI_Z8JxHPU-DSjk1p72Ck",
    authDomain: "tiendareact-cfb69.firebaseapp.com",
    projectId: "tiendareact-cfb69",
    storageBucket: "tiendareact-cfb69.appspot.com",
    messagingSenderId: "574525621831",
    appId: "1:574525621831:web:f4def3a73d659357ae1362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// products.forEach((prod) => {
//     addDoc(collection(db, 'productos'), prod)
//         .then(data => console.log(`El producto ${data.id} se subió correctamente`))
//         .catch(error => console.log(error))
// })
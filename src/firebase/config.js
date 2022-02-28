import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// Importamos una función getAuth para obtener un objeto de autenticación
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD4qP3rvv0QyV4xPSU37h5W4NMByScgSqs',
	authDomain: 'reading-list-4ffc5.firebaseapp.com',
	projectId: 'reading-list-4ffc5',
	storageBucket: 'reading-list-4ffc5.appspot.com',
	messagingSenderId: '254490772120',
	appId: '1:254490772120:web:0a9b311f4d23f767ebc6ed',
};

initializeApp(firebaseConfig);

const db = getFirestore();
// Obtenemos el objeto de autenticación e inicializamos la autenticación
const auth = getAuth();

export { db, auth }	
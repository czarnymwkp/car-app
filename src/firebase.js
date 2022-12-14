import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_API_DATABASE_URL,
	projectId: 'car-app-3a814',
	storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }

import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
	apiKey: 'AIzaSyCiAgMluZkgDGWCvYA9Q3j0d_LPc52B-6Y',
	authDomain: 'car-app-3a814.firebaseapp.com',
	projectId: 'car-app-3a814',
	storageBucket: 'car-app-3a814.appspot.com',
	messagingSenderId: '139373516974',
	appId: '1:139373516974:web:d0d21022f85d08849c753f',
})
export const auth = app.auth()
export default app

import { collection,  getDocs } from 'firebase/firestore'
import { useState, useEffect, createContext } from 'react'
import { db } from '../../firebase'

interface DetailsInterface {
	myCar: {}
	myCars: {}
}
const DetailsContext = createContext<DetailsInterface>({ myCar: [], myCars: [] })
const myCarRef = collection(db, 'cars')

//function carReducer(state, action) {}

export const DetailsProvider = ({ children }: { children: JSX.Element }) => {
	const [myCar, setMyCar] = useState([{}])

	useEffect(() => {
		const getCar = async () => {
			try {
				const data = await getDocs(myCarRef)
				setMyCar(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
			} catch (e) {
				console.log(e)
			}
		}
		getCar()
	}, [])

	return <DetailsContext.Provider value={{ myCar, myCars: myCar }}>{children}</DetailsContext.Provider>
}

export default DetailsContext

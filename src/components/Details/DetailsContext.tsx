import { collection, doc, getDocs } from 'firebase/firestore'
import { useState, useEffect, createContext, useReducer } from 'react'
import { db } from '../../firebase'

interface DetailsInterface {
	myCar: {}
	myCars: {}
}
const DetailsContext = createContext<DetailsInterface>({ myCar: [], myCars: [] })
const myCarReff = collection(db, 'cars')
const initialState = {}

//function carReducer(state, action) {}

export const DetailsProvider = ({ children }: { children: JSX.Element }) => {
	const [myCar, setMyCar] = useState([{}])
	//const [state, dispatch] = useReducer(carReducer, initialState)
	const myCars = myCar
	useEffect(() => {
		const getCar = async () => {
			try {
				const data = await getDocs(myCarReff)
				setMyCar(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
			} catch (e) {
				console.log(e)
			}
		}
		getCar()
	}, [])

	return <DetailsContext.Provider value={{ myCar, myCars }}>{children}</DetailsContext.Provider>
}

export default DetailsContext

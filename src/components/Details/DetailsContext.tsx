import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect, createContext } from 'react'
import { db } from '../../firebase'

interface DetailsInterface {
	myCar: {}
	myCars: {}
}
const DetailsContext = createContext<DetailsInterface>({ myCar: [], myCars: [] })
const myCarReff = collection(db, 'cars')

export const DetailsProvider = ({ children }: { children: JSX.Element }) => {
	const [myCar, setMyCar] = useState([{}])
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

	return <DetailsContext.Provider value={{ myCar, myCars: myCar }}>{children}</DetailsContext.Provider>
}

export default DetailsContext

import { useState, useEffect } from 'react'
import { getAllSneakers } from "../api/sneaker"

const Home = (props) => {
	const { msgAlert, user } = props
	// console.log('props in home', props)

	const [sneakers, setSneakers] = useState(null)

	useEffect(() => {
		getAllSneakers()
			.then(res => console.log('sneakers: \n', res.data.sneakers))
			.catch(error => console.error)
	}, [])

	return (
		<>
			<h2>Home Page</h2>
		</>
	)
}

export default Home

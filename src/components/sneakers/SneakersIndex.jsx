import { useState, useEffect } from 'react'
import { getAllSneakers } from "../../api/sneaker"

import LoadingScreen from '../shared/LoadingScreen'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const SneakersIndex = (props) => {
    const [sneakers, setSneakers] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

        useEffect(() => {
            getAllSneakers()
                .then(res => {
                    console.log('use Effect hook ran')
                    setSneakers(res.data.sneakers)
                })
                .catch(error => {
                    msgAlert({
                        heading: 'Oh no!',
                        message: 'bummer.',
                        variant: 'danger'
                    })
                    setError(true)
                })
        }, [])

        // console.log('the sneakers in SneakersIndex: \n', sneakers)

    if (error) {
        return <LoadingScreen />
    }

    if (!sneakers) {
        return <LoadingScreen />
    } else if (sneakers.length === 0) {
        return <p>No sneakers yet.</p>
    }

    const sneakerCards = sneakers.map(sneaker => (
        <Card key={sneaker.id} style={{ width: '30%', margin: 5 }}>
            <Card.Header>{sneaker.name}</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/sneakers/${sneaker._id}`} className='btn btn-info'>
                        SEE DETAILS
                    </Link>
                </Card.Text>
                { sneaker.owner ?
                    <Card.Footer>owner: {sneaker.owner.email}</Card.Footer>
                    :
                    null
                }
            </Card.Body>
        </Card>
    ))

    return (
        <div className="container-md" style={ cardContainerLayout }>
            { sneakerCards }
        </div>
    )
}

export default SneakersIndex
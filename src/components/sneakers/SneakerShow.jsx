import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneSneaker } from '../../api/sneaker'
import LoadingScreen from '../shared/LoadingScreen'
import { Container, Card } from 'react-bootstrap'

const SneakerShow = (props) => {
    const { sneakerId } = useParams()
    const { user, msgAlert } = props

    const [sneaker, setSneaker] = useState(null)

    useEffect(() => {
        getOneSneaker(sneakerId)
            .then(res => setSneaker(res.data.sneaker))
            .catch(err => {
                msgAlert({
                    heading: 'Oh no!',
                    message: 'something went wrong.',
                    variant: 'danger'
                })
            })
    }, [])

    if (!sneaker) {
        return <LoadingScreen />
    }

    return (
        <>
            <Container className='m-2'>
                <Card>
                    <Card.Header>
                        { sneaker.name }
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>brand: { sneaker.brand }</small><br />
                            <small>colorway: { sneaker.colorway }</small><br />
                            <small>release year: { sneaker.releaseYear }</small><br />
                            <small>condition: { sneaker.condition }</small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {
                            sneaker.owner ? `owner: ${sneaker.owner.email}` : null
                        }
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

export default SneakerShow
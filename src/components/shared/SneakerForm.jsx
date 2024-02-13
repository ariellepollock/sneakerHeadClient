import { Form, Button, Container } from 'react-bootstrap'

const SneakerForm = (props) => {
    const { sneaker, handleChange, handleSubmit, heading } = props

    return (
        <Container className='justify-content-center'>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        placeholder='Which sneakers do you have?'
                        id='name'
                        name='name'
                        value={ sneaker.name }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Brand: </Form.Label>
                    <Form.Control
                        placeholder='What brand are your sneakers?'
                        id='brand'
                        name='brand'
                        value={ sneaker.brand }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Colorway: </Form.Label>
                    <Form.Control
                        placeholder='What is the colorway?'
                        id='colorway'
                        name='colorway'
                        value={ sneaker.colorway }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='m-2'>
                    <Form.Label>Realease Year: </Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='What year were your sneakers released?'
                        id='releaseYear'
                        name='releaseYear'
                        value={ sneaker.releaseYear }
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className='m-2' type='submit'>Submit</Button>
            </Form>
        </Container>
    )

}

export default SneakerForm
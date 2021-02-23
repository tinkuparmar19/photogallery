import React from 'react'
import { Card, Container } from 'react-bootstrap'

function Photos(props) {

    const { item, handleShow } = props

    return (
        <div style={{ cursor: "pointer", }}>
            <Container>
                <Card className='card mt-4' onClick={handleShow}>
                    <Card.Body>
                        <Card.Img src={item.urls.thumb} id='card-image' />
                    </Card.Body>
                    <Card.Footer>
                        <p>{item.user.name}</p>
                        <p>{item.likes} likes</p>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    )
}

export default Photos

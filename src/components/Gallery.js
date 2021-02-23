import React, { useState } from 'react'
import { Col, Container, Image, Modal, Row, Button } from 'react-bootstrap';
import Photos from './Photos'

function Gallery(props) {
    const { item } = props

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Photos item={item} handleShow={handleShow} />

            <Modal show={show} onHide={handleClose} size='lg' centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={8} xs={12}>
                                <Image src={item.urls.small} id='modal-image' />
                            </Col>
                            <Col md={4} xs={12} className='mt-3' >
                                <h4>{item.user.name}</h4>
                                <p>{item.alt_description}</p>
                                <Button href={item.links.html} target='_blank'>More Details</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Gallery

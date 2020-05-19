import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// styling
import './styling.css';

export default function Home() {
    return (
        <Container>
            <Row>
                <Card>
                    <Card.Img
                        src='https://res.cloudinary.com/dcmfiobqe/image/upload/v1576597459/CCBB_Landingpage/WildCodeSchool/acrobats-412011_1920_jrsyfj.jpg'
                        alt='Card image'
                    />
                    <Card.ImgOverlay></Card.ImgOverlay>
                </Card>
            </Row>
            <Row>
                <Link to='/performances'>
                    <h5>Check out our performances!</h5>
                </Link>
            </Row>
        </Container>
    );
}

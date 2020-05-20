import React from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Performances() {
    return (
        <Container>
            <CardGroup>
                <Card>
                    <Card.Img
                        src='https://res.cloudinary.com/dcmfiobqe/image/upload/v1576597454/CCBB_Landingpage/WildCodeSchool/clown-678042_640_vjbofj.jpg'
                        alt='clown'
                    />
                    <Card.Body>
                        <Card.Title>Laugh</Card.Title>
                        <Card.Text>
                            As an adult, come and discover our irresistible
                            clowns, between practical jokes and pranks let
                            yourself be carried away by their joy and fall back
                            into childhood.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img
                        src='https://res.cloudinary.com/dcmfiobqe/image/upload/v1576741860/CCBB_Landingpage/WildCodeSchool/the-magician_va8obt.jpg'
                        alt='Magician and his assistant'
                    />
                    <Card.Body>
                        <Card.Title>Dream</Card.Title>
                        <Card.Text>
                            Let yourself be carried away in a world where the
                            real and the imaginary are one, in the company of
                            our talented magicians, discover a wonderful world
                            limited only by your imagination.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img
                        src='https://res.cloudinary.com/dcmfiobqe/image/upload/v1576597454/CCBB_Landingpage/WildCodeSchool/circus-828680_640_lnazza.jpg'
                        alt='circus arena with elephants'
                    />
                    <Card.Body>
                        <Card.Title>Marvel at</Card.Title>
                        <Card.Text>
                            Tame the untameable in the company of our tamers,
                            between roar and razor-sharp claws, watch these
                            fierce felines turn into sweet kittens.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <Link to='/about'>
                Click here if you want to learn more about the Wild Circus.
            </Link>
        </Container>
    );
}

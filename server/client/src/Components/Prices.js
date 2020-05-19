import React from 'react';
import { Container, Table } from 'react-bootstrap';

export default function Prices() {
    return (
        <Container>
            <h1 id='prices'>Prices</h1>
            <Table responsive>
                <thead>
                    <tr className='table-primary'>
                        <th></th>
                        <th>Adults</th>
                        <th>Children under 12</th>
                        <th>
                            Groups <br /> (more than 10)
                        </th>
                        <th>Schools</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id='row2'>
                        <td>Weekdays (without wednesday)</td>
                        <td>10€</td>
                        <td>5€</td>
                        <td>50€</td>
                        <td>1000€</td>
                    </tr>
                    <tr id='row3'>
                        <td>Weekend and wednesday</td>
                        <td>15€</td>
                        <td>10€</td>
                        <td>100€</td>
                        <td>1500€</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './ItemDetail.module.css';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({item}) => {

   return (
    <Container>
      <Row>
        <Col xs={6}>
            <Image src={item.image} thumbnail />
        </Col>
        <Col>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className={styles.mt50}>
                <span>Precio: ${item.price}</span><br />
                <span>Stock: {item.stock}</span>
            </div>
            <div className={styles.mt50}>
                <ItemCount/>
            </div>
        </Col>
      </Row>
    </Container>
   );
}

import React from 'react'
import { Item } from '../Item/Item'
import { Container, Row, Col } from 'react-bootstrap'

export const ItemList = ({products}) => {
  return (
    <Container>
        <Row>
            {products.map((product) => (
                <Col key={product.id} md={3} className="mb-3">
                    <Item key={product.id} item={product} />
                </Col>
            ))}
        </Row>
    </Container>
  )
}

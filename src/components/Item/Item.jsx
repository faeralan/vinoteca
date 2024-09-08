import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './Item.module.css'

export const Item = ({item}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className={styles.textContainer}>
          {item.description}
        </Card.Text>
        <Button as={Link} to={`/product/${item.id}`}>Ver Detalles</Button>
      </Card.Body>
    </Card>
  )
}

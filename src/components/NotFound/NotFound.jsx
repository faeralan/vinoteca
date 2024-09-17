import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <p className='text-center'>Esa página no existe, por favor hacé click <Link to="/">acá</Link> para volver a la página principal.</p>
                </Col>
            </Row>
        </Container>
    );
}

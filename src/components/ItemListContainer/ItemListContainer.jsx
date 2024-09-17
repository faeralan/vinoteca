import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiService } from '../../services/apiService'
import { ItemList } from '../ItemList/ItemList'
import { Container } from 'react-bootstrap'

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const fetchProducts = async () => {
    try {
      const data = await apiService.getProduct(id);
      setProducts(data);
    } catch (err) {
      setError('Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

    return (
        <Container>
          {!id ? ( <h3 className='text-center'>Home</h3> ) : null}
          {loading ? ( <p className='text-center'>Cargando...</p> ) : null}
          {error ? ( <p className='text-center'>{error}</p> ) : null}
          <ItemList products={products} />
        </Container>
    );
}
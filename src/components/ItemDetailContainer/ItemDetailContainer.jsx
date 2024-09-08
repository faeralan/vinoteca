import React from 'react';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from '../../services/apiService'; 
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Container } from 'react-bootstrap';

export function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    const fetchProduct = async () => {
      try {
        const data = await apiService.getProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchProduct();
    }, [id]);

    return (
        <Container>
            {loading ? ( <p className='text-center'>Cargando...</p> ) : <ItemDetail item={product} />}
        </Container>
    );
}
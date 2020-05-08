import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { format } from 'date-fns'
import { useProducts } from '../../../../context/ProductsContext';
import api from '../../../../services/api';
import history from '../../../../services/history'
import { toast } from 'react-toastify'

export default function Table() {
  const [dados, setDados] = useState([]);
  const { data } = useProducts();

  useEffect(() => {
    setDados(data.searchProducts);
  }, [data]);

  const deleteProducts = async (id) => {
    const productId = id;
    try {
      const { data } = await api.delete(`/product/${productId}`);

      if (data) {
        toast.success(data.message);
        history.push('/');
      }
    } catch (e) {
      toast.error(e.response.data.message);
      history.push('/');
    }
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {dados?.map((products) => (
            <tr key={products._id}>
              <td className="title">{products.name}</td>
              <td className="income">{products.quantity}</td>
              <td>R${products.price}</td>
              <td>{format(new Date(products.date), 'dd/MM/yyyy')}</td>
              <td>
                <button className="btn-edit">
                  <Link to={`/products/edit/${products._id}`}>EDITAR</Link>
                </button>
              </td>
              <td>
                <button className="btn-delete" onClick={() => {deleteProducts(products._id)}}>
                  EXCLUIR
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

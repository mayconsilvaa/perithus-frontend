import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Content, Buttons } from './styles';
import api from '../../services/api';
import history from '../../services/history';

export default function Editar(props) {
  const [dados, setDados] = useState([]);

  const { productId } = props.match.params;

  const handleChanged = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  async function loadProduct() {
    const { data } = await api.get(`/product/${productId}`);
    setDados(data);
  }

  useEffect(() => {
    loadProduct();
  }, [productId]);

  const handldeSubmit = async (e) => {
    const { name, quantity, date, price } = dados;

    try {
      const { data } = await api.put(`/product/${productId}`, {
        name,
        quantity,
        date,
        price,
      });

      console.log('dddd', data);

      if (data) {
        toast.success(data.message);
        history.push('/dashboard');
      }
    } catch (e) {
      toast.error(e.response.data.message);
      history.push('/dashboard');
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handldeSubmit}>
          <span className="title">
            Preencha os campos abaixo para cadastrar o produto:
          </span>
          <input
            type="text"
            name="name"
            value={dados.name}
            placeholder="Informe o nome do produto..."
            onChange={handleChanged}
            required
          />
          <input
            type="text"
            name="quantity"
            value={dados.quantity}
            placeholder="Informe a quantidade de produtos..."
            onChange={handleChanged}
            required
          />
          <input
            type="date"
            name="date"
            // value={format(new Date(dados.date), 'dd/MM/yyyy')}
            required
            onChange={handleChanged}
          />
          <input
            type="text"
            name="price"
            value={dados.price}
            placeholder="Informe o total R$..."
            onChange={handleChanged}
            required
          />
          <Buttons>
            <button className="btn-add" type="submit">
              ATUALIZAR
            </button>
            <button className="btn-previous">
              <Link to="/">VOLTAR</Link>
            </button>
          </Buttons>
        </form>
      </Content>
    </Container>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Content, Buttons } from './styles';
import api from '../../services/api';
import history from '../../services/history';

export default function Cadastro() {
  const [dados, setDados] = useState([]);

  const handleChanged = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handldeSubmit = async (e) => {
    e.preventDefault();

    const { name, quantity, date, price } = dados;

    try {
      const { data } = await api.post('/product', {
        name,
        quantity,
        date,
        price,
      });

      if (data) {
        toast.success(data.message);
        history.push('/');
      }
    } catch (e) {
      toast.success(e.response.data.message);
      history.push('/tributes/register');
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handldeSubmit}>
          <span className="title">
            Preencha os campos abaixo para cadastrar o{' '}
            <span style={{ color: '#2264b7' }}>produto</span>:
          </span>
          <input
            type="text"
            name="name"
            placeholder="Informe o nome do produto..."
            onChange={handleChanged}
            required
          />
          <input
            type="text"
            name="quantity"
            placeholder="Informe a quantidade de produtos..."
            onChange={handleChanged}
            required
          />
          <input type="date" name="date" required onChange={handleChanged} />
          <input
            type="text"
            name="price"
            placeholder="Informe o total R$..."
            onChange={handleChanged}
            required
          />
          <Buttons>
            <button className="btn-add" type="submit">
              ADICIONAR
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

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
    e.target.reset();

    const { year, month } = dados;

    try {
      const { data } = await api.post('/tribute', {
        year_reference: year,
        month,
      });

      if (data) {
        toast.success(data.message);
        history.push('/');
      }
    } catch (e) {
      toast.error(e.response.data.message);
      history.push('/tributes/register');
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handldeSubmit}>
          <span className="title">
            Preencha os campos abaixo para calcular o{' '}
            <span style={{ color: '#2264b7' }}>imposto</span>:
          </span>
          <input
            type="text"
            name="year"
            placeholder="Informe o ano referência..."
            onChange={handleChanged}
            required
          />
          <input
            type="text"
            name="month"
            placeholder="Informe o mês..."
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

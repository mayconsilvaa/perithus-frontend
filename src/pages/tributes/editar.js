import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Content, Buttons } from './styles';
import api from '../../services/api';
import history from '../../services/history';

export default function Editar(props) {
  const [dados, setDados] = useState([]);

  const { tributeId } = props.match.params;

  const handleChanged = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  async function loadProduct() {
    const { data } = await api.get(`/tribute/${tributeId}`);
    setDados(data);
  }

  useEffect(() => {
    loadProduct();
  }, [tributeId]);

  const handldeSubmit = async (e) => {
    const { name, quantity, date, price } = dados;

    try {
      const { data } = await api.get(`/tribute/${tributeId}`, {
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
      toast.error(e.response.data.message);
      history.push('/');
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
            // type="date"
            name="date"
            value={{}}
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

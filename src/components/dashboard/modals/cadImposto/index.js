import React, { useState } from 'react';

import { Container, Content } from './styles';
import api from '../../../../services/api';

export default function CadImposto() {
  const [dados, setDados] = useState([]);

  const handleChanged = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handldeSubmit = async (e) => {
    const { name, quantity, date, price } = dados;

    const response = await api.post('/product', {
      name,
      quantity,
      date,
      price,
    });
  };

  console.log('dddd', dados);

  return (
    <Container>
      <Content>
        <div className="cabecalho-modal">
          <div className="close">
            <span onClick={() => {}}>X</span>
          </div>
        </div>
        <div className="content-body">
          <form>
            <span className="title">
              Preencha os campos abaixo para cadastrar o produto:
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
            <button type="submit">ADICIONAR</button>
          </form>
        </div>
      </Content>
    </Container>
  );
}

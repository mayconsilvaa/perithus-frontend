import React, { useState } from 'react';

import { Container, Content } from './styles';

export default function CadImposto() {
  const [close, setClose] = useState(false);

  const closeModal = () => {
    setClose(!close);
  };

  return (
    <Container>
      <Content>
        <div className="cabecalho-modal">
          <div className="close">
            <span onClick={closeModal}>X</span>
          </div>
        </div>
        <div className="content-body">
          <form>
            <span className="title">
              Preencha os campos abaixo para cadastrar o imposto:
            </span>
            <input
              type="text"
              name="name"
              placeholder="Informe o nome do produto..."
              required
            />
            <input
              type="text"
              name="quantidade"
              placeholder="Informe a quantidade de produtos..."
              required
            />
            <input type="text" name="date" required />
            <input
              type="text"
              name="price"
              placeholder="Informe o total R$..."
              required
            />
            <button type="submit">ADICIONAR</button>
          </form>
        </div>
      </Content>
    </Container>
  );
}

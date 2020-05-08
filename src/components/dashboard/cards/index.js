import React from 'react';

import { Container, Content } from './styles';

export default function Cards({ style, title, description, value }) {
  return (
    <Container style={style}>
      <Content>
        <h1>{title}</h1>
        <span className="description">{description}</span>
        <p className="value">R$ 400,00</p>
      </Content>
    </Container>
  );
}

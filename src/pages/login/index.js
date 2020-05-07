import React, { useState, useContext } from 'react';
import { Container, Content } from './styles';

import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const [dados, setDados] = useState([]);

  const { signIn } = useContext(AuthContext);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    const { email, password } = dados;

    signIn({
      email,
      password,
    });
  };

  return (
    <Container>
      <Content>
        <div className="content-body">
          <form onSubmit={handleSubmit}>
            <h1>Área de Login</h1>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="Informe o seu e-mail..."
              onChange={handleChange}
              required
            />
            <span>Senha</span>
            <input
              type="password"
              name="password"
              placeholder="Informe a sua senha..."
              onChange={handleChange}
              required
            />
            <button type="submit">ACESSAR</button>
          </form>
        </div>
      </Content>
    </Container>
  );
}

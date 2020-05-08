import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [dados, setDados] = useState([]);

  const { signIn } = useAuth();

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
            <br />
            <hr />
            <Link to="/register">Clique aqui e faça o seu cadastro!</Link>
          </form>
        </div>
      </Content>
    </Container>
  );
}

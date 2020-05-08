import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Content } from './styles';
import api from '../../services/api';
import history from '../../services/history';

/** Import Images */

import Welcome from '../../assets/img/bem-vindo.png';

export default function Register() {
  const [dados, setDados] = useState([]);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    try {
      const { name, email, password } = dados;

      if (password.length < 8) {
        toast.error('Informe uma senha com 8 caracteres');
      } else {
        const response = await api.post('/users', {
          name,
          email,
          password,
        });

        if (response) {
          toast.success('Cadastro realizado com sucesso!');
          history.push('/');
        }
      }
    } catch (e) {
      toast.error(e.response.data.message);
      history.push('/register');
    }
  };

  return (
    <Container>
      <Content>
        <div className="content-right">
          <img src={Welcome} alt="bem-vindo" />
        </div>
        <div className="content-left">
          <form onSubmit={handleSubmit}>
            <span>
              Olá! Para acessar a plataforma, faça o seu cadastro abaixo.
            </span>
            <input
              type="text"
              name="name"
              placeholder="Informe o seu nome..."
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Informe o seu e-mail..."
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Informe uma senha..."
              onChange={handleChange}
              required
            />
            <button type="submit">Finalizar Cadastro</button>
          </form>
        </div>
      </Content>
    </Container>
  );
}

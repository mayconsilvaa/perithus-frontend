import React, { useState } from 'react';
import { Container, Content } from './styles';
import api from '../../../services/api';

export default function Search() {
  const [dados, setDados] = useState([]);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  console.log(dados);

  const handleFilter = async (e) => {
    e.preventDefault();

    const { year, month } = dados;

    // console.log('dadosAQ', year, month);

    const response = await api.get('/tributes', {
      year_reference: year,
      month,
    });

    console.log('result', response);
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleFilter}>
          <span>Tipo</span>
          <select
            className="select-options"
            name="tipo"
            onChange={handleChange}
          >
            <option>Selecione...</option>
            <option value="Produto">Produto</option>
            <option value="Imposto">Imposto</option>
          </select>
          <span>Ano</span>
          <input
            type="text"
            name="year"
            placeholder="Informe o ano (ex: 2020)"
            onChange={handleChange}
          />
          <span>Mês</span>
          <select
            className="select-options"
            name="month"
            onChange={handleChange}
          >
            <option>Selecione...</option>
            <option value="01">Janeiro</option>
            <option value="02">Fevereiro</option>
            <option value="03">Março</option>
            <option value="04">Abril</option>
            <option value="05">Maio</option>
            <option value="06">Junho</option>
            <option value="07">Julho</option>
            <option value="08">Agosto</option>
            <option value="09">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </select>
          <button type="submit">Filtrar</button>
        </form>
      </Content>
    </Container>
  );
}

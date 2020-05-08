import React, { useState } from 'react';
import { Container, Content } from './styles';
import { useTributes } from '../../../context/TributesContext';
import { useProducts } from '../../../context/ProductsContext';

export default function Search() {
  const [dados, setDados] = useState([]);
  const { allAtributes } = useTributes();
  const { allProducts } = useProducts();

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    e.target.reset();

    const { year, month, type } = dados;

    if (type === 'Imposto') {
      allAtributes({
        year,
        month,
        type,
      });
    } else {
      allProducts({
        year,
        month,
        type,
      });
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleFilter}>
          <span>Tipo</span>
          <select
            className="select-options"
            name="type"
            onChange={handleChange}
            required
          >
            <option value="">Selecione...</option>
            <option value="Produto">Produto</option>
            <option value="Imposto">Imposto</option>
          </select>
          <span>Ano</span>
          <input
            type="text"
            name="year"
            placeholder="Informe o ano (ex: 2020)"
            onChange={handleChange}
            required
          />
          <span>Mês</span>
          <select
            className="select-options"
            name="month"
            onChange={handleChange}
            required
          >
            <option value="">Selecione...</option>
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

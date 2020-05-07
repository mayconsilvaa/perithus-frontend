import React from 'react';
import { Container } from './styles';
import api from '../../../services/api';

export default function Table() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title">Computer</td>
            <td className="income">R$ 5.000,00</td>
            <td>Sell</td>
            <td>20/04/2020</td>
          </tr>
          <tr>
            <td className="title">Website Hosting</td>
            <td className="outcome">- R$ 1.000,00</td>
            <td>Hosting</td>
            <td>19/04/2020</td>
          </tr>
          <tr>
            <td className="title">Website Hosting</td>
            <td className="outcome">- R$ 1.000,00</td>
            <td>Hosting</td>
            <td>19/04/2020</td>
          </tr>
          <tr>
            <td className="title">Website Hosting</td>
            <td className="outcome">- R$ 1.000,00</td>
            <td>Hosting</td>
            <td>19/04/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

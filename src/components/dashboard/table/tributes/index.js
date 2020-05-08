import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import history from '../../../../services/history';
import { Container } from './styles';
import { useTributes } from '../../../../context/TributesContext';
import api from '../../../../services/api';
import { format } from 'date-fns';

export default function Table() {
  const [dados, setDados] = useState([]);
  const { data } = useTributes();

  useEffect(() => {
    setDados(data.searchTributes);
  }, [data]);

  const alterPayment = async (id) => {
    const tributeId = id;

    try {
      const { data } = await api.put(`/tribute/${tributeId}`, {
        payment: true
      });

      if (data) {
        toast.success(data.message);
        history.push('/');
      }
    } catch (e) {
      toast.error(e.response.data.message);
      history.push('/');
    }
  }


  const deleteTributes = async (id) => {
    const tributeId = id;
    try {
      const { data } = await api.delete(`/tribute/${tributeId}`);

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
      <table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Mês</th>
            <th>%</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {dados?.map((tributes) => (
            <tr key={tributes._id}>
              <td className="title">{tributes.year_reference}</td>
              <td className="income">{tributes.month}</td>
              <td>{tributes.rate}</td>
              <td>{(() => {
                if (tributes.payment) {
                  return <span style={{color: 'green', fontWeight: 'bold'}}>PAGO</span>;
                }
                if (!tributes.payment) {
                  return <span style={{color: 'red', fontWeight: 'bold'}}>NÃO PAGO</span>;
                }
              })()}</td>
              <td>{format(new Date(tributes.created_at), 'dd/MM/yyyy')}</td>
              {/* <td>
                <button className="btn-edit">
                  <Link to={`/tributes/edit/${tributes._id}`}>EDITAR</Link>
                </button>
              </td> */}
              <td>
                <button
                  className="btn-delete"
                  onClick={() => {
                    deleteTributes(tributes._id);
                  }}
                >
                  EXCLUIR
                </button>
              </td>
              <td>
                <button className="btn-quitar" onClick={() => {
                  alterPayment(tributes._id)
                }}>
                  QUITAR
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

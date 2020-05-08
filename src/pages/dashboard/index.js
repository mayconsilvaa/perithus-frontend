import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ContainerCard,
  ContentCard,
  ContainerSearch,
  ContentSearch,
  ContainerButton,
  ContainerTable,
  ContainerFooter,
} from './styles';

/** Import Components */
import Header from '../../components/dashboard/header';
import Card from '../../components/dashboard/cards';
import Search from '../../components/dashboard/search';
import TableTributes from '../../components/dashboard/table/tributes';
import TableProducts from '../../components/dashboard/table/products';
import Footer from '../../components/dashboard/footer';

/** Context */
import { useTributes } from '../../context/TributesContext';
import { useProducts } from '../../context/ProductsContext';
import api from '../../services/api';

export default function Dashboard() {
  const [type, setType] = useState('');
  const { tipo } = useTributes();
  const { tipoP } = useProducts();

  useEffect(() => {
    setType(tipo);
  }, [tipo]);

  useEffect(() => {
    setType(tipoP);
  }, [tipoP]);

  async function loadTotalVendas() {
    const response = await api.get(`/product`);
  }

  return (
    <Container>
      <Header />
      <ContainerCard>
        <ContentCard>
          <Card title="Produtos" description="Quanto gastou em produtos" />
          <Card
            title="Vendas"
            description="Quanto vendeu"
            style={{ color: '#2264b7' }}
          />
          <Card
            title="Impostos"
            description="Quanto gastou em impostos"
            style={{ color: 'red' }}
          />
          <Card
            title="Lucros"
            description="Qual o lucro mensal"
            style={{ color: 'green' }}
          />
        </ContentCard>
      </ContainerCard>
      <ContainerSearch>
        <ContentSearch>
          <Search />
        </ContentSearch>
      </ContainerSearch>
      <ContainerButton>
        <div>
          <button className="btn-add">
            <Link to="/products/register">Novo Produto</Link>
          </button>
          <button className="btn-calcular">
            <Link to="/tributes/register">Calcular Imposto</Link>
          </button>
        </div>
      </ContainerButton>
      {/** Modal */}
      {/* <ContainerModal>{open && <CadImposto />}</ContainerModal> */}
      {/** Table */}
      <ContainerTable>
        {(() => {
          if (type === 'Imposto') {
            return <TableTributes />;
          }
          if (type === 'Produto') {
            return <TableProducts />;
          }

          if (type === '') {
            return (
              <div>
                <h4>Nenhum registro localizado....</h4>
              </div>
            );
          }
        })()}
      </ContainerTable>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </Container>
  );
}

import React, { useState } from 'react';

import {
  Container,
  ContainerCard,
  ContentCard,
  ContainerSearch,
  ContentSearch,
  ContainerButton,
  ContainerModal,
  ContainerTable,
  ContainerFooter,
} from './styles';

/** Import Components */
import Header from '../../components/dashboard/header';
import Card from '../../components/dashboard/cards';
import Search from '../../components/dashboard/search';
import CadImposto from '../../components/dashboard/modals/cadImposto';
import Table from '../../components/dashboard/table';
import Footer from '../../components/dashboard/footer';

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };
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
          <button type="submit" onClick={openModal}>
            Cadastrar Imposto
          </button>
        </div>
      </ContainerButton>
      {/** Modal */}
      <ContainerModal>{open && <CadImposto />}</ContainerModal>
      {/** Table */}
      <ContainerTable>
        <Table />
      </ContainerTable>
      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </Container>
  );
}

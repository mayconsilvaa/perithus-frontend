import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Container } from './styles';

/** IMAGES */
import ImgLogo from '../../../assets/img/icone-logo.png';

export default function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <header>
        <div className="logo">
          <img src={ImgLogo} alt="logo" />
          <span>Gestor Financeiro</span>
        </div>
        <button type="submit" onClick={() => signOut()}>
          sair
        </button>
      </header>
    </Container>
  );
}

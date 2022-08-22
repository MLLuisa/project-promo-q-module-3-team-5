import logo from '../images/scream-team-04.png';
import '../styles/layout/header.scss';

function Header () {
    return (<header className="header__profile">
    <a className="header__profile__link" href="./index.html" title="Volver a la página principal">
      <img className="header__profile__logo" src={logo} alt="Logo Awesome Profile Cards" title="Logo Awesome Profile Cards" />
    </a>
  </header>);
};

export default Header;
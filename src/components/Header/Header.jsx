import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrapper">
          <div className="label">
            <div className="svg__outer">
              <div className="svg__inner"></div>
            </div>
            <span className="label__text">Agency</span>
          </div>
          <ul className="navigation">
            <li className="navigation__item">About</li>
            <li className="navigation__item">Services</li>
            <li className="navigation__item">Pricing</li>
            <li className="navigation__item">Blog</li>
          </ul>
          <button className="header__button">CONTACT</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

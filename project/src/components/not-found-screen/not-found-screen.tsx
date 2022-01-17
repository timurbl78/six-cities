import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="container">
        <section>
          <h1>404. Page not found</h1>
          <Link to={AppRoute.Main}>Вернуться на главную</Link>
        </section>
      </div>
    </div>
  );
}

export default NotFoundScreen;

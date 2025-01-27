import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/"><img src="https://i.ibb.co/rQSWfZc/logo-white.png" alt="Logo" className="logo" /></NavLink>
        <NavLink to="/"><h2 id="headerText">VOXENFELLE ACADEMY</h2></NavLink>
      </div>
      <nav>
        <ul className="header-list">
          <li>
            <NavLink to="/" className="header-link" activeClassName="active-link">
              Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/attendance" className="header-link" activeClassName="active-link">
              Attendance
            </NavLink>
          </li>
          <li>
            <NavLink to="/characters" className="header-link" activeClassName="active-link">
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink to="/clubs" className="header-link" activeClassName="active-link">
              Clubs
            </NavLink>
          </li>
          <li>
            <NavLink to="/art" className="header-link" activeClassName="active-link">
              Art
            </NavLink>
          </li>
          <li>
            <a href="https://www.youtube.com/@VoxenfelleAcademy" target="_blank" rel="noopener noreferrer">Youtube</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

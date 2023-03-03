import React from 'react';

//destruct props
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutme"
          //onclick only accepts function in ()
          onClick={() => handlePageChange('About me')}

          className={currentPage === 'About me' ? 'nav-link active' : 'nav-link'}
        >
          About me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('Porfolio')}

          className={currentPage === 'Porfolio' ? 'nav-link active' : 'nav-link'}
        >
          Porfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Blog')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

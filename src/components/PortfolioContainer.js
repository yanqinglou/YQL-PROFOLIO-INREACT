import React, { useState } from 'react';
import NavTabs from './NavTabs';
import aboutme from './pages/aboutme';
import porfolio from './pages/Porfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  //based the current page, render corresponding page on line 33
  const renderPage = () => {
    if (currentPage === 'About me') {
      return <aboutme />;
    }
    if (currentPage === 'Porfolio') {
      return <porfolio />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h1>YQL Portfolio</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    
    </div>
  );
}

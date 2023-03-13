import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Aboutme from "./pages/Aboutme";
import Porfolio from "./pages/Porfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./Footer."

const styles = {
  NavTabs:{
    marginRight:0
  },
  header: {
    padding:'1em',
    display: "flex",
    justifyContent:"space-between",

  },
  body:{
    minHeight:'90vh'
  }
  
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About me");

  //based the current page, render corresponding page on line 33
  const renderPage = () => {
    if (currentPage === "About me") {
      return <Aboutme />;
    }
    if (currentPage === "Porfolio") {
      return <Porfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div style={styles.body}>
      <div style={styles.header}>
        <h1> Yanqing Lou </h1>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          style={styles.NavTabs}
        />
      </div>
      {renderPage()}
      </div>
      <Footer/>
    </div>
  );
}

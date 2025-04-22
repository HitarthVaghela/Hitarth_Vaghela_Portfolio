import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { Helmet } from 'react-helmet';

function App() {
  useEffect(() => {
    // Preload images for projects
    const preloadImages = () => {
      const imagesToPreload = [
        'https://via.placeholder.com/350x200?text=Project+Image',
      ];

      imagesToPreload.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    preloadImages();
  }, []);

  return (
    <Router>
      <Helmet>
        <title>Hitarth Vaghela | Software Engineer</title>
        <meta name="description" content="Portfolio of Hitarth Vaghela, a Software Engineer with expertise in full-stack development, PHP, and MySQL." />
        <meta name="keywords" content="Hitarth Vaghela, Software Engineer, Web Developer, PHP, MySQL, Full Stack" />
        <meta name="author" content="Hitarth Vaghela" />
        <meta property="og:title" content="Hitarth Vaghela | Software Engineer" />
        <meta property="og:description" content="Portfolio of Hitarth Vaghela, a Software Engineer with expertise in full-stack development, PHP, and MySQL." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>
      
      <GlobalStyles />
      <CustomCursor />
      
      <Routes>
        {/* Admin route disabled for static GitHub Pages deployment */}
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;

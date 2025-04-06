import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 100;
  background: ${(props) => (props.scrolled ? 'rgba(12, 12, 29, 0.9)' : 'transparent')};
  backdrop-filter: ${(props) => (props.scrolled ? 'blur(10px)' : 'none')};
  transition: var(--transition);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-color);
  cursor: pointer;
  z-index: 20;

  span {
    color: var(--accent-color);
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 20;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background: rgba(26, 26, 46, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    transition: var(--transition);
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(motion.a)`
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.1rem;
  transition: var(--transition);

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent-color);
    transition: var(--transition);
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: var(--accent-color);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollToSection('home')}
        >
          Hitarth<span>.</span>
        </Logo>

        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        <NavMenu 
          as={motion.ul}
          variants={navVariants}
          initial="hidden"
          animate="visible"
          isOpen={isOpen}
        >
          <NavItem>
            <NavLink 
              onClick={() => scrollToSection('home')}
              variants={itemVariants}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              onClick={() => scrollToSection('about')}
              variants={itemVariants}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              onClick={() => scrollToSection('skills')}
              variants={itemVariants}
            >
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              onClick={() => scrollToSection('projects')}
              variants={itemVariants}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              onClick={() => scrollToSection('experience')}
              variants={itemVariants}
            >
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              onClick={() => scrollToSection('contact')}
              variants={itemVariants}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 
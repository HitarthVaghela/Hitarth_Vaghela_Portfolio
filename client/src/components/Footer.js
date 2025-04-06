import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaCode } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: var(--background-color);
  padding: 3rem 0 1rem;
  position: relative;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  span {
    color: var(--accent-color);
  }
`;

const FooterText = styled.p`
  color: var(--light-text-color);
  margin-bottom: 1.5rem;
  max-width: 600px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-background);
  color: var(--text-color);
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    color: #fff;
    transform: translateY(-5px);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 1rem 0;
`;

const Copyright = styled.p`
  color: var(--light-text-color);
  font-size: 0.9rem;
  margin-top: 1.5rem;
`;

const ScrollToTop = styled.a`
  position: absolute;
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: var(--transition);
  cursor: pointer;
  
  &:hover {
    background-color: #0069d9;
    transform: translateY(-5px);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <Logo>
            Hitarth<span>.</span>
          </Logo>
          
          <FooterText>
            Software Engineer and Web Developer focused on creating beautiful and functional user experiences.
          </FooterText>
          
          <SocialLinks>
            <SocialLink 
              href="https://github.com/HitarthVaghela" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
            
            <SocialLink 
              href="https://linkedin.com/in/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
            
            <SocialLink 
              href="https://leetcode.com/u/Hitarth27/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <FaCode />
            </SocialLink>
            
            <SocialLink 
              href="mailto:hdvaghela27@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
          
          <Divider />
          
          <Copyright>
            &copy; {new Date().getFullYear()} Hitarth Vaghela. All rights reserved.
          </Copyright>
        </FooterContent>
      </FooterContainer>
      
      <ScrollToTop onClick={scrollToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </ScrollToTop>
    </FooterSection>
  );
};

export default Footer; 
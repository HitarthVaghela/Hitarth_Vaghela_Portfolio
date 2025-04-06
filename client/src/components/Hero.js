import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--background-color) 100%
  );
  position: relative;
  overflow: hidden;
  padding-top: 80px;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 3rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 1;
  
  @media screen and (max-width: 992px) {
    order: 2;
    margin-top: 2rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 2rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeroText = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--light-text-color);
  margin-bottom: 2.5rem;
  line-height: 1.8;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
  
  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  text-align: center;
  
  &.primary {
    background-color: var(--accent-color);
    color: #fff;
    
    &:hover {
      background-color: #0069d9;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
    }
  }
  
  &.secondary {
    background: transparent;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    
    &:hover {
      background-color: var(--accent-color);
      color: #fff;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
    }
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--accent-color), #16213e);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media screen and (max-width: 992px) {
    order: 1;
    width: 300px;
    height: 300px;
  }
  
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(0, 123, 255, 0.3) 0%,
      transparent 70%
    );
  }
  
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-background);
  color: var(--text-color);
  font-size: 1.2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
  }
`;

const Shapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Shape = styled.div`
  position: absolute;
  background-color: rgba(0, 123, 255, 0.05);
  border-radius: 50%;
  
  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -100px;
  }
  
  &:nth-child(2) {
    width: 500px;
    height: 500px;
    bottom: -200px;
    left: -200px;
  }
  
  &:nth-child(3) {
    width: 200px;
    height: 200px;
    bottom: 10%;
    right: 20%;
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <HeroSection id="home">
      <Shapes>
        <Shape />
        <Shape />
        <Shape />
      </Shapes>
      
      <HeroContainer>
        <HeroContent as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
          <HeroTitle variants={itemVariants}>
            Hi, I'm <span className="text-gradient">Hitarth Vaghela</span>
          </HeroTitle>
          
          <HeroSubtitle variants={itemVariants}>
            Software Engineer
          </HeroSubtitle>
          
          <HeroText variants={itemVariants}>
            An enthusiastic and detail-oriented Web Developer with expertise in full-stack 
            development, PHP, and MySQL. Passionate about building scalable applications, 
            optimizing user experiences, and exploring structured data insights.
          </HeroText>
          
          <ButtonGroup variants={itemVariants}>
            <Button 
              href="#projects" 
              className="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </Button>
            
            <Button 
              href="#contact" 
              className="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </Button>
          </ButtonGroup>
          
          <SocialLinks variants={itemVariants}>
            <SocialIcon 
              href="https://github.com/HitarthVaghela" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIcon>
            
            <SocialIcon 
              href="https://linkedin.com/in/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIcon>
            
            <SocialIcon 
              href="mailto:hdvaghela27@gmail.com"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <FaEnvelope />
            </SocialIcon>
            
            <SocialIcon 
              href="tel:+919033689105"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Phone"
            >
              <FaPhone />
            </SocialIcon>
          </SocialLinks>
        </HeroContent>
        
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
        >
          <img 
            src="/profile.jpg" 
            alt="Hitarth Vaghela" 
          />
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 
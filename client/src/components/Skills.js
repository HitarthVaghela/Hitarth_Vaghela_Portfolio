import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNode, 
  FaPhp, 
  FaDatabase, 
  FaPython,
  FaJava, 
  FaGitAlt,
  FaServer 
} from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiExpress, SiMysql, SiDjango } from 'react-icons/si';

const SkillsSection = styled.section`
  background-color: var(--background-color);
  position: relative;
  overflow: hidden;
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    display: inline-block;
    position: relative;
    margin-bottom: 1rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: var(--accent-color);
    }
  }
  
  p {
    color: var(--light-text-color);
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const SkillsCard = styled(motion.div)`
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: var(--accent-color);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: var(--accent-color);
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 123, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: var(--transition);
  
  svg {
    font-size: 1.8rem;
    color: var(--accent-color);
    transition: var(--transition);
  }
  
  &:hover {
    transform: translateY(-5px);
    background-color: var(--accent-color);
    
    svg {
      color: #fff;
    }
  }
`;

const SkillName = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ProgressBarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProgressItem = styled.div`
  p {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    span {
      font-weight: 500;
    }
  }
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background-color: var(--accent-color);
  border-radius: 10px;
`;

const Skills = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: width => ({
      width: `${width}%`,
      transition: { duration: 1, ease: 'easeInOut' },
    }),
  };

  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 />, level: 70 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 65 },
    { name: 'JavaScript', icon: <FaJs />, level: 60 },
    { name: 'React', icon: <FaReact />, level: 55 },
  ];

  const backendSkills = [
    { name: 'PHP', icon: <FaPhp />, level: 65 },
    { name: 'Node.js', icon: <FaNode />, level: 50 },
    { name: 'Express', icon: <SiExpress />, level: 50 },
    { name: 'Django', icon: <SiDjango />, level: 55 },
  ];

  const languages = [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'C++', icon: <FaServer /> },
  ];

  const databases = [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'SQL', icon: <FaDatabase /> },
  ];

  const tools = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGitAlt /> },
    { name: 'VS Code', icon: <FaServer /> },
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Skills</h2>
          <p>
            Here are my technical skills and competencies that I've developed over the years.
          </p>
        </SectionTitle>
        
        <SkillsContent>
          <SkillsCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3>Frontend Development</h3>
            <ProgressBarsContainer>
              {frontendSkills.map((skill, index) => (
                <ProgressItem key={index}>
                  <p>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </p>
                  <ProgressBarWrapper>
                    <ProgressBar
                      custom={skill.level}
                      variants={barVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </ProgressBarWrapper>
                </ProgressItem>
              ))}
            </ProgressBarsContainer>
          </SkillsCard>
          
          <SkillsCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3>Backend Development</h3>
            <ProgressBarsContainer>
              {backendSkills.map((skill, index) => (
                <ProgressItem key={index}>
                  <p>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </p>
                  <ProgressBarWrapper>
                    <ProgressBar
                      custom={skill.level}
                      variants={barVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </ProgressBarWrapper>
                </ProgressItem>
              ))}
            </ProgressBarsContainer>
          </SkillsCard>
          
          <SkillsCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3>Programming Languages</h3>
            <SkillsGrid>
              {languages.map((skill, index) => (
                <SkillItem key={index} variants={itemVariants}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillsCard>
          
          <SkillsCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3>Database & Tools</h3>
            <SkillsGrid>
              {databases.map((skill, index) => (
                <SkillItem key={index} variants={itemVariants}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
              
              {tools.map((skill, index) => (
                <SkillItem key={index} variants={itemVariants}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillsCard>
        </SkillsContent>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 
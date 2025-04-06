import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const AboutSection = styled.section`
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
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

const AboutContent = styled.div`
  display: flex;
  gap: 4rem;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const AboutInfo = styled.div`
  flex: 1;
`;

const AboutText = styled.div`
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.05rem;
  }
`;

const PersonalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  span {
    font-weight: 600;
    margin-right: 0.5rem;
    color: var(--accent-color);
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background-color: var(--accent-color);
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);
  text-align: center;
  
  &:hover {
    background-color: #0069d9;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
  }
`;

const TimelineWrapper = styled.div`
  flex: 1;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: var(--accent-color);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 3rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--accent-color);
    transform: translateX(-50%);
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 0;
  left: -2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-background);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  
  svg {
    font-size: 1.2rem;
    color: var(--accent-color);
  }
`;

const TimelineContent = styled.div`
  background-color: var(--card-background);
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
  }
  
  .timeline-date {
    font-size: 0.9rem;
    color: var(--light-text-color);
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const About = () => {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <p>
            Get to know more about me, my background, and my education.
          </p>
        </SectionTitle>
        
        <AboutContent>
          <AboutInfo
            as={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AboutText>
              <p>
                I am Hitarth Vaghela, a passionate Software Engineer with expertise in full-stack development.
                I enjoy building web applications that are user-friendly, accessible, and solve real-world problems.
              </p>
              <p>
                My journey in software development started during my academic years, and I've since honed my skills
                through various projects and internships. I'm passionate about database management, system optimization,
                and data-driven solutions, and I'm eager to apply my problem-solving and analytical skills in a dynamic role.
              </p>
            </AboutText>
            
            <PersonalInfo>
              <InfoItem>
                <span>Name:</span> Hitarth Vaghela
              </InfoItem>
              <InfoItem>
                <span>Email:</span> hitarthvaghela.work@gmail.com
              </InfoItem>
              <InfoItem>
                <span>Phone:</span> +91 9033689105
              </InfoItem>
              <InfoItem>
                <span>From:</span> Rajkot, Gujarat, India
              </InfoItem>
              <InfoItem>
                <span>Degree:</span> B.E. Computer Engineering
              </InfoItem>
              <InfoItem>
                <span>Graduation:</span> July 2024
              </InfoItem>
            </PersonalInfo>
            
            <ButtonWrapper>
              <Button 
                href="/HITARTH_VAGHELA_RESUME.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  padding: '0.8rem 1.8rem',
                  backgroundColor: 'var(--accent-color)',
                  color: '#fff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                Download Resume
              </Button>
            </ButtonWrapper>
          </AboutInfo>
          
          <TimelineWrapper>
            <Timeline
              as={motion.div}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <TimelineItem variants={itemVariants}>
                <TimelineIcon>
                  <FaGraduationCap />
                </TimelineIcon>
                <TimelineContent>
                  <h3>Bachelor in Computer Engineering</h3>
                  <h4>Charotar University of Science and Technology, Anand</h4>
                  <div className="timeline-date">July 2024 – Present</div>
                  <p>CGPA: 7.92</p>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem variants={itemVariants}>
                <TimelineIcon>
                  <FaGraduationCap />
                </TimelineIcon>
                <TimelineContent>
                  <h3>Diploma in Computer Engineering</h3>
                  <h4>ATMIYA UNIVERSITY, Rajkot</h4>
                  <div className="timeline-date">September 2021 - April 2024</div>
                  <p>CGPA: 9.72</p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TimelineWrapper>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 
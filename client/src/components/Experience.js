import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUserTie } from 'react-icons/fa';

const ExperienceSection = styled.section`
  background-color: var(--background-color);
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const ExperienceContainer = styled.div`
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

const TimelineWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
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

const Experience = () => {
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
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Experience</h2>
          <p>
            Professional experience and internships that have shaped my skills and knowledge.
          </p>
        </SectionTitle>
        
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
                <FaLaptopCode />
              </TimelineIcon>
              <TimelineContent>
                <h3>Web Developer Intern</h3>
                <h4>INFINITEAI, Rajkot</h4>
                <div className="timeline-date">December 2023 – January 2024</div>
                <p>
                  Developed a full-stack website using HTML, CSS, JavaScript, PHP, reducing OTP failures by 30%.
                  Optimized website performance, reducing page load time by 20%.
                </p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem variants={itemVariants}>
              <TimelineIcon>
                <FaUserTie />
              </TimelineIcon>
              <TimelineContent>
                <h3>Intern</h3>
                <h4>TECHNOSOFT, Rajkot</h4>
                <div className="timeline-date">April 2023 – June 2023</div>
                <p>
                  Managed 100+ product listings, increasing online engagement by 10%.
                  Optimized data management and backend processes using PHP.
                  Managed company blogs and designed marketing banners to enhance branding.
                </p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </TimelineWrapper>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience; 
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
`;

const ProjectsContainer = styled.div`
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

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${(props) =>
    props.active ? 'var(--accent-color)' : 'var(--card-background)'};
  color: ${(props) => (props.active ? '#fff' : 'var(--text-color)')};
  border: none;
  border-radius: 5px;
  margin: 0 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${(props) =>
      props.active ? 'var(--accent-color)' : 'rgba(0, 123, 255, 0.2)'};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--card-background);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    
    .project-image::before {
      opacity: 0.8;
    }
    
    .project-links {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8),
      transparent
    );
    opacity: 0.5;
    transition: var(--transition);
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const ProjectLinks = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  z-index: 2;
  opacity: 0;
  transform: translateY(-50%);
  transition: var(--transition);
`;

const ProjectLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    color: #fff;
    transform: translateY(-5px);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--text-color);
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: var(--light-text-color);
  margin-bottom: 1.2rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  font-size: 0.8rem;
  color: var(--text-color);
  background-color: rgba(0, 123, 255, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    color: #fff;
  }
`;

// ---------------- UPDATED PROJECTS DATA ------------------

const mockProjects = [
  {
    _id: '1',
    title: 'Spoural Registration System (CHARUSAT)',
    description:
      'Live event registration system for CHARUSAT handling 11,000+ students and 3,500+ registrations. Includes secure workflows, match announcements, schedules, and real-time updates with 25,000+ page views.',
    technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'JavaScript'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=Spoural+Portal',
    github: 'https://github.com/harsh1036/Spoural_Managment_System',
    demo: 'http://spoural.charusat.edu.in',
    featured: true,
  },
  {
    _id: '2',
    title: 'HR Analytics Portal',
    description:
      'Enterprise-grade HR analytics system built during internship. Includes SQL-based data processing, sentiment analysis, PDF report automation, and Power BI dashboards for employee exit trends.',
    technologies: ['.NET', 'SQL Server', 'Power BI'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=HR+Analytics',
    github: 'https://github.com/HitarthVaghela/HR-Analytics-for-Exit-Interviews',
    demo: '#',
    featured: true,
  },
  {
    _id: '3',
    title: 'RoomMate Expense Tracker',
    description:
      'A Django-based web app to split and track shared expenses. Supports secure authentication, group management, bill sharing, settlement calculations, and an intuitive dashboard.',
    technologies: ['Django', 'Python', 'HTML', 'CSS', 'SQLite'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=Expense+Tracker',
    github: 'https://github.com/HitarthVaghela/RoomExpense-using-Django',
    demo: '#',
    featured: true,
  },
  {
    _id: '4',
    title: 'Serene Space',
    description:
      'A mental wellness platform with doctor listings, patient registration, appointment scheduling, and automated confirmation emails to improve mental health accessibility.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=Serene+Space',
    github: 'https://github.com/HitarthVaghela/Serene_Space',
    demo: '#',
    featured: true,
  },
  {
    _id: '5',
    title: 'ASL Fingerspelling Recognition',
    description:
      'Worked on Kaggle Google ASL competition developing a hybrid model combining CNN + Transformer architectures to classify American Sign Language hand gestures for accessibility technology.',
    technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Kaggle'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=ASL+Recognition',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    _id: '6',
    title: 'Chess Using JavaScript',
    description:
      'Fully functional chess game built using Vanilla JavaScript with move validation, turn logic, UI interactions, and smooth gameplay experience.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=Chess+Game',
    github: 'https://github.com/HitarthVaghela/Chess-Using-JavaScript',
    demo: '#',
    featured: false,
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [projects] = useState(mockProjects);

  const filteredProjects = projects.filter((project) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'featured') return project.featured;
    return false;
  });

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>
          <h2>My Projects</h2>
          <p>Check out some of my recent work</p>
        </SectionTitle>

        <FilterTabs>
          <FilterButton
            active={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
          >
            All
          </FilterButton>
          <FilterButton
            active={activeTab === 'featured'}
            onClick={() => setActiveTab('featured')}
          >
            Featured
          </FilterButton>
        </FilterTabs>

        <ProjectsGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectImage className="project-image">
                  <img src={project.image} alt={project.title} />
                  <ProjectLinks className="project-links">
                    {project.github && (
                      <ProjectLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </ProjectLink>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <ProjectLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectImage>

                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>
                    {project.description}
                  </ProjectDescription>

                  <TechStack>
                    {project.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;

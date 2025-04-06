import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
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

const ProjectTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const TabButton = styled.button`
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

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 123, 255, 0.2);
    border-top: 5px solid var(--accent-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: var(--danger-color);
  padding: 2rem;
`;

// Mock data in case API is not available
const mockProjects = [
  {
    _id: '1',
    title: 'InfiniteAI Website',
    description:
      'Developed a full-stack job portal with admin and client-side panels. Integrated task management features with automated Gmail notifications.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=InfiniteAI+Website',
    github: 'https://github.com/HitarthVaghela/InfiniteIO',
    demo: '#',
    featured: true,
  },
  {
    _id: '2',
    title: 'Serene Space',
    description:
      'Created a mental health app with personalized recommendations, meditation guides, mood tracking, and daily affirmations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=Serene+Space',
    github: 'https://github.com/HitarthVaghela/Serene_Space',
    demo: '#',
    featured: true,
  },
  {
    _id: '3',
    title: 'Chess Using JavaScript',
    description:
      'A functional chess game built entirely using JavaScript, HTML, and CSS. The project was created as an experiment to try new ideas and enhance skills in web-based game development.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=Chess+Game',
    github: 'https://github.com/HitarthVaghela/Chess-Using-JavaScript',
    demo: '#',
    featured: true,
  },
  {
    _id: '4',
    title: 'E-Commerce Website Using Django',
    description:
      'An e-commerce platform built with Django framework, featuring product listings, user authentication, shopping cart functionality, and payment integration.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=E-Commerce+Website',
    github:
      'https://github.com/HitarthVaghela/E-Commerce-website-using-Django',
    demo: '#',
    featured: false,
  },
  {
    _id: '5',
    title: 'Spoural Management System',
    description:
      'A comprehensive software solution designed to streamline the planning, execution, and management of events. Provides tools to handle various aspects of event organization, from initial planning to post-event analysis.',
    technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'JavaScript'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=Spoural+Management',
    github: 'https://github.com/harsh1036/Spoural_Managment_System',
    demo: '#',
    featured: false,
  },
  {
    _id: '6',
    title: 'DC Wallet Extension',
    description:
      'A secure multi-chain cryptocurrency wallet browser extension supporting Ethereum and other EVM-compatible networks. Includes features like secure key storage, multiple accounts, and transaction signing.',
    technologies: ['TypeScript', 'React', 'JavaScript', 'Blockchain', 'Ethereum'],
    image: 'https://placehold.co/600x400/007bff/ffffff?text=DC+Wallet',
    github: 'https://github.com/neminharia/DC_Wallet',
    demo: '#',
    featured: false,
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects only once when component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Try to fetch from API
        const response = await axios.get('http://localhost:5000/api/projects');
        const data = response.data;
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.log('Using mock data due to API error:', error);
        // Use mock data if API is not available
        setProjects(mockProjects);
        setFilteredProjects(mockProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects whenever activeTab changes or projects are updated
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredProjects([...projects]);
    } else if (activeTab === 'featured') {
      setFilteredProjects(projects.filter((project) => project.featured));
    }
  }, [activeTab, projects]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 50
      },
    },
  };

  if (loading) {
    return (
      <ProjectsSection id="projects">
        <ProjectsContainer>
          <SectionTitle>
            <h2>My Projects</h2>
            <p>Check out some of my recent work</p>
          </SectionTitle>
          <LoadingSpinner>
            <div className="spinner"></div>
          </LoadingSpinner>
        </ProjectsContainer>
      </ProjectsSection>
    );
  }

  if (error) {
    return (
      <ProjectsSection id="projects">
        <ProjectsContainer>
          <SectionTitle>
            <h2>My Projects</h2>
            <p>Check out some of my recent work</p>
          </SectionTitle>
          <ErrorMessage>{error}</ErrorMessage>
        </ProjectsContainer>
      </ProjectsSection>
    );
  }

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Projects</h2>
          <p>Check out some of my recent work</p>
        </SectionTitle>

        <ProjectTabs>
          <TabButton
            active={activeTab === 'all'}
            onClick={() => handleTabChange('all')}
          >
            All Projects
          </TabButton>
          <TabButton
            active={activeTab === 'featured'}
            onClick={() => handleTabChange('featured')}
          >
            Featured
          </TabButton>
        </ProjectTabs>

        <ProjectsGrid
          key={activeTab} // Force re-render of grid when tab changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id} variants={itemVariants}>
                <ProjectImage className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/600x400/007bff/ffffff?text=Project+Image';
                    }}
                  />
                  <ProjectLinks className="project-links">
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </ProjectLink>
                    {project.demo && project.demo !== '#' && (
                      <ProjectLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
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
                    {project.technologies.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
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
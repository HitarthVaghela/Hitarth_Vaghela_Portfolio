import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaCode
} from 'react-icons/fa';

const ContactSection = styled.section`
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
`;

const ContactContainer = styled.div`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled.div`
  background-color: var(--card-background);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 123, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    font-size: 1.3rem;
    color: var(--accent-color);
  }
`;

const CardContent = styled.div``;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: var(--light-text-color);
`;

const CardLink = styled.a`
  color: var(--accent-color);
  transition: var(--transition);
  
  &:hover {
    color: #fff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-background);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
    color: #fff;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: var(--card-background);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: var(--light-text-color);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: var(--primary-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  color: var(--text-color);
  font-size: 0.95rem;
  transition: var(--transition);
  
  &:focus {
    border-color: var(--accent-color);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: var(--primary-color);
  border: 1px solid var(--border-color);
  border-radius: 5px;
  color: var(--text-color);
  font-size: 0.95rem;
  transition: var(--transition);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    border-color: var(--accent-color);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  background-color: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: #0069d9;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FormMessage = styled.div`
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 5px;
  text-align: center;
  
  &.success {
    background-color: rgba(76, 175, 80, 0.1);
    color: var(--success-color);
  }
  
  &.error {
    background-color: rgba(244, 67, 54, 0.1);
    color: var(--danger-color);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Show a successful submission message
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully!',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setLoading(false);

    /* Backend integration code - uncomment when backend is available
    // API URL - use environment variable in development or the deployed URL in production
    const API_URL = process.env.NODE_ENV === 'production' 
      ? 'https://hitarth-portfolio-api.onrender.com/api/contact' 
      : 'http://localhost:5000/api/contact';
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Your message has been sent successfully!',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again later.',
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
    */
  };
  
  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };
  
  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Contact Me</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing new
            projects, creative ideas or opportunities to be part of your visions.
          </p>
        </SectionTitle>
        
        <ContactContent>
          <ContactInfo
            as={motion.div}
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <ContactCard>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <CardContent>
                <CardTitle>Email</CardTitle>
                <CardLink href="mailto:hitarthvaghela.work@gmail.com">
                  hitarthvaghela.work@gmail.com
                </CardLink>
              </CardContent>
            </ContactCard>
            
            <ContactCard>
              <IconWrapper>
                <FaPhoneAlt />
              </IconWrapper>
              <CardContent>
                <CardTitle>Phone</CardTitle>
                <CardLink href="tel:+919033689105">
                  +91 9033689105
                </CardLink>
              </CardContent>
            </ContactCard>
            
            <ContactCard>
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <CardContent>
                <CardTitle>Location</CardTitle>
                <CardText>Rajkot, Gujarat, India</CardText>
              </CardContent>
            </ContactCard>
            
            <ContactCard>
              <IconWrapper>
                <FaGithub />
              </IconWrapper>
              <CardContent>
                <CardTitle>Social Profiles</CardTitle>
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
                </SocialLinks>
              </CardContent>
            </ContactCard>
          </ContactInfo>
          
          <ContactForm
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <label htmlFor="name">Your Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Your Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <FaPaperPlane />
            </SubmitButton>
            
            {formStatus.submitted && (
              <FormMessage className={formStatus.success ? 'success' : 'error'}>
                {formStatus.message}
              </FormMessage>
            )}
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 
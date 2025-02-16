import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';
import { motion } from 'framer-motion';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  useEffect(() => {
    const touchHandler = (event) => {
      const target = event.target.closest('.hover-card');
      if (target) {
        target.classList.add('hover-active');
        setTimeout(() => {
          target.classList.remove('hover-active');
        }, 800);
      }
    };
    document.addEventListener('touchstart', touchHandler);
    return () => {
      document.removeEventListener('touchstart', touchHandler);
    };
  }, []);

  return (
    <Container id="projects">
      <Wrapper>
        <Title
          as={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </Title>
        <Desc
          as={motion.div}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'web app' ? (
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          <Divider />
          {toggle === "window's app" ? (
            <ToggleButton active value="window's app" onClick={() => setToggle("window's app")}>
              Window's App
            </ToggleButton>
          ) : (
            <ToggleButton value="window's app" onClick={() => setToggle("window's app")}>
              Window's App
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' &&
            projects.map((project, index) => (
              <motion.div
                key={index}
                className="hover-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
              </motion.div>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <motion.div
                key={index}
                className="hover-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
              </motion.div>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;

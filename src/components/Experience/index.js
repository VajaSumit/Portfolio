import React, { useEffect } from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { motion } from 'framer-motion';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px 80px 0px;
    position: relative;
    z-index: 1;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
`;

const Title = styled(motion.div)`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Desc = styled(motion.div)`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const ExperienceCardWrapper = styled(motion.div)`
    width: 100%;
    &.hover-card {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    &.hover-active {
        transform: translateY(-8px);
        box-shadow: rgba(133, 76, 230, 0.4) 0px 10px 30px;
    }
`;

const Experience = () => {
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
        <Container id="experience">
            <Wrapper>
                <Title initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    Experience
                </Title>
                <Desc initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <ExperienceCardWrapper
                                key={index}
                                className="hover-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                                            <TimelineDot variant="outlined" color="secondary" />
                                        </motion.div>
                                        {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <ExperienceCard experience={experience} />
                                    </TimelineContent>
                                </TimelineItem>
                            </ExperienceCardWrapper>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Experience;

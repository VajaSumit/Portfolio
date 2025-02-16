import React, { useEffect } from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import { motion } from 'framer-motion';  // Import framer-motion

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled(motion.div)`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled(motion.div)`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;

const AnimatedTimelineItem = styled(motion.div)`
    width: 100%;
`;

const EducationCardWrapper = styled(motion.div)`
    width: 100%;
    &.hover-card {
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
    &.hover-active {
        transform: translateY(-8px);
        box-shadow: rgba(133, 76, 230, 0.4) 0px 10px 30px;
    }
`;

const Education = () => {
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
        <Container id="education">
            <Wrapper>
                {/* Animated Title */}
                <Title 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Education
                </Title>

                {/* Animated Description */}
                <Desc 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>

                <TimelineSection>
                    <Timeline>
                        {education.map((edu, index) => (
                            <EducationCardWrapper
                                key={index}
                                className="hover-card"
                                initial={{ opacity: 0, y: 30 }} // Fade-in from below
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <TimelineItem>
                                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                                        <EducationCard education={edu}/>
                                    </TimelineContent>
                                    <TimelineSeparator>
                                        {/* Animated Timeline Dot */}
                                        <motion.div 
                                            initial={{ scale: 0 }} 
                                            animate={{ scale: 1 }} 
                                            transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 100 }}
                                        >
                                            <TimelineDot variant="outlined" color="secondary" />
                                        </motion.div>
                                        {index !== education.length - 1 && (
                                            <TimelineConnector style={{ background: '#854CE6' }} />
                                        )}
                                    </TimelineSeparator>
                                </TimelineItem>
                            </EducationCardWrapper>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Education;

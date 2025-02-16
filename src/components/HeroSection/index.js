import React, { useState } from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import {
  HeroContainer,
  InfoContainer,
  InfoItem,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton
} from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { AnimatedCircle } from "../../components/AnimatedCircle";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DescriptionIcon from '@mui/icons-material/Description';

const HeroSection = () => {
  const [isTouched, setIsTouched] = useState(false);

  // Handle touch start
  const handleTouchStart = () => {
    setIsTouched(true);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>

            <InfoContainer>
              <InfoItem>{Bio.address}</InfoItem>
              <InfoItem>{Bio.age} years old</InfoItem>
              <InfoItem>{Bio.mobile}</InfoItem>
              <InfoItem>{Bio.email}</InfoItem>
            </InfoContainer>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '20px' }}>
              <SocialMediaIcons>
                <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
              </SocialMediaIcons>

              <ResumeButton href={Bio.resume} target='_blank'>
                <DescriptionIcon /> Check Resume
              </ResumeButton>
            </div>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <AnimatedCircle />
            <Img
              src={HeroImg}
              alt="hero-image"
              className={isTouched ? "touch-active" : ""}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}

export default HeroSection;

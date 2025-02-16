import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
`;

// Animated Contact Form
const ContactForm = styled(motion.form)`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  // Hover effect for Desktop
  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.05);
      box-shadow: rgba(23, 92, 230, 0.35) 0px 10px 40px;
    }
  }

  // Touch effect for Mobile
  @media (max-width: 768px) {
    &:active {
      transform: scale(1.05);
      box-shadow: rgba(23, 92, 230, 0.35) 0px 10px 40px;
    }
  }
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border: 1px solid hsla(271, 100%, 50%, 1);
    box-shadow: 0px 0px 12px hsla(271, 100%, 50%, 0.6);
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border: 1px solid hsla(271, 100%, 50%, 1);
    box-shadow: 0px 0px 12px hsla(271, 100%, 50%, 0.6);
  }
`;

const ContactButton = styled.input`
  width: 100%;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
`;

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  // Email validation function
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const formValues = Object.fromEntries(formData.entries());

    let newErrors = {};

    if (!formValues.from_email) {
      newErrors.from_email = "Email is required";
    } else if (!validateEmail(formValues.from_email)) {
      newErrors.from_email = "Invalid email format";
    }

    if (!formValues.from_name) {
      newErrors.from_name = "Name is required";
    }
    if (!formValues.subject) {
      newErrors.subject = "Subject is required";
    }
    if (!formValues.message) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs.sendForm(
      'service_7i9xj5r',
      'template_xgun4q7',
      form.current,
      '7TR1PjEITf_-z-YB5'
    )
      .then(() => {
        setOpen(true); // Open the success modal
        form.current.reset();
        setErrors({});
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
        >
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactInput placeholder="Your Email" name="from_email" />
          {errors.from_email && <ErrorText>{errors.from_email}</ErrorText>}

          <ContactInput placeholder="Your Name" name="from_name" />
          {errors.from_name && <ErrorText>{errors.from_name}</ErrorText>}

          <ContactInput placeholder="Subject" name="subject" />
          {errors.subject && <ErrorText>{errors.subject}</ErrorText>}

          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}

          <ContactButton type="submit" value="Send" />
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;

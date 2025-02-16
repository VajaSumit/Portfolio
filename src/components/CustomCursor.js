import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components for the cursor
const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

const CursorDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #9b51e0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.05s ease-out;
`;

const CursorRing = styled.div`
  position: absolute;
  width: ${(props) => (props.isHovering ? "45px" : "30px")};
  height: ${(props) => (props.isHovering ? "45px" : "30px")};
  background-color: rgba(155, 81, 224, 0.15);
  border: 2px solid rgba(155, 81, 224, 0.6);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.15s ease-out, height 0.15s ease-out, transform 0.08s ease-out;
`;

// Touch ripple effect styling
const Ripple = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(155, 81, 224, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  animation: rippleEffect 0.6s ease-out;
  pointer-events: none;
  z-index: 999;

  @keyframes rippleEffect {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable cursor effect on mobile

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Smooth trailing effect
      requestAnimationFrame(() => {
        setTrail((prev) => ({
          x: prev.x + (e.clientX - prev.x) * 0.15,
          y: prev.y + (e.clientY - prev.y) * 0.15,
        }));
      });
    };

    const addHoverEffect = () => setIsHovering(true);
    const removeHoverEffect = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("button, a, .hover-card").forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button, a, .hover-card").forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const touchEffect = (e) => {
      const touch = e.touches[0];
      const newRipple = { x: touch.clientX, y: touch.clientY, id: Date.now() };
      setRipples((prevRipples) => [...prevRipples, newRipple]);

      setTimeout(() => {
        setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== newRipple.id));
      }, 600);
    };

    const handleTouchHover = (e) => {
      const target = e.target.closest(".hover-card");
      if (!target) return;

      // Simulate hover effect on mobile
      target.classList.add("hover-active");

      // Remove hover effect after 1 second
      setTimeout(() => {
        target.classList.remove("hover-active");
      }, 1000);
    };

    document.addEventListener("touchstart", touchEffect, { passive: true });
    document.addEventListener("touchstart", handleTouchHover, { passive: true });

    return () => {
      document.removeEventListener("touchstart", touchEffect);
      document.removeEventListener("touchstart", handleTouchHover);
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <>
        {ripples.map((ripple) => (
          <Ripple key={ripple.id} style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }} />
        ))}
      </>
    );
  }

  return (
    <CursorWrapper>
      <CursorRing style={{ left: `${trail.x}px`, top: `${trail.y}px` }} isHovering={isHovering} />
      <CursorDot style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    </CursorWrapper>
  );
};

export default CustomCursor;

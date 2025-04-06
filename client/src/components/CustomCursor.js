import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  position: fixed;
  pointer-events: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--accent-color);
  mix-blend-mode: difference;
  opacity: 0.7;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: width 0.3s, height 0.3s, opacity 0.3s;
  box-shadow: 0 0 10px var(--accent-color), 0 0 20px var(--accent-color);
  
  &.hover {
    width: 30px;
    height: 30px;
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid var(--accent-color);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Ring = styled.div`
  position: fixed;
  pointer-events: none;
  width: 40px;
  height: 40px;
  border: 1px solid var(--accent-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 9998;
  transition: all 0.15s ease-out;
  opacity: 0.5;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, input, [role="button"], [data-cursor="hover"]').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  return (
    <>
      <CursorDot 
        className={`${clicked ? 'clicked' : ''} ${linkHovered ? 'hover' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: hidden ? 0 : 0.7 
        }}
      />
      <Ring 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: hidden ? 0 : 0.4,
          width: clicked ? '25px' : linkHovered ? '55px' : '40px',
          height: clicked ? '25px' : linkHovered ? '55px' : '40px',
          borderWidth: linkHovered ? '2px' : '1px',
          borderColor: linkHovered ? 'white' : 'var(--accent-color)'
        }}
      />
    </>
  );
};

export default CustomCursor; 
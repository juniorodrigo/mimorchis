import React, { useEffect, useRef } from 'react';

const FloatingHearts: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 6000);
    };

    const interval = setInterval(() => {
      createHeart();
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="floating-hearts" />;
};

export default FloatingHearts;
import React, { useEffect, useRef } from 'react';

/**
 * Função que cria e gerencia o fundo animado
 * @returns {JSX.Element} Componente de fundo animado
 */
const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    /**
     * Cria uma nova partícula no container
     * @returns {void}
     */
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'absolute bg-white rounded-full';
      
      const size = Math.random() * 3 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      resetParticle(particle);
      container.appendChild(particle);
      animateParticle(particle);
    }

    /**
     * Reseta a posição de uma partícula
     * @param {HTMLElement} particle - Elemento da partícula
     * @returns {Object} Posição inicial da partícula
     */
    function resetParticle(particle) {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      
      return { x: posX, y: posY };
    }

    /**
     * Anima uma partícula com movimento suave
     * @param {HTMLElement} particle - Elemento da partícula
     * @returns {void}
     */
    function animateParticle(particle) {
      const pos = resetParticle(particle);
      const duration = Math.random() * 8 + 8;
      const delay = Math.random() * 3;
      
      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.2;
        
        const moveX = pos.x + (Math.random() * 15 - 7.5);
        const moveY = pos.y - Math.random() * 20;
        
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        
        setTimeout(() => animateParticle(particle), duration * 1000);
      }, delay * 1000);
    }

    /**
     * Manipula o evento de clique para criar efeito de explosão
     * @param {MouseEvent} e - Evento de clique
     * @returns {void}
     */
    const handleClick = (e) => {
      const clickX = (e.clientX / window.innerWidth) * 100;
      const clickY = (e.clientY / window.innerHeight) * 100;
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute bg-white/60 rounded-full';
        
        const size = Math.random() * 4 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${clickX}%`;
        particle.style.top = `${clickY}%`;
        particle.style.opacity = '0.6';
        
        container.appendChild(particle);
        
        // Animação de explosão
        setTimeout(() => {
          particle.style.transition = 'all 1s ease-out';
          const angle = (Math.random() * Math.PI * 2);
          const distance = Math.random() * 20 + 10;
          const moveX = clickX + Math.cos(angle) * distance;
          const moveY = clickY + Math.sin(angle) * distance;
          
          particle.style.left = `${moveX}%`;
          particle.style.top = `${moveY}%`;
          particle.style.opacity = '0';
          
          setTimeout(() => particle.remove(), 1000);
        }, 10);
      }
    };

    /**
     * Manipula o movimento do mouse para criar partículas
     * @param {MouseEvent} e - Evento de movimento do mouse
     * @returns {void}
     */
    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;
      
      const particle = document.createElement('div');
      particle.className = 'absolute bg-white/60 rounded-full';
      
      const size = Math.random() * 4 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';
      
      container.appendChild(particle);
      
      setTimeout(() => {
        particle.style.transition = 'all 1.5s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 8 - 4)}%`;
        particle.style.top = `${mouseY + (Math.random() * 8 - 4)}%`;
        particle.style.opacity = '0';
        
        setTimeout(() => particle.remove(), 1500);
      }, 10);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute w-[40vw] h-[40vw] rounded-full blur-[60px] bg-[linear-gradient(40deg,#20423220,#01AD5D30)] -top-[10%] -left-[10%] [animation:float1_15s_ease-in-out_infinite_alternate]" />
      <div className="absolute w-[45vw] h-[45vw] rounded-full blur-[60px] bg-[linear-gradient(240deg,#20423220,#01AD5D30)] -bottom-[20%] -right-[10%] [animation:float2_18s_ease-in-out_infinite_alternate]" />
      <div className="absolute w-[30vw] h-[30vw] rounded-full blur-[60px] bg-[linear-gradient(120deg,#20423220,#01AD5D20)] top-[60%] left-[20%] [animation:float3_20s_ease-in-out_infinite_alternate]" />
      
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
};

export default AnimatedBackground; 
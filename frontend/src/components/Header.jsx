import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-blue-950 mt-5 rounded">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Animated Background with enhanced gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 animate-pulse"></div>
        {/* Enhanced white gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.1)_25%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
        
        {/* Animated waves */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
          <div className="absolute inset-0 animate-wave-slow">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-full w-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white/20" />
            </svg>
          </div>
          <div className="absolute inset-0 animate-wave-fast opacity-50">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-full w-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white/10" />
            </svg>
          </div>
        </div>
      </div>

      {/* Glass Overlay with enhanced effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/40 to-transparent backdrop-blur-[2px]"></div>

      {/* Content Container */}
      <div className="relative z-10 px-6 py-12 text-center">
        {/* Main Title */}
        <div className="group relative perspective-1000">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-2 tracking-tighter hover:tracking-normal transition-all duration-500">
            <span className="block transform transition-transform duration-300 mb-2 hover:rotate-y-12">
              Welcome to
            </span>
            <span className="relative inline-block group-hover:rotate-y-12 transition-transform duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></span>
              <span className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
                E-Shaurya
              </span>
            </span>
          </h1>
        </div>

        {/* Animated Subtitle with typing effect */}
        <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto animate-fade-in-up overflow-hidden whitespace-nowrap">
          <span className="relative inline-block animate-typing">
            Empowering College Sports and Beyond!
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;

// Add these animations to your Tailwind config
/*
module.exports = {
  theme: {
    extend: {
      animation: {
        'wave-slow': 'wave 18s linear infinite',
        'wave-fast': 'wave 12s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'ripple': 'ripple 1s linear infinite',
        'pulse-slow': 'pulse 3s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.25' },
          '100%': { transform: 'scale(1.5)', opacity: '0' }
        }
      }
    }
  }
}
*/
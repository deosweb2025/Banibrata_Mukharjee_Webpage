import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { siteData } from '../data/siteData';

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % siteData.hero.images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial state
    gsap.set(bgRef.current, { scale: 1.1 });
    
    tl.to(bgRef.current, {
      scale: 1,
      duration: 2,
      ease: 'power3.out'
    })
    .fromTo(contentRef.current.children, 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out' },
      "-=1.5"
    );

    // Parallax on scroll
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      } 
    });

  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100svh] flex flex-col justify-start md:justify-center overflow-hidden bg-[var(--color-brand-dark)] pt-20 pb-48 md:pt-32 md:pb-24">
      {/* Decorative background gradients for desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--color-brand-primary)] opacity-5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--color-brand-accent)] opacity-5 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex-grow flex flex-col justify-start md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Desktop Image Card - Hidden on mobile */}
          <div className="hidden md:block w-full h-[380px] lg:h-[460px] relative p-[2px] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            {/* Spinning Snake Border */}
            <div 
              className="absolute inset-[-50%] animate-[spin_5s_linear_infinite] z-0 pointer-events-none"
              style={{ background: 'conic-gradient(from 0deg, transparent 70%, var(--color-brand-accent) 100%)' }}
            />
            
            {/* Inner Content */}
            <div className="relative z-10 w-full h-full bg-[var(--color-brand-dark)] rounded-[10px] overflow-hidden">
              <div ref={bgRef} className="absolute inset-[-15%] w-[130%] h-[130%]">
                {siteData.hero.images.map((img, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </div>
              {/* Subtle gradient overlay to make it look premium inside the card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 via-transparent to-transparent z-10 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT SIDE: Text Content (and Mobile Image) */}
          <div className="max-w-3xl md:max-w-none flex flex-col justify-center items-start" ref={contentRef}>
            {/* Eyebrow with Snake Animation */}
            <div className="relative p-[1px] overflow-hidden rounded-sm mb-4 md:mb-5 inline-block">
              {/* Spinning Snake Border */}
              <div 
                className="absolute inset-[-250%] animate-[spin_3s_linear_infinite] z-0"
                style={{ background: 'conic-gradient(from 0deg, transparent 70%, var(--color-brand-accent) 100%)' }}
              />
              {/* Inner Content */}
              <div className="relative z-10 bg-[var(--color-brand-dark)] px-4 py-1.5 text-[var(--color-brand-accent)] text-xs font-semibold tracking-widest uppercase">
                {siteData.hero.eyebrow}
              </div>
            </div>
            
            {/* Large Font (Title) - Above image on mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-5 md:mb-6 text-balance">
              {siteData.hero.title}
            </h1>

            {/* Mobile Image Card - Visible only on mobile (DO NOT TOUCH) */}
            <div className="md:hidden w-full h-[320px] sm:h-[400px] mb-6 rounded-xl overflow-hidden shadow-2xl relative border border-white/10">
              {siteData.hero.images.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Banibrata Mukherjee ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover object-[75%_center] transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              {/* Subtle gradient overlay to make it look premium inside the card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 via-transparent to-transparent z-10" />
            </div>
            
            {/* Small Fonts (Description) - Below image on mobile */}
            <p 
              className="text-base sm:text-lg text-gray-300 mb-8 md:mb-8 max-w-2xl leading-relaxed text-balance"
              dangerouslySetInnerHTML={{ __html: siteData.hero.description }}
            />
            
            {/* Buttons */}
            <div className="flex flex-row gap-3 md:gap-4 w-full sm:w-auto mt-2">
              <a 
                href="#contact" 
                className="flex-1 sm:flex-none bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent)] text-white px-3 sm:px-6 md:px-7 py-3 text-center font-medium transition-colors duration-300 rounded-sm text-sm sm:text-base"
              >
                {siteData.hero.primaryCTA}
              </a>
              <a 
                href="#services" 
                className="flex-1 sm:flex-none bg-transparent border border-white/30 text-white hover:bg-white hover:text-[var(--color-brand-dark)] px-3 sm:px-6 md:px-7 py-3 text-center font-medium transition-colors duration-300 rounded-sm text-sm sm:text-base"
              >
                {siteData.hero.secondaryCTA}
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

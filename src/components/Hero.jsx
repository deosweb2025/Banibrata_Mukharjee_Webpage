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
    <section id="home" ref={heroRef} className="relative min-h-[100svh] md:h-[100svh] flex flex-col md:flex-row md:items-center overflow-hidden bg-[var(--color-brand-dark)] pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Desktop Background Image - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 z-0">
        <div ref={bgRef} className="absolute inset-0 origin-center">
          {siteData.hero.images.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        {/* Desktop horizontal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-dark)] via-[var(--color-brand-dark)]/80 to-transparent/30" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 md:pt-20 flex-grow flex flex-col justify-center">
        <div className="max-w-3xl" ref={contentRef}>
          {/* Eyebrow */}
          <div className="inline-block px-3 py-1 mb-4 md:mb-6 border border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] text-xs md:text-sm font-semibold tracking-widest uppercase bg-[var(--color-brand-dark)]/50 backdrop-blur-sm">
            {siteData.hero.eyebrow}
          </div>
          
          {/* Large Font (Title) - Above image on mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 md:mb-6 text-balance">
            {siteData.hero.title}
          </h1>

          {/* Mobile Image Card - Visible only on mobile */}
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
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl leading-relaxed text-balance"
            dangerouslySetInnerHTML={{ __html: siteData.hero.description }}
          />
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a 
              href="#contact" 
              className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent)] text-white px-6 md:px-8 py-3 md:py-4 text-center font-medium transition-colors duration-300 rounded-sm"
            >
              {siteData.hero.primaryCTA}
            </a>
            <a 
              href="#services" 
              className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-[var(--color-brand-dark)] px-6 md:px-8 py-3 md:py-4 text-center font-medium transition-colors duration-300 rounded-sm"
            >
              {siteData.hero.secondaryCTA}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

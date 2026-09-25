import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(
      gridRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-brand-light)]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div ref={headerRef} className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-[var(--color-brand-primary)] font-bold tracking-widest uppercase text-sm mb-4">
            Practice Areas
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-[var(--color-brand-dark)] leading-tight">
            Comprehensive Valuation &amp; Engineering Services
          </h3>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {siteData.services.map((service, index) => (
            <div 
              key={service.id} 
              className="relative p-[2px] overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Spinning Snake Border */}
              <div 
                className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] z-0"
                style={{ background: 'conic-gradient(from 0deg, transparent 70%, var(--color-brand-accent) 100%)' }}
              />

              {/* Inner Card Content */}
              <div className="relative z-10 bg-white h-full p-8 border-t-4 border-transparent">
                <div className="text-[var(--color-brand-accent)] font-serif text-4xl mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 origin-left transition-all duration-500">
                  0{index + 1}
                </div>
                <h4 className="text-xl font-bold text-[var(--color-brand-dark)] mb-4 leading-snug">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

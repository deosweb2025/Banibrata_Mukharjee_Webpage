import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

import certificateImg from '../assets/images/certificate.jpg';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    });

    tl.fromTo(
      textRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
    )
    .fromTo(
      imageRef.current,
      { x: 30, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
      "-=0.6"
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/2" ref={textRef}>
            <h2 className="text-[var(--color-brand-primary)] font-bold tracking-widest uppercase text-sm mb-4">
              About The Authority
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif text-[var(--color-brand-dark)] mb-8 leading-tight">
              {siteData.about.title}
            </h3>
            <p 
              className="text-lg text-gray-600 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: siteData.about.description }}
            />
            <div className="mt-10 bg-[var(--color-brand-light)] p-6 border-l-4 border-[var(--color-brand-accent)] shadow-sm">
              <h4 className="text-lg font-serif font-bold text-[var(--color-brand-dark)] mb-4">
                Professional Credentials
              </h4>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img 
                  src={certificateImg} 
                  alt="Fellow of The Institution of Engineers (India)" 
                  className="w-32 sm:w-48 h-auto object-cover border border-gray-200 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => window.open(certificateImg, '_blank')}
                  title="Click to view certificate"
                />
                <div>
                  <p className="text-[var(--color-brand-primary)] font-bold mb-2">
                    Fellow of The Institution of Engineers (India)
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Elected as Fellow on May 5th, 2011.
                  </p>
                  <p className="text-sm text-gray-600">
                    A prestigious recognition of exceptional engineering expertise, granting the authority and charter to act as an Engineer Commissioner and Valuer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div 
              ref={imageRef}
              className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 bg-[var(--color-brand-primary)] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 z-0" />
              <img 
                src={siteData.about.image} 
                alt="Banibrata Mukherjee" 
                className="relative z-10 w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

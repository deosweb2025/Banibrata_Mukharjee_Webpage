import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo(
      rightRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-[var(--color-brand-dark)] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Header & Intro */}
          <div className="lg:w-1/3" ref={leftRef}>
            <h2 className="text-[var(--color-brand-accent)] font-bold tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              Schedule a Consultation
            </h3>
            <p className="text-gray-400 leading-relaxed mb-10">
              For judicial valuations, property partition, or chartered engineering services, please contact us to discuss your requirements.
            </p>
            
            <div className="space-y-6">
              <a href={`tel:${siteData.contact.phone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-[var(--color-brand-accent)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <div className="text-lg font-medium tracking-wide group-hover:text-[var(--color-brand-accent)] transition-colors">{siteData.contact.phone}</div>
                </div>
              </a>
              
              <a href={`mailto:${siteData.contact.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center text-[var(--color-brand-accent)] group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <div className="text-lg font-medium tracking-wide group-hover:text-[var(--color-brand-accent)] transition-colors">{siteData.contact.email}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="lg:w-2/3" ref={rightRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteData.locations.map((loc, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition-colors">
                  <div className="text-[var(--color-brand-accent)] mb-6">
                    <MapPin size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-4">{loc.title}</h4>
                  <p className="text-gray-400 leading-relaxed mb-8 min-h-[80px]">
                    {loc.address}
                  </p>
                  <a 
                    href={loc.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white hover:text-[var(--color-brand-accent)] transition-colors"
                  >
                    VIEW ON MAP <span className="text-lg leading-none">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

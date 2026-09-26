import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Scale, Landmark, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = {
  title: "Why Choose Our Firm",
  subtitle: "A legacy of trust, precision, and judicial authority",
  features: [
    {
      id: 1,
      title: "Judicial Authority",
      description: "Officially recognized by the Alipore Court as an Engineer Commissioner.",
      icon: <Scale className="w-7 h-7 text-[var(--color-brand-accent)]" />
    },
    {
      id: 2,
      title: "Government Approved",
      description: "Registered and approved for all official government and taxation valuation requirements.",
      icon: <Landmark className="w-7 h-7 text-[var(--color-brand-accent)]" />
    },
    {
      id: 3,
      title: "Litigation Specialists",
      description: "Unmatched expertise in handling complex litigated and partitioned properties.",
      icon: <Shield className="w-7 h-7 text-[var(--color-brand-accent)]" />
    },
    {
      id: 4,
      title: "Decades of Trust",
      description: "Serving Kolkata with an impeccable record of accurate and unbiased technical valuations.",
      icon: <Award className="w-7 h-7 text-[var(--color-brand-accent)]" />
    }
  ]
};

const Expertise = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[var(--color-brand-dark)] text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-brand-primary)] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-brand-accent)] opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-[var(--color-brand-accent)] font-bold tracking-widest uppercase text-sm mb-4">
            {expertiseData.title}
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            {expertiseData.subtitle}
          </h3>
          <div className="w-24 h-1 bg-[var(--color-brand-accent)] mx-auto opacity-50" />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {expertiseData.features.map((feature) => (
            <div 
              key={feature.id} 
              className="relative p-[1px] overflow-hidden rounded-sm hover:-translate-y-2 transition-transform duration-500 group shadow-lg"
            >
              {/* Spinning Snake Border */}
              <div 
                className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] z-0"
                style={{ background: 'conic-gradient(from 0deg, transparent 70%, var(--color-brand-accent) 100%)' }}
              />

              {/* Inner Card Content (Solid dark background to hide inner part of gradient) */}
              <div className="relative z-10 h-full bg-[#131b2f] p-8">
                <div className="w-14 h-14 bg-black/40 border border-white/10 flex items-center justify-center rounded-full mb-6 group-hover:scale-110 group-hover:border-[var(--color-brand-accent)] transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 font-serif text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

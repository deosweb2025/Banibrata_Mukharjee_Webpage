import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.classList.add('lightbox-open');
    } else {
      document.body.classList.remove('lightbox-open');
    }
  }, [selectedImage]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(siteData.gallery[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % siteData.gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(siteData.gallery[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + siteData.gallery.length) % siteData.gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(siteData.gallery[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-[var(--color-brand-primary)] font-bold tracking-widest uppercase text-sm mb-4">
            Gallery & Credentials
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-[var(--color-brand-dark)] leading-tight">
            Professional Portfolio
          </h3>
        </div>

        <div 
          ref={gridRef} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {siteData.gallery.map((img, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square cursor-pointer overflow-hidden group bg-gray-100"
            >
              <div className="absolute inset-0 bg-[var(--color-brand-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img 
                src={img} 
                alt={`Gallery image ${index + 1}`} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-50"
              aria-label="Previous"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl"
              />
            </motion.div>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-50"
              aria-label="Next"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

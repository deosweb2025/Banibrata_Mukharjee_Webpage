import React from 'react';
import { siteData } from '../data/siteData';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[var(--color-brand-primary)] text-white flex items-center justify-center font-serif text-xl font-bold rounded-sm">
                {siteData.company.logo}
              </div>
              <div className="font-serif font-bold text-lg leading-tight">
                Banibrata<br />Mukherjee
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              {siteData.company.description}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-[var(--color-brand-accent)] transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 font-serif tracking-wide">Legal</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Government Approved Valuer</li>
              <li className="text-gray-400">Chartered Engineer</li>
              <li className="text-gray-400">Alipore Court Commissioner</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 mb-8 border-t border-white/10 text-xs text-gray-500 leading-relaxed max-w-4xl">
          <h5 className="font-bold mb-2">About Our Services</h5>
          <p>
            Banibrata Mukherjee is a highly trusted <strong className="text-[var(--color-brand-accent)] font-semibold">Government approved property valuer in Kolkata</strong>. With extensive experience as a <strong className="text-[var(--color-brand-accent)] font-semibold">Valuer of Judiciary</strong>, we specialize in the accurate assessment of <strong className="text-[var(--color-brand-accent)] font-semibold">litigated properties and partition valuation</strong>. We proudly serve as an official <strong className="text-[var(--color-brand-accent)] font-semibold">Engineer commissioner and Valuer ALIPORE court</strong>, delivering certified chartered engineering and judicial valuation services with unmatched integrity and precision.
          </p>
        </div>

        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteData.company.name}. All rights reserved.</p>
          <p className="flex items-center flex-wrap justify-center">
            Designed & Developed by 
            <a 
              href="https://www.teamdeoskolkata.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service 
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

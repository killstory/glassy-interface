import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import local gallery images
import amsFundCover from '@/assets/ams-fund-cover.png';
import spectreLabsCover from '@/assets/spectre-labs-cover.png';
import d1ckdaoDeSciSummit from '@/assets/d1ckdao-desci-summit.jpeg';
import grvtEsport from '@/assets/grvt-esport-competition.jpeg';
import talusSuifest from '@/assets/talus-suifest-team.jpeg';
import aiatTeam from '@/assets/aiat-team.jpg';
import srichandCover from '@/assets/srichand-cover.jpg';
import tecCertificate from '@/assets/tec-certificate.png';
import forruVolunteer1 from '@/assets/forru-volunteer-1.jpg';
import mahidolPlenary from '@/assets/mahidol-plenary-award.png';

// Gallery images with captions and slugs
const galleryItems = [
  { 
    image: amsFundCover,
    caption: "AMS Fund - Chief Investment Officer",
    slug: "ams-fund"
  },
  { 
    image: spectreLabsCover,
    caption: "Spectre Labs - Co-Founder",
    slug: "spectre-labs"
  },
  { 
    image: d1ckdaoDeSciSummit,
    caption: "D1ckDAO - DeSci Summit 2024",
    slug: "d1ckdao"
  },
  { 
    image: grvtEsport,
    caption: "GRVT - Esport Competition",
    slug: "grvt-exchange"
  },
  { 
    image: talusSuifest,
    caption: "Talus Labs - SuiFest Team",
    slug: "talus-labs"
  },
  { 
    image: aiatTeam,
    caption: "AIAT - Research Team",
    slug: "aiat"
  },
  { 
    image: srichandCover,
    caption: "Srichand United Dispensary",
    slug: "srichand"
  },
  { 
    image: tecCertificate,
    caption: "TEC - Digital Marketing Certificate",
    slug: "tec"
  },
  { 
    image: forruVolunteer1,
    caption: "FORRU - Volunteer Staff",
    slug: "forest-restoration"
  },
  { 
    image: mahidolPlenary,
    caption: "Mahidol - Plenary Lecture Award",
    slug: "mahidol-university"
  }
];

export const ImageSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Triple duplicate for seamless loop
  const duplicatedItems = [...galleryItems, ...galleryItems, ...galleryItems];

  return (
    <div className="w-full py-12 overflow-hidden bg-background border-y border-border">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .slider-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="slider-container">
        <div className="flex animate-marquee" style={{ width: 'fit-content' }}>
          {duplicatedItems.map((item, i) => (
            <Link
              key={`gallery-${i}`}
              to={`/experience/${item.slug}`}
              className="flex-shrink-0 w-[280px] md:w-[350px] h-[180px] md:h-[240px] mx-2 cursor-scale block"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
                
                {/* Gradient overlay for caption readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                {/* Caption on hover */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-0 left-0 right-0 p-4"
                    >
                      <p className="text-foreground font-medium text-sm md:text-base">
                        {item.caption}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface ContinentCat {
  id: string;
  continent: string;
  city: string;
  category: string;
  title: string;
  position: [number, number, number];
  badgeColor: string;
}

const CONTINENT_CATS: ContinentCat[] = [
  { id: 'c1', continent: 'Asia (India)', city: 'Bengaluru', category: 'Schools & K-12', title: 'National Curiosity League', position: [1.6, 0.8, 1.2], badgeColor: '#30B2E7' },
  { id: 'c2', continent: 'Middle East', city: 'Dubai', category: 'Finance Festival', title: 'Future Minds Knowledge Fest', position: [1.2, 1.1, 1.5], badgeColor: '#FDB913' },
  { id: 'c3', continent: 'Europe', city: 'London', category: 'Colleges & Fests', title: 'Inter-College Trivia League', position: [0.2, 1.8, 1.1], badgeColor: '#75B543' },
  { id: 'c4', continent: 'Southeast Asia', city: 'Singapore', category: 'Youth Science', title: 'International Youth Trivia', position: [2.0, 0.2, 0.8], badgeColor: '#30B2E7' },
  { id: 'c5', continent: 'North America', city: 'New York', category: 'Corporate Offsites', title: 'Global Curiosity League', position: [-1.4, 1.4, 1.1], badgeColor: '#FDB913' },
  { id: 'c6', continent: 'Africa', city: 'Nairobi', category: 'Community Trivia', title: 'Neighborhood Curiosity Fest', position: [0.5, -0.6, 1.9], badgeColor: '#75B543' },
];

function EarthGlobeWithQT() {
  const globeGroupRef = useRef<THREE.Group>(null);
  const [hoveredCat, setHoveredCat] = useState<ContinentCat | null>(null);

  // Slow continuous rotation
  useFrame((state, delta) => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={globeGroupRef}>
      {/* Real Earth Ocean Sphere (Blue #30B2E7) */}
      <Sphere args={[2.2, 64, 64]}>
        <meshStandardMaterial
          color="#30B2E7"
          roughness={0.4}
          metalness={0.1}
        />
      </Sphere>

      {/* Earth Landmass Continents Mesh Layer */}
      <Sphere args={[2.22, 64, 64]}>
        <meshStandardMaterial
          color="#75B543" // Brand Green for Earth Continents
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* QT Cat Pins on Continents */}
      {CONTINENT_CATS.map((cat) => (
        <group key={cat.id} position={cat.position}>
          
          {/* HTML QT Cat Mascot Marker */}
          <Html distanceFactor={7} position={[0, 0, 0]}>
            <div
              onMouseEnter={() => setHoveredCat(cat)}
              onMouseLeave={() => setHoveredCat(null)}
              className="relative cursor-pointer group flex flex-col items-center select-none"
            >
              {/* Cute Black QT Kitty Marker SVG */}
              <div className="w-12 h-12 bg-black rounded-full border-2 border-white flex items-center justify-center shadow-2xl hover:scale-125 transition-transform">
                <svg viewBox="0 0 100 100" className="w-8 h-8">
                  {/* Cat ears */}
                  <polygon points="20,35 32,12 45,30" fill="#FFFFFF" />
                  <polygon points="55,30 68,12 80,35" fill="#FFFFFF" />
                  {/* Head */}
                  <circle cx="50" cy="55" r="30" fill="#FFFFFF" />
                  {/* Eyes */}
                  <circle cx="38" cy="50" r="6" fill="#000000" />
                  <circle cx="62" cy="50" r="6" fill="#000000" />
                  {/* Tie */}
                  <polygon points="50,65 54,75 50,85 46,75" fill="#FDB913" />
                </svg>
              </div>

              {/* Pulsing ring */}
              <span className="absolute -inset-2 rounded-full bg-[#FDB913]/50 animate-ping pointer-events-none" />

              {/* Continent Pin Label */}
              <span className="mt-1 px-2 py-0.5 rounded-full bg-black text-white text-[9px] font-black whitespace-nowrap shadow border border-white">
                🐱 {cat.city}
              </span>
            </div>
          </Html>

          {/* HTML Hover Card */}
          {hoveredCat?.id === cat.id && (
            <Html distanceFactor={7} position={[0, 0.4, 0]}>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="w-60 bg-white rounded-2xl p-4 shadow-2xl border-2 border-black text-black pointer-events-none z-50"
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="px-2 py-0.5 rounded-full text-[9px] font-black text-white uppercase"
                    style={{ backgroundColor: cat.badgeColor }}
                  >
                    {cat.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">{cat.continent}</span>
                </div>
                <h4 className="text-sm font-black font-causten-black">{cat.title}</h4>
                <p className="text-[11px] font-semibold text-slate-700 mt-1 font-causten-body">
                  QT bringing curiosity & active quizzing to {cat.city}!
                </p>
              </motion.div>
            </Html>
          )}

        </group>
      ))}
    </group>
  );
}

export default function CuriosityGlobe() {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
      {/* Soft Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#30B2E7]/15 via-[#FDB913]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 50 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
          <EarthGlobeWithQT />
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          rotateSpeed={0.6}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}

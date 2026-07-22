'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface DottedContinentPin {
  id: string;
  continent: string;
  city: string;
  title: string;
  category: string;
  position: [number, number, number];
}

const CONTINENT_PINS: DottedContinentPin[] = [
  { id: 'p1', continent: 'Asia (India)', city: 'Bengaluru', category: 'Schools & K-12', title: 'National Curiosity League', position: [1.6, 0.7, 1.3] },
  { id: 'p2', continent: 'Middle East', city: 'Dubai', category: 'Finance Festival', title: 'Future Minds Knowledge Fest', position: [1.1, 1.0, 1.6] },
  { id: 'p3', continent: 'Europe', city: 'London', category: 'Colleges & Fests', title: 'Inter-College Trivia League', position: [0.1, 1.8, 1.1] },
  { id: 'p4', continent: 'Southeast Asia', city: 'Singapore', category: 'Youth Science', title: 'International Youth Trivia', position: [2.0, 0.2, 0.7] },
  { id: 'p5', continent: 'North America', city: 'New York', category: 'Corporate Offsites', title: 'Global Curiosity League', position: [-1.4, 1.4, 1.0] },
  { id: 'p6', continent: 'Africa', city: 'Nairobi', category: 'Community Trivia', title: 'Neighborhood Curiosity Fest', position: [0.5, -0.6, 1.9] },
];

function DottedEarthSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredPin, setHoveredPin] = useState<DottedContinentPin | null>(null);

  // Slow continuous rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  // Generate dense dotted Earth sphere grid (matching the exact dot-density reference image)
  const particleCount = 1800;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / particleCount);
    const theta = Math.sqrt(particleCount * Math.PI) * phi;
    const r = 2.2;
    positions[i * 3] = r * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return (
    <group ref={groupRef}>
      {/* Dark Inner Base Globe Sphere */}
      <Sphere args={[2.18, 64, 64]}>
        <meshStandardMaterial
          color="#000000"
          roughness={0.8}
        />
      </Sphere>

      {/* Dotted White Earth Continent Particles (Matching Reference) */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color="#FFFFFF"
          transparent
          opacity={0.85}
        />
      </points>

      {/* Glowing Yellow (#FDB913) Pin Nodes with Concentric Pulsing Rings */}
      {CONTINENT_PINS.map((pin) => (
        <group key={pin.id} position={pin.position}>
          {/* Glowing Yellow Node Center */}
          <mesh
            onPointerOver={() => setHoveredPin(pin)}
            onPointerOut={() => setHoveredPin(null)}
          >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#FDB913"
              emissive="#FDB913"
              emissiveIntensity={1.5}
            />
          </mesh>

          {/* Concentric Pulsing Ring HTML Overlay */}
          <Html distanceFactor={7} position={[0, 0, 0]}>
            <div
              onMouseEnter={() => setHoveredPin(pin)}
              onMouseLeave={() => setHoveredPin(null)}
              className="relative cursor-pointer group flex flex-col items-center select-none"
            >
              {/* Concentric Yellow Pulse Rings matching reference */}
              <span className="absolute -inset-4 rounded-full border border-[#FDB913] animate-ping opacity-75 pointer-events-none" />
              <span className="absolute -inset-8 rounded-full border border-[#FDB913]/40 animate-ping opacity-50 pointer-events-none" />
              
              {/* QT Cat Marker Label */}
              <span className="mt-4 px-2.5 py-1 rounded-full bg-black text-[#FDB913] text-[9px] font-black whitespace-nowrap shadow border border-[#FDB913] flex items-center gap-1 font-causten-black">
                🐱 {pin.city}
              </span>
            </div>
          </Html>

          {/* Hover Card Popup */}
          {hoveredPin?.id === pin.id && (
            <Html distanceFactor={7} position={[0, 0.4, 0]}>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="w-60 bg-white rounded-2xl p-4 shadow-2xl border-2 border-black text-black pointer-events-none z-50"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black text-black bg-[#FDB913] uppercase">
                    {pin.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-600">{pin.continent}</span>
                </div>
                <h4 className="text-sm font-black font-causten-black">{pin.title}</h4>
                <p className="text-[11px] font-semibold text-slate-700 mt-1 font-causten-body">
                  QT active quizzing & curiosity experience in {pin.city}!
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
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center flex-col">
      {/* Soft Atmosphere Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#30B2E7]/10 via-[#FDB913]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 50 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
          <DottedEarthSphere />
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          rotateSpeed={0.6}
          dampingFactor={0.05}
        />
      </Canvas>

      <div className="text-center mt-2 z-10">
        <span className="text-xs font-black text-slate-700 font-causten-body">
          Drag to explore — quizzes on all 7 continents 🌍
        </span>
      </div>
    </div>
  );
}

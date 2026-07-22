'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const World = dynamic(() => import('@/components/ui/globe').then((m) => m.World), {
  ssr: false,
});

export default function CuriosityGlobe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: '#000000',
    showAtmosphere: true,
    atmosphereColor: '#30B2E7',
    atmosphereAltitude: 0.15,
    emissive: '#000000',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: '#FFFFFF',
    ambientLight: '#30B2E7',
    directionalLeftLight: '#FFFFFF',
    directionalTopLight: '#FFFFFF',
    pointLight: '#FDB913',
    arcTime: 1000,
    arcLength: 0.9,
    rings: 2,
    maxRings: 3,
    initialPosition: { lat: 20.5937, lng: 78.9629 }, // Centered over India / Asia
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const sampleArcs = [
    // Bengaluru to Dubai
    { order: 1, startLat: 12.9716, startLng: 77.5946, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.2, color: '#FDB913' },
    // Bengaluru to Singapore
    { order: 2, startLat: 12.9716, startLng: 77.5946, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.15, color: '#30B2E7' },
    // Bengaluru to London
    { order: 3, startLat: 12.9716, startLng: 77.5946, endLat: 51.5074, endLng: -0.1278, arcAlt: 0.3, color: '#75B543' },
    // London to New York
    { order: 4, startLat: 51.5074, startLng: -0.1278, endLat: 40.7128, endLng: -74.0060, arcAlt: 0.25, color: '#FDB913' },
    // Dubai to Nairobi
    { order: 5, startLat: 25.2048, startLng: 55.2708, endLat: -1.2921, endLng: 36.8219, arcAlt: 0.2, color: '#30B2E7' }
  ];

  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center flex-col">
      {/* Soft Brand Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#30B2E7]/10 via-[#FDB913]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="w-full h-full relative z-10">
        <World globeConfig={globeConfig} data={sampleArcs} />
      </div>

      <div className="text-center mt-2 z-10">
        <span className="text-xs font-black text-slate-700 font-causten-body">
          Drag to explore — quizzes across all continents 🌍
        </span>
      </div>
    </div>
  );
}

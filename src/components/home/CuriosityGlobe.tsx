'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface DottedGlobeNode {
  id: string;
  title: string;
  category: string;
  description: string;
  position: [number, number, number];
}

const CURIOSITY_NODES: DottedGlobeNode[] = [
  { id: 'n1', title: 'Current Affairs', category: 'Global Awareness', description: 'Weekly world events turned into active storytelling.', position: [1.6, 0.7, 1.3] },
  { id: 'n2', title: 'Finance for Kids', category: 'Life Skills', description: 'Budgeting games & money mindset challenges.', position: [1.1, 1.0, 1.6] },
  { id: 'n3', title: 'Science & Space', category: 'STEM', description: 'Mind-bending physics and cosmic riddles.', position: [0.1, 1.8, 1.1] },
  { id: 'n4', title: 'Critical Thinking', category: 'Logic', description: 'Socratic questioning & brain benders.', position: [2.0, 0.2, 0.7] },
  { id: 'n5', title: 'Public Speaking', category: 'Confidence', description: 'Stage quizzes that empower young speakers.', position: [-1.4, 1.4, 1.0] },
  { id: 'n6', title: 'Storytelling & Art', category: 'Creativity', description: 'Visual puzzles & creative expression.', position: [0.5, -0.6, 1.9] },
];

function PureDottedCuriosityGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<DottedGlobeNode | null>(null);

  // Smooth continuous rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  // Pure mathematical dotted sphere (No continents / no country shapes)
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

      {/* Pure Dotted Sphere Grid */}
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

      {/* Glowing Yellow Nodes with Concentric Rings */}
      {CURIOSITY_NODES.map((node) => (
        <group key={node.id} position={node.position}>
          {/* Glowing Yellow Node Center */}
          <mesh
            onPointerOver={() => setHoveredNode(node)}
            onPointerOut={() => setHoveredNode(null)}
          >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color="#FDB913"
              emissive="#FDB913"
              emissiveIntensity={1.5}
            />
          </mesh>

          {/* Concentric Rings Overlay */}
          <Html distanceFactor={7} position={[0, 0, 0]}>
            <div
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              className="relative cursor-pointer group flex flex-col items-center select-none"
            >
              <span className="absolute -inset-4 rounded-full border border-[#FDB913] animate-ping opacity-75 pointer-events-none" />
              <span className="absolute -inset-8 rounded-full border border-[#FDB913]/40 animate-ping opacity-50 pointer-events-none" />
            </div>
          </Html>

          {/* Hover Card Popup */}
          {hoveredNode?.id === node.id && (
            <Html distanceFactor={7} position={[0, 0.4, 0]}>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="w-60 bg-white rounded-2xl p-4 shadow-2xl border-2 border-black text-black pointer-events-none z-50"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black text-black bg-[#FDB913] uppercase font-causten-black">
                    {node.category}
                  </span>
                </div>
                <h4 className="text-sm font-black font-causten-black">{node.title}</h4>
                <p className="text-[11px] font-semibold text-slate-700 mt-1 font-causten-body">
                  {node.description}
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
          <PureDottedCuriosityGlobe />
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
          Drag to explore — curiosity nodes across the sphere 🌍
        </span>
      </div>
    </div>
  );
}

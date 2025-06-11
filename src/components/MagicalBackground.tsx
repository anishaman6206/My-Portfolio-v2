
import { Canvas } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingLeaf = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <circleGeometry args={[0.3, 6]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const FloatingIce = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.6 + position[1]) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.4]} />
        <meshBasicMaterial color="#B0E0E6" transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

const FloatingWaterDroplet = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.15]} />
        <meshBasicMaterial color="#87CEEB" transparent opacity={0.8} />
      </mesh>
    </Float>
  );
};

const Mountain = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  return (
    <mesh position={position} scale={[scale, scale * 1.5, scale]}>
      <coneGeometry args={[2, 4, 6]} />
      <meshBasicMaterial color="#654321" transparent opacity={0.3} />
    </mesh>
  );
};

const Tree = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Tree trunk */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 2]} />
        <meshBasicMaterial color="#8B4513" transparent opacity={0.4} />
      </mesh>
      {/* Tree leaves */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[1]} />
        <meshBasicMaterial color="#228B22" transparent opacity={0.5} />
      </mesh>
    </group>
  );
};

const River = () => {
  const riverRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (riverRef.current && riverRef.current.material instanceof THREE.MeshBasicMaterial) {
      riverRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <mesh ref={riverRef} position={[0, -8, -2]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[30, 3]} />
      <meshBasicMaterial color="#4682B4" transparent opacity={0.3} />
    </mesh>
  );
};

const Fireflies = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particles = new Float32Array(150 * 3);
  for (let i = 0; i < 150; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 30;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={150}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.15} color="#FFD700" transparent opacity={0.8} />
    </points>
  );
};

const MagicalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 2, 12] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} />
        
        {/* Stars and magical atmosphere */}
        <Stars radius={100} depth={50} count={8000} factor={4} saturation={0} fade speed={1} />
        
        {/* Mountains positioned on the ground plane - left and right */}
        <Mountain position={[-15, -6, -8]} scale={1.5} />
        <Mountain position={[15, -6, -8]} scale={1.5} />
        
        {/* Trees positioned on the ground plane - left and right */}
        <Tree position={[-8, -6, -2]} />
        <Tree position={[8, -6, -2]} />
        
        {/* Magical river */}
        <River />
        
        {/* Enhanced fireflies */}
        <Fireflies />
        
        {/* Floating magical leaves */}
        <FloatingLeaf position={[-8, 2, 2]} color="#228B22" />
        <FloatingLeaf position={[8, -1, 1]} color="#32CD32" />
        <FloatingLeaf position={[-5, -3, 3]} color="#90EE90" />
        <FloatingLeaf position={[6, 3, -1]} color="#98FB98" />
        <FloatingLeaf position={[0, 4, 2]} color="#ADFF2F" />
        <FloatingLeaf position={[-12, -2, 0]} color="#9ACD32" />
        
        {/* Floating ice crystals */}
        <FloatingIce position={[-6, 1, 3]} />
        <FloatingIce position={[4, -2, 1]} />
        <FloatingIce position={[-3, 5, -1]} />
        <FloatingIce position={[9, 2, 4]} />
        
        {/* Floating water droplets */}
        <FloatingWaterDroplet position={[-4, 3, 2]} />
        <FloatingWaterDroplet position={[7, 0, 3]} />
        <FloatingWaterDroplet position={[-9, -1, 1]} />
        <FloatingWaterDroplet position={[3, 4, -2]} />
        <FloatingWaterDroplet position={[-1, 2, 4]} />
        <FloatingWaterDroplet position={[11, 1, 0]} />
      </Canvas>
    </div>
  );
};

export default MagicalBackground;

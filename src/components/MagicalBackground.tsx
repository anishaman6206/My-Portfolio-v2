import { Canvas } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RealisticLeaf = ({ position, color, isMobile }: { position: [number, number, number], color: string, isMobile?: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.7 + position[1]) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.8;
    }
  });

  const leafSize = isMobile ? 0.25 : 0.4;
  const stemLength = isMobile ? 0.12 : 0.2;
  const lighterColor = new THREE.Color(color).lerp(new THREE.Color('#ffffff'), 0.4);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {/* Leaf shape using extruded geometry */}
        <group>
          {/* Main leaf body */}
          <mesh>
            <sphereGeometry args={[leafSize, 8, 6]} />
            <meshPhongMaterial 
              color={lighterColor} 
              transparent 
              opacity={0.4}
              shininess={30}
              specular={new THREE.Color(0x111111)}
            />
          </mesh>
          {/* Leaf stem */}
          <mesh position={[0, -leafSize * 0.75, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.015, 0.015, stemLength]} />
            <meshPhongMaterial 
              color="#D2B48C" 
              transparent
              opacity={0.5}
            />
          </mesh>
          {/* Leaf veins */}
          <mesh position={[0, 0, 0.01]}>
            <planeGeometry args={[leafSize * 1.5, leafSize * 2]} />
            <meshBasicMaterial 
              color={lighterColor}
              transparent
              opacity={0.15}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </mesh>
    </Float>
  );
};

const CrystalIce = ({ position, isMobile }: { position: [number, number, number], isMobile?: boolean }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.6 + position[1]) * 0.2;
    }
  });

  const crystalSize = isMobile ? 0.2 : 0.3;
  const spikeHeight = isMobile ? 0.2 : 0.3;
  const spikeRadius = isMobile ? 0.07 : 0.1;

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1}>
      <group ref={meshRef} position={position}>
        {/* Main crystal */}
        <mesh>
          <octahedronGeometry args={[crystalSize]} />
          <meshPhysicalMaterial 
            color="#F0F8FF"
            transparent
            opacity={0.3}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.95}
            thickness={0.5}
          />
        </mesh>
        {/* Crystal spikes */}
        <mesh position={[0, crystalSize + spikeHeight/2, 0]}>
          <coneGeometry args={[spikeRadius, spikeHeight, 6]} />
          <meshPhysicalMaterial 
            color="#F0F8FF"
            transparent
            opacity={0.4}
            roughness={0.05}
            metalness={0.05}
            clearcoat={1}
          />
        </mesh>
        <mesh position={[0, -(crystalSize + spikeHeight/2), 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[spikeRadius, spikeHeight, 6]} />
          <meshPhysicalMaterial 
            color="#F0F8FF"
            transparent
            opacity={0.4}
            roughness={0.05}
            metalness={0.05}
            clearcoat={1}
          />
        </mesh>
      </group>
    </Float>
  );
};

const WaterDroplet = ({ position, isMobile }: { position: [number, number, number], isMobile?: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const dropletSize = isMobile ? 0.12 : 0.2;
  const tipHeight = isMobile ? 0.1 : 0.15;
  const tipRadius = isMobile ? 0.05 : 0.08;

  return (
    <Float speed={3} rotationIntensity={0.3} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        {/* Water droplet shape */}
        <group>
          {/* Main droplet body */}
          <mesh scale={[1, 1.2, 1]}>
            <sphereGeometry args={[dropletSize, 16, 12]} />
            <meshPhysicalMaterial 
              color="#E6F3FF"
              transparent
              opacity={0.4}
              roughness={0}
              metalness={0}
              transmission={0.98}
              thickness={0.5}
              clearcoat={1}
              clearcoatRoughness={0}
            />
          </mesh>
          {/* Droplet tip */}
          <mesh position={[0, dropletSize * 1.25, 0]}>
            <coneGeometry args={[tipRadius, tipHeight, 8]} />
            <meshPhysicalMaterial 
              color="#E6F3FF"
              transparent
              opacity={0.4}
              roughness={0}
              transmission={0.98}
              thickness={0.3}
            />
          </mesh>
        </group>
      </mesh>
    </Float>
  );
};

const SnowMountain = ({ position, scale, isMobile }: { position: [number, number, number], scale: number, isMobile?: boolean }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const breathingScale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      const finalScale = isMobile ? scale * 0.7 : scale;
      meshRef.current.scale.set(finalScale * breathingScale, finalScale * 1.5 * breathingScale, finalScale * breathingScale);
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Mountain base */}
      <mesh>
        <coneGeometry args={[2, 4, 8]} />
        <meshPhongMaterial 
          color="#A0A0A0"
          shininess={10}
          transparent
          opacity={0.4}
        />
      </mesh>
      {/* Snow cap */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[1.2, 2, 8]} />
        <meshPhongMaterial 
          color="#FFFFFF"
          shininess={100}
          specular={new THREE.Color(0x222222)}
          transparent
          opacity={0.5}
        />
      </mesh>
      {/* Snow details */}
      <mesh position={[0.3, 0.8, 0.3]}>
        <sphereGeometry args={[0.2]} />
        <meshPhongMaterial 
          color="#F8F8FF" 
          shininess={50}
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh position={[-0.2, 1.2, 0.2]}>
        <sphereGeometry args={[0.15]} />
        <meshPhongMaterial 
          color="#F8F8FF" 
          shininess={50}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};

const MagicalTree = ({ position, isMobile }: { position: [number, number, number], isMobile?: boolean }) => {
  const treeRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (treeRef.current) {
      treeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  const trunkHeight = isMobile ? 1.8 : 2.5;
  const trunkRadius = isMobile ? 0.1 : 0.15;
  const foliageSize = isMobile ? 0.8 : 1.2;
  const smallFoliageSize = isMobile ? 0.5 : 0.8;

  return (
    <group ref={treeRef} position={position}>
      {/* Tree trunk with texture */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[trunkRadius, trunkRadius + 0.1, trunkHeight, 8]} />
        <meshPhongMaterial 
          color="#D2B48C"
          shininess={5}
          bumpScale={0.1}
          transparent
          opacity={0.5}
        />
      </mesh>
      {/* Main foliage */}
      <mesh position={[0, 0.8, 0]}>
        <sphereGeometry args={[foliageSize, 12, 8]} />
        <meshPhongMaterial 
          color="#90EE90"
          shininess={20}
          transparent
          opacity={0.4}
        />
      </mesh>
      {/* Additional foliage layers */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[smallFoliageSize, 10, 6]} />
        <meshPhongMaterial 
          color="#98FB98"
          transparent
          opacity={0.3}
        />
      </mesh>
      {/* Small branches */}
      <mesh position={[foliageSize * 0.67, 0.5, 0]} rotation={[0, 0, Math.PI/6]}>
        <cylinderGeometry args={[0.02, 0.03, 0.4]} />
        <meshPhongMaterial 
          color="#D2B48C"
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh position={[-foliageSize * 0.58, 0.3, 0.3]} rotation={[0, 0, -Math.PI/8]}>
        <cylinderGeometry args={[0.02, 0.03, 0.35]} />
        <meshPhongMaterial 
          color="#D2B48C"
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};

const RealisticRiver = () => {
  const riverRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (riverRef.current) {
      // Water surface animation
      if (riverRef.current.material instanceof THREE.MeshPhysicalMaterial) {
        riverRef.current.material.normalScale?.set(
          0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2,
          0.5 + Math.cos(state.clock.elapsedTime * 1.5) * 0.2
        );
        riverRef.current.material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
      }
    }
  });

  return (
    <group>
      {/* Main river surface */}
      <mesh ref={riverRef} position={[0, -10, -7]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[35, 4]} />
        <meshPhysicalMaterial 
          color="#87CEEB"
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.8}
          thickness={0.5}
          normalScale={new THREE.Vector2(0.5, 0.5)}
        />
      </mesh>
      
      {/* River bed details */}
      <mesh position={[0, -10, -4]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[35, 4]} />
        <meshPhongMaterial 
          color="#8B7355"
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Water ripples */}
      <mesh position={[-8, -8.4, -3]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.8, 16]} />
        <meshBasicMaterial 
          color="#B0E0E6"
          transparent
          opacity={0.2}
        />
      </mesh>
      <mesh position={[12, -8.4, -4.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.2, 16]} />
        <meshBasicMaterial 
          color="#B0E0E6"
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
};
const EnhancedFireflies = ({ isMobile }: { isMobile?: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const particleCount = isMobile ? 30 : 60;
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Animate individual fireflies
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          child.position.y += Math.sin(state.clock.elapsedTime * 2 + i) * 0.001;
          child.position.x += Math.cos(state.clock.elapsedTime * 1.5 + i) * 0.001;
          
          // Pulsing glow effect
          if (child.material instanceof THREE.MeshBasicMaterial) {
            const intensity = 0.4 + Math.sin(state.clock.elapsedTime * 3 + i) * 0.2;
            child.material.opacity = Math.max(0.2, intensity);
          }
        }
      });
    }
  });

  const fireflySize = isMobile ? 0.05 : 0.08;
  const glowSize = isMobile ? 0.1 : 0.15;

  const fireflies = [];
  for (let i = 0; i < particleCount; i++) {
    const position: [number, number, number] = [
      (Math.random() - 0.5) * (isMobile ? 20 : 30),
      (Math.random() - 0.5) * (isMobile ? 15 : 20),
      (Math.random() - 0.5) * (isMobile ? 20 : 30)
    ];
    
    fireflies.push(
      <mesh key={i} position={position}>
        <sphereGeometry args={[fireflySize, 8, 6]} />
        <meshBasicMaterial 
          color="#FFFACD" 
          transparent
          opacity={0.4}
        />
        {/* Glow effect */}
        <mesh>
          <sphereGeometry args={[glowSize, 8, 6]} />
          <meshBasicMaterial 
            color="#FFFACD" 
            transparent
            opacity={0.1}
          />
        </mesh>
      </mesh>
    );
  }

  return <group ref={groupRef}>{fireflies}</group>;
};

const MagicalBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });
      setIsMobile(width < 768);
    };
    
    // Initial setup
    updateDimensions();
    
    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // More precise camera positioning based on actual viewport
  const getCameraConfig = () => {
    const aspect = dimensions.width / dimensions.height;
    
    if (isMobile) {
      return {
        position: [0, 1, 8] as [number, number, number],
        fov: 75,
        aspect: aspect || 1
      };
    } else {
      return {
        position: [0, 2, 12] as [number, number, number],
        fov: 60,
        aspect: aspect || 1
      };
    }
  };

  // Don't render until we have dimensions
  if (dimensions.width === 0) {
    return <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 to-green-50" />;
  }

  const cameraConfig = getCameraConfig();

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas 
        camera={{ 
          position: cameraConfig.position,
          fov: cameraConfig.fov,
          aspect: cameraConfig.aspect,
          near: 0.1,
          far: 1000
        }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]} // Limit DPR for consistency
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.4} color="#FFF8DC" />
        <pointLight position={[-10, -10, -5]} intensity={0.2} color="#87CEEB" />
        
        {/* Enhanced stars */}
        <Stars 
          radius={100} 
          depth={50} 
          count={isMobile ? 4000 : 8000} 
          factor={6} 
          saturation={0} 
          fade 
          speed={1} 
        />
        
        {/* Snow-capped mountains - only show on desktop */}
        {!isMobile && <SnowMountain position={[-15, -6, -8]} scale={1.5} isMobile={isMobile} />}
        {!isMobile && <SnowMountain position={[15, -6, -8]} scale={1.5} isMobile={isMobile} />}
        
        {/* Magical trees - only show on desktop */}
        {!isMobile && <MagicalTree position={[-8, -6, -2]} isMobile={isMobile} />}
        {!isMobile && <MagicalTree position={[8, -6, -2]} isMobile={isMobile} />}
        
        {/* Realistic river flowing through the landscape - only show on desktop */}
        {!isMobile && <RealisticRiver />}
        
        {/* Enhanced fireflies */}
        <EnhancedFireflies isMobile={isMobile} />
        
        {/* Realistic floating leaves - significantly reduced */}
        <RealisticLeaf position={[-6, 1, 2]} color="#228B22" isMobile={isMobile} />
        <RealisticLeaf position={[6, -1, 1]} color="#32CD32" isMobile={isMobile} />
        {!isMobile && <RealisticLeaf position={[0, 3, 2]} color="#90EE90" isMobile={isMobile} />}
        
        {/* Crystal ice formations - significantly reduced */}
        <CrystalIce position={[-4, 2, 3]} isMobile={isMobile} />
        {!isMobile && <CrystalIce position={[5, -1, 1]} isMobile={isMobile} />}
        
        {/* Realistic water droplets - significantly reduced */}
        <WaterDroplet position={[-2, 4, 2]} isMobile={isMobile} />
        {!isMobile && <WaterDroplet position={[4, 1, 3]} isMobile={isMobile} />}
      </Canvas>
    </div>
  );
};

export default MagicalBackground;
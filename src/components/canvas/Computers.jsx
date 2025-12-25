import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Simple Tree Component
const Tree = ({ position, scale = 1 }) => {
  const baseY = -2.3; // Updated to match grass height
  return (
    <group position={position} scale={scale}>
      {/* Tree trunk */}
      <mesh position={[0, baseY + 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
        <meshStandardMaterial color="#4a3728" />
      </mesh>
      {/* Tree foliage - bottom layer */}
      <mesh position={[0, baseY + 1.5, 0]} castShadow>
        <coneGeometry args={[1.2, 1.8, 8]} />
        <meshStandardMaterial color="#2d5016" />
      </mesh>
      {/* Tree foliage - middle layer */}
      <mesh position={[0, baseY + 2.5, 0]} castShadow>
        <coneGeometry args={[0.9, 1.4, 8]} />
        <meshStandardMaterial color="#3a6b1f" />
      </mesh>
      {/* Tree foliage - top layer */}
      <mesh position={[0, baseY + 3.2, 0]} castShadow>
        <coneGeometry args={[0.6, 1.0, 8]} />
        <meshStandardMaterial color="#4a7a2f" />
      </mesh>
    </group>
  );
};

// Simple Rock Component
const Rock = ({ position, scale = 1 }) => {
  const baseY = -2.3; // Updated to match grass height
  return (
    <mesh position={[position[0], baseY + 0.15, position[2]]} scale={scale} castShadow>
      <dodecahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial color="#5a5a5a" roughness={0.9} />
    </mesh>
  );
};

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/retro_computer/model.gltf");

  // Tree positions around the computer - adjusted for raised grass
  const treePositions = [
    [2, -2.3, -1],
    [4, -2.3, -1],
    [3, -2.3, 1],
    [5, -2.3, 1],
  ];

  // Rock positions - adjusted for raised grass
  const rockPositions = [
    [4.5, -2.3, -0.5],
    [5.5, -2.3, -0.5],
  ];

  return (
    <>
      {/* Ground plane with grass-like appearance - right under the computer */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[6, -2.3, -3.5]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial 
          color="#2d5016" 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      {/* Ambient and directional lighting */}
      <hemisphereLight intensity={0.2} groundColor='#1a3d0a' />
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} position={[0, 5, 0]} />
      
      {/* Trees */}
      {treePositions.map((pos, index) => {
        const scales = [0.9, 1.1, 0.8, 1.0, 1.2, 0.85, 1.05, 0.95];
        return (
          <Tree 
            key={`tree-${index}`} 
            position={pos} 
            scale={scales[index] || 1.0}
          />
        );
      })}
      
      {/* Rocks */}
      {rockPositions.map((pos, index) => {
        const scales = [0.6, 0.5, 0.7, 0.55];
        return (
          <Rock 
            key={`rock-${index}`} 
            position={pos} 
            scale={scales[index] || 0.6}
          />
        );
      })}
      
      {/* Retro Computer - smaller and moved to the right, raised up, facing forward */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 3.0 : 4.0}
        position={isMobile ? [4, -2, -2.2] : [6, -2, -3.5]}
        rotation={[0, 3 * Math.PI / 4, 0]}
        castShadow
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [6, 2, 6], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={15}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
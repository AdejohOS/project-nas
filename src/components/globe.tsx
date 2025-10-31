"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  type Mesh,
  TextureLoader,
  AdditiveBlending,
  BackSide,
  Color,
} from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const RotatingEarth = () => {
  const globeRef = useRef<Mesh>(null);

  const [texture] = useLoader(TextureLoader, ["/textures/earth_night.jpg"]);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0012;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        emissiveMap={texture}
        emissiveIntensity={1.4}
        emissive={"#3366ff"}
        metalness={0.4}
        roughness={1.0}
      />
    </mesh>
  );
};

const Globe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="h-full w-full bg-black"
      style={{
        background:
          "radial-gradient(circle at center, #003049 0%, #0a0a0a 40%)",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, isMobile ? 5 : 4.2], // pull camera back on mobile
          fov: isMobile ? 55 : 45,
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 3, 5]} intensity={2.5} color="#00ffff" />
        <pointLight position={[-3, -3, -5]} intensity={0.5} color="#88ccff" />

        <Stars
          radius={100}
          depth={50}
          count={isMobile ? 1000 : 4000}
          factor={isMobile ? 2 : 4}
          fade
        />

        <RotatingEarth />

        <OrbitControls
          enableZoom={!isMobile}
          autoRotate
          enablePan={false}
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default Globe;

"use client";
import React, { useRef } from "react";
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
      <sphereGeometry args={[1.2, 64, 64]} />
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
  return (
    <div
      className="h-full w-full bg-black"
      style={{
        background:
          "radial-gradient(circle at center, #003049 0%, #0a0a0a 30%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 3, 5]} intensity={2.5} color="#00ffff" />
        <pointLight position={[-3, -3, -5]} intensity={0.5} color="#88ccff" />

        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        <RotatingEarth />

        <OrbitControls enableZoom={true} autoRotate enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Globe;

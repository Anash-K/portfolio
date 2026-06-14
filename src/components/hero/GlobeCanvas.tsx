"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const GOLD = "#d4af37";

function latLongToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function NetworkGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const { nodes, connectionPairs, particles } = useMemo(() => {
    const nodeCount = 28;
    const nodePositions = Array.from({ length: nodeCount }, (_, i) => {
      const lat = (Math.sin(i * 1.7) * 0.5 + (Math.random() - 0.5) * 0.3) * 140;
      const lon = (i / nodeCount) * 360 + (Math.random() - 0.5) * 20;
      return latLongToVector3(lat, lon, 2.1);
    });

    const connectionPairs: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (
          nodePositions[i].distanceTo(nodePositions[j]) < 2.2 &&
          connectionPairs.length < 40
        ) {
          connectionPairs.push([nodePositions[i].clone(), nodePositions[j].clone()]);
        }
      }
    }

    const particlePositions = Array.from({ length: 60 }, () => {
      const r = 2.8 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      return new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    });

    return { nodes: nodePositions, connectionPairs, particles: particlePositions };
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.15,
      0.05
    );
    groupRef.current.rotation.y += pointer.x * 0.002;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[2, 48, 48]} />
        <meshStandardMaterial
          color="#050505"
          emissive={GOLD}
          emissiveIntensity={0.08}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.02, 32, 32]} />
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.12} />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.05, 24, 24]} />
        <meshBasicMaterial color={GOLD} wireframe transparent opacity={0.06} />
      </mesh>

      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color={GOLD} />
        </mesh>
      ))}

      {connectionPairs.map(([a, b], i) => (
        <Line
          key={`line-${i}`}
          points={[a, b]}
          color={GOLD}
          transparent
          opacity={0.25}
          lineWidth={1}
        />
      ))}

      {particles.map((pos, i) => (
        <mesh key={`particle-${i}`} position={pos}>
          <sphereGeometry args={[0.012, 4, 4]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.5} />
        </mesh>
      ))}

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color={GOLD} />
      <pointLight position={[-5, -3, -5]} intensity={0.4} color="#ffffff" />
    </group>
  );
}

function GlobeFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-48 w-48 animate-pulse rounded-full border border-gold/20 bg-gold/5" />
    </div>
  );
}

export function GlobeCanvas() {
  return (
    <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[520px]">
      <div className="absolute inset-0 rounded-full bg-gold/[0.04] blur-[80px]" />
      <Suspense fallback={<GlobeFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          dpr={[1, 1.5]}
          frameloop="demand"
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          <NetworkGlobe />
        </Canvas>
      </Suspense>
    </div>
  );
}

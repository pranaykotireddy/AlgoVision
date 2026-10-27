import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const BAR_WIDTH = 0.8;
const BAR_DEPTH = 0.8;

export default function Bar3D({ value, index, x, isComparing, isSwapped, maxValue }) {
  const meshRef = useRef();
  const height = (value / maxValue) * 6 + 0.3;
  const targetY = height / 2;

  // Color based on state
  let color = "#7c3aed"; // default purple
  if (isComparing) color = "#facc15"; // yellow
  if (isSwapped) color = "#ef4444"; // red

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.scale.y = THREE.MathUtils.lerp(
        meshRef.current.scale.y,
        1,
        delta * 6
      );
    }
  });

  return (
    <group position={[x, 0, 0]}>
      {/* The Bar */}
      <mesh ref={meshRef} position={[0, targetY, 0]} castShadow>
        <boxGeometry args={[BAR_WIDTH, height, BAR_DEPTH]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isComparing || isSwapped ? 0.6 : 0.15}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* The Number (Billboard so it always faces the camera) */}
      <Text
        position={[0, height + 0.6, 0]} // Floats right above the bar
        fontSize={0.5}                 // Slightly bigger
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}            // Black outline for readability
        outlineColor="#000000"
      >
        {value}
      </Text>
    </group>
  );
}
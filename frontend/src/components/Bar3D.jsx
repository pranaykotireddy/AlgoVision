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
      <mesh ref={meshRef} position={[0, targetY, 0]} castShadow>
        <boxGeometry args={[BAR_WIDTH, height, BAR_DEPTH]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isComparing || isSwapped ? 0.8 : 0.2}
          metalness={0.4}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
      <Text
        position={[0, height + 0.5, 0]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.04}
        outlineColor="#000000"
      >
        {value}
      </Text>
    </group>
  );
}
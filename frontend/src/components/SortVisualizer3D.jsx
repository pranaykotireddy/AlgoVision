import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Bar3D from "./Bar3D";

export default function SortVisualizer3D({ array, comparing, swapped }) {
  const maxValue = Math.max(...array, 1);
  const spacing = 1.1;
  const totalWidth = array.length * spacing;
  const startX = -totalWidth / 2 + spacing / 2;

  return (
    <Canvas
      shadows
      camera={{ position: [0, 8, 16], fov: 45 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 15, 10]} intensity={1} castShadow />
      <pointLight position={[-10, 8, -10]} intensity={0.4} color="#06b6d4" />
      <pointLight position={[10, 8, 10]} intensity={0.4} color="#7c3aed" />

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial
          color="#12121a"
          metalness={0.5}
          roughness={0.8}
        />
      </mesh>

      {/* Grid */}
      <gridHelper args={[40, 40, "#7c3aed", "#1a1a2e"]} position={[0, 0, 0]} />

      {/* Bars */}
      {array.map((value, i) => (
        <Bar3D
          key={i}
          value={value}
          index={i}
          x={startX + i * spacing}
          maxValue={maxValue}
          isComparing={comparing && comparing.includes(i)}
          isSwapped={swapped && swapped.includes(i)}
        />
      ))}

      <OrbitControls
        enablePan={false}
        minDistance={6}
        maxDistance={30}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate={false}
      />
      <Environment preset="city" />
    </Canvas>
  );
}
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Box, Sphere, Grid } from "@react-three/drei";

export default function DSAScene3D({ type, array, comparing, swapped, currentStep }) {
  const safeArray = Array.isArray(array) && array.length > 0 ? array : [5, 2, 9, 1, 7];

  return (
    <Canvas shadows camera={{ position: [0, 6, 20], fov: 50 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
      <Grid args={[40, 40]} cellColor="#2a2a3e" sectionColor="#7c3aed" fadeDistance={30} />

      {/* 🔥 Add key={currentStep} to force a full rebuild on each step */}
      <group key={`step-${currentStep}`}>
        {type === "sorting" && <SortingBars array={safeArray} comparing={comparing} swapped={swapped} />}
        {type === "array" && <ArrayBlocks array={safeArray} />}
        {type === "sliding-window" && <SlidingWindow array={safeArray} />}
        {type === "two-pointers" && <TwoPointers array={safeArray} />}
        {type === "binary-search" && <BinarySearch array={safeArray} />}
        {type === "hashing" && <HashMapBuckets array={safeArray} />}
        {type === "kadane" && <KadaneSum array={safeArray} />}
        {type === "linked-list" && <LinkedListPointer array={safeArray} />}
        {type === "recursion" && <RecursionStack array={safeArray} />}
        {type === "stack" && <StackAnimation array={safeArray} />}
      </group>

      <OrbitControls enablePan={false} minDistance={10} maxDistance={40} />
    </Canvas>
  );
}

// 🔥 1. Sorting Bars
function SortingBars({ array, comparing, swapped }) {
  const max = Math.max(...array, 1);
  return array.map((val, i) => {
    let color = "#7c3aed";
    if (comparing?.includes(i)) color = "#facc15";
    if (swapped?.includes(i)) color = "#ef4444";
    const height = (val / max) * 6;

    return (
      <group key={`sort-${i}-${val}`} position={[(i - array.length / 2) * 1.2, 0, 0]}>
        <Box args={[0.8, height, 0.8]} position={[0, height / 2, 0]} castShadow>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </Box>
        <Text position={[0, height + 0.5, 0]} fontSize={0.5} color="white" outlineWidth={0.02} outlineColor="#000">
          {val}
        </Text>
      </group>
    );
  });
}

// 🔥 2. Array Blocks (Now animates with Play!)
function ArrayBlocks({ array }) {
  return array.map((val, i) => (
    <group key={`array-${i}-${val}`} position={[(i - array.length / 2) * 1.5, 0, 0]}>
      <Box args={[1, 1, 1]} castShadow>
        <meshStandardMaterial color="#06b6d4" />
      </Box>
      <Text position={[0, 1.2, 0]} fontSize={0.6} color="white" outlineWidth={0.02} outlineColor="#000">
        {val}
      </Text>
    </group>
  ));
}

// 🔥 3. Sliding Window
function SlidingWindow({ array }) {
  const windowStart = Math.max(0, Math.floor(array.length / 2) - 1);
  const windowEnd = Math.min(array.length - 1, windowStart + 2);

  return array.map((val, i) => {
    const inWindow = i >= windowStart && i <= windowEnd;
    return (
      <group key={`window-${i}-${val}`} position={[(i - array.length / 2) * 1.5, 0, 0]}>
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color={inWindow ? "#facc15" : "#7c3aed"} />
        </Box>
        <Text position={[0, 1.2, 0]} fontSize={0.6} color="white" outlineWidth={0.02} outlineColor="#000">
          {val}
        </Text>
      </group>
    );
  });
}

// 🔥 4. Two Pointers
function TwoPointers({ array }) {
  return array.map((val, i) => {
    let color = "#7c3aed";
    if (i === 0) color = "#facc15";
    if (i === array.length - 1) color = "#ef4444";
    return (
      <group key={`pointer-${i}-${val}`} position={[(i - array.length / 2) * 1.5, 0, 0]}>
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color={color} />
        </Box>
        <Text position={[0, 1.2, 0]} fontSize={0.6} color="white" outlineWidth={0.02} outlineColor="#000">
          {val}
        </Text>
      </group>
    );
  });
}

// 🔥 5. Binary Search
function BinarySearch({ array }) {
  const mid = Math.floor(array.length / 2);
  return array.map((val, i) => {
    let color = "#7c3aed";
    if (i === mid) color = "#facc15";
    if (i < mid) color = "#2a2a3e";
    return (
      <group key={`bin-${i}-${val}`} position={[(i - array.length / 2) * 1.5, 0, 0]}>
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color={color} transparent opacity={i < mid ? 0.2 : 1} />
        </Box>
        <Text position={[0, 1.2, 0]} fontSize={0.6} color="white" outlineWidth={0.02} outlineColor="#000">
          {val}
        </Text>
      </group>
    );
  });
}

// 🔥 6. Hashing
function HashMapBuckets({ array }) {
  return array.map((val, i) => (
    <group key={`hash-${i}-${val}`} position={[(i - array.length / 2) * 2.5, 0, 0]}>
      <Box args={[1.5, 3, 1.5]}>
        <meshStandardMaterial color="#06b6d4" wireframe />
      </Box>
      <Text position={[0, 1.8, 0]} fontSize={0.5} color="white" outlineWidth={0.02} outlineColor="#000">
        {val}
      </Text>
    </group>
  ));
}

// 🔥 7. Kadane's
function KadaneSum({ array }) {
  return array.map((val, i) => {
    const isPositive = val > 0;
    return (
      <group key={`kadane-${i}-${val}`} position={[(i - array.length / 2) * 1.2, 0, 0]}>
        <Box args={[0.8, Math.abs(val) * 0.5 + 0.5, 0.8]} position={[0, val > 0 ? 1 : -1, 0]}>
          <meshStandardMaterial color={isPositive ? "#22c55e" : "#ef4444"} />
        </Box>
        <Text position={[0, val > 0 ? 2 : -2, 0]} fontSize={0.4} color="white" outlineWidth={0.02} outlineColor="#000">
          {val}
        </Text>
      </group>
    );
  });
}

// 🔥 8. Linked List
function LinkedListPointer({ array }) {
  return array.map((val, i) => (
    <group key={`ll-${i}-${val}`} position={[(i - array.length / 2) * 3, 0, 0]}>
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#7c3aed" />
      </Sphere>
      <Text position={[0, 1.5, 0]} fontSize={0.6} color="white" outlineWidth={0.02} outlineColor="#000">
        {val}
      </Text>
      {i < array.length - 1 && (
        <Box args={[2.2, 0.1, 0.1]} position={[1.5, 0, 0]}>
          <meshStandardMaterial color="#06b6d4" />
        </Box>
      )}
    </group>
  ));
}

// 🔥 9. Recursion Stack
function RecursionStack({ array }) {
  return array.map((val, i) => (
    <group key={`rec-${i}-${val}`} position={[0, i * 1.2, 0]}>
      <Box args={[4, 0.8, 4]}>
        <meshStandardMaterial color={i === array.length - 1 ? "#facc15" : "#7c3aed"} />
      </Box>
      <Text position={[0, 0, 2.1]} fontSize={0.6} color="white" outlineWidth={0.02} outlineColor="#000">
        {val}
      </Text>
    </group>
  ));
}

// 🔥 10. Stack Animation
function StackAnimation({ array }) {
  return array.map((val, i) => (
    <group key={`stack-${i}-${val}`} position={[0, i * 1.2, 0]}>
      <Box args={[3, 1, 3]}>
        <meshStandardMaterial color={i === array.length - 1 ? "#22c55e" : "#7c3aed"} />
      </Box>
      <Text position={[0, 0, 1.6]} fontSize={0.7} color="white" outlineWidth={0.02} outlineColor="#000">
        {val}
      </Text>
    </group>
  ));
}
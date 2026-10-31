import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Box, Grid } from "@react-three/drei";

export default function CodeScene3D({ variables, activeLine }) {
  // Find the largest array in the variables to visualize
  let targetArray = [];
  let arrayName = "";
  
  if (variables) {
    for (const [key, val] of Object.entries(variables)) {
      if (Array.isArray(val) && val.length > 0) {
        targetArray = val;
        arrayName = key;
        break; // Just show the first array we find
      }
    }
  }

  return (
    <Canvas shadows camera={{ position: [0, 6, 20], fov: 50 }} style={{ background: "transparent" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
      <Grid args={[40, 40]} cellColor="#2a2a3e" sectionColor="#7c3aed" fadeDistance={30} />

      {targetArray.length === 0 ? (
        <Text position={[0, 2, 0]} fontSize={0.8} color="gray">
          No array found in variables yet...
        </Text>
      ) : (
        <group>
          <Text position={[0, 10, 0]} fontSize={0.8} color="#06b6d4">
            {arrayName} = [{targetArray.join(", ")}]
          </Text>
          
          {targetArray.map((val, i) => {
            // Scale height based on value
            const maxVal = Math.max(...targetArray, 1);
            const height = (val / maxVal) * 4 + 0.5;

            return (
              <group key={i} position={[(i - targetArray.length / 2) * 1.5, 0, 0]}>
                <Box args={[1, height, 1]} position={[0, height / 2, 0]} castShadow>
                  <meshStandardMaterial color="#7c3aed" />
                </Box>
                <Text position={[0, height + 0.5, 0]} fontSize={0.5} color="white" outlineWidth={0.02} outlineColor="#000">
                  {val}
                </Text>
              </group>
            );
          })}
        </group>
      )}

      <OrbitControls enablePan={false} minDistance={10} maxDistance={40} />
    </Canvas>
  );
}
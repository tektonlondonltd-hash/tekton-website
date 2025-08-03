
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="teal" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

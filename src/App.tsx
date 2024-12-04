import { OrbitControls, Sky, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";

export default function App() {
  return (
    <div className="App">
      <Canvas
        style={{ height: window.innerHeight, width: window.innerWidth }}
        frameloop="demand"
        dpr={window.devicePixelRatio}
      >
        {/* Development */}
        <Stats />
        <OrbitControls />

        {/* Lights */}
        <pointLight position={[100, 100, 100]} intensity={0.25} />
        <pointLight position={[-100, -100, -100]} intensity={0.25} />
        <ambientLight args={[0xffffff]} intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sky sunPosition={[500, 50, 1000]} turbidity={0.1} inclination={0.5} azimuth={0.25} />

        {/* Floor */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <scene background={new Color(0xa8def0)} />
          <planeGeometry args={[80, 80]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

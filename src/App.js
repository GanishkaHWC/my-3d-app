import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from './Components/Mode';
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh',
     }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
        <Model position={[0,-2,0]} />
         </Suspense>
        
      </Canvas>
    </div>
  );
}

export default App;

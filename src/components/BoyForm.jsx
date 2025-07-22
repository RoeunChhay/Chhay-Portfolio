
import { Text3D } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {BoyHiphop} from './BoyHiphop'

const BoyForm = () => {
  return (
    <Canvas
      camera={{
        position:[-1, -20, 12]
      }}
     >
        <ambientLight intensity={2}/>
        <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1c34ff"}/>
         
        <group>
          <Text3D
          rotation={[1, -0.5, 0]}
          position={[-15.5, -0.5, -3]}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={2}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={4}
          font="/Inter_Bold.json">
          {`Hello\n Wellcome`}
          <meshNormalMaterial />
        </Text3D>
       
        <BoyHiphop 
        scale={7.5}
         
        position={[-1, -10, -1]}
        
        />
        </group>
    </Canvas> 
  )
}

export default BoyForm

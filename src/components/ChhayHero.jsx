import React from 'react'
import { Chhay } from './Chhay'
import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'



const ChhayHero = () => {
   return (
      <Canvas>
         <ambientLight intensity={2} />
         <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1c34ff"} />


         <Sparkles count={100} size={4} speed={0.5} color={'pink'} scale={[10, 10, 2]} />
         <group>
            <Chhay scale={9} position={[0, -15, 0]} />
         </group>
      </Canvas>
   )
}

export default ChhayHero

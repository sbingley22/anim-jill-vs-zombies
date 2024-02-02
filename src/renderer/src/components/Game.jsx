/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { Environment } from '@react-three/drei'
import * as Scene1 from './Scene1'
import InvisiblePlane from './InvisiblePlane'

const Game = () => {
  const group = useRef()

  return (
    <>
      <Environment preset="warehouse" />
      <ambientLight intensity={0.2} />
      <spotLight position={[0, 11, 0]} angle={0.3} intensity={10} castShadow />

      <group ref={group} position={[0, -1, 0]}>
        <Scene1.Model />
        <InvisiblePlane position={[0, 0.01, 0]} />
      </group>
    </>
  )
}

export default Game

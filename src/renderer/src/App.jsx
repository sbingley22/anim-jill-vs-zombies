import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Game from "./components/Game"

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0,1,3]}}>
        <OrbitControls />
        <Suspense>
          <Game />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App

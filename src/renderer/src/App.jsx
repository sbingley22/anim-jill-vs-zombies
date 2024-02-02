import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import Game from './components/Game'
import {
  BrightnessContrast,
  ChromaticAberration,
  EffectComposer,
  Glitch,
  Noise,
  Pixelation,
  Sepia,
  Vignette
} from '@react-three/postprocessing'
import { useControls, Leva } from 'leva'
import ReactAudioPlayer from 'react-audio-player'
import backgroundMusic from '../../../resources/scary-piano.wav'

function App() {
  const { pixelate, noiseValue, glitchValue, chromaticValue, sepiaValue, playSound } = useControls({
    pixelate: {
      label: 'Pixelate',
      value: 0,
      min: 0,
      max: 12,
      step: 1
    },
    noiseValue: {
      label: 'Noise',
      value: 0,
      min: 0,
      max: 1,
      step: 0.1
    },
    glitchValue: {
      label: 'Glitch',
      value: false
    },
    chromaticValue: {
      label: 'Chromatic',
      value: false
    },
    sepiaValue: {
      label: 'Sepia',
      value: 0,
      min: 0,
      max: 1,
      step: 0.1
    },
    playSound: {
      label: 'Sound',
      value: true
    }
  })

  const audioRef = useRef()

  return (
    <>
      <Leva collapsed={true} />
      <ReactAudioPlayer
        ref={audioRef}
        src={backgroundMusic}
        autoPlay
        controls={false}
        loop
        volume={playSound ? 0.3 : 0.0}
      />
      <Canvas shadows camera={{ position: [0, 1.5, 4] }}>
        <OrbitControls />
        <Suspense>
          <Game />
        </Suspense>
        <EffectComposer>
          <BrightnessContrast brightness={-0.0} contrast={0.2} />
          <Noise opacity={noiseValue} />
          <Pixelation granularity={pixelate} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          <Glitch
            delay={[0.1, 0.3]}
            duration={[0.2, 1.0]}
            strength={[0.01, 0.02]}
            //mode={GlitchMode.SPORADIC}
            active={glitchValue}
            ratio={0.85}
          />
          <ChromaticAberration offset={chromaticValue ? [0.001, 0.001] : [0, 0]} />
          <Sepia intensity={sepiaValue} />
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App

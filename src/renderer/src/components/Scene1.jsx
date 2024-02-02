/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 resources/scene1.glb 
*/

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import sceneGlb from '../../../../resources/scene1.glb?url'
import { useControls } from 'leva'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(sceneGlb)
  const { actions } = useAnimations(animations, group)

  const { playAnim } = useControls({
    playAnim: {
      label: 'Play',
      value: true
    }
  })

  useEffect(() => {
    if (playAnim) {
      actions['Scene'].paused = false
      actions['Scene'].play()
    } else {
      actions['Scene'].paused = true
      //console.log('paused at :', actions['Scene'].time)
    }
    //console.log(actions['Scene'])
  }, [playAnim])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes.root} />
          <primitive object={nodes['MCH-torsoparent']} />
          <primitive object={nodes['MCH-hand_ikparentL']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL']} />
          <primitive object={nodes['MCH-hand_ikparentR']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR']} />
          <primitive object={nodes['MCH-foot_ikparentL']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
          <primitive object={nodes['MCH-foot_ikparentR']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.skin}
            skeleton={nodes.Body.skeleton}
            castShadow
          />
          <group name="Pistol">
            <skinnedMesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials['Silver-Sandblasted']}
              skeleton={nodes.Cube.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Cube_1"
              geometry={nodes.Cube_1.geometry}
              material={materials['Silver-Sandblasted.Darker']}
              skeleton={nodes.Cube_1.skeleton}
              castShadow
            />
            <skinnedMesh
              name="Cube_2"
              geometry={nodes.Cube_2.geometry}
              material={materials.Grip}
              skeleton={nodes.Cube_2.skeleton}
              castShadow
            />
          </group>
        </group>
        <group name="rig001">
          <primitive object={nodes.root_1} />
          <primitive object={nodes['MCH-torsoparent_1']} />
          <primitive object={nodes['MCH-hand_ikparentL_1']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL_1']} />
          <primitive object={nodes['MCH-hand_ikparentR_1']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR_1']} />
          <primitive object={nodes['MCH-foot_ikparentL_1']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL_1']} />
          <primitive object={nodes['MCH-foot_ikparentR_1']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR_1']} />
          <skinnedMesh
            name="zBody"
            geometry={nodes.zBody.geometry}
            material={materials.Material_0}
            skeleton={nodes.zBody.skeleton}
            castShadow
          />
        </group>
        <group name="rig002">
          <primitive object={nodes.root_2} />
          <primitive object={nodes['MCH-torsoparent_2']} />
          <primitive object={nodes['MCH-hand_ikparentL_2']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL_2']} />
          <primitive object={nodes['MCH-hand_ikparentR_2']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR_2']} />
          <primitive object={nodes['MCH-foot_ikparentL_2']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL_2']} />
          <primitive object={nodes['MCH-foot_ikparentR_2']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR_2']} />
          <skinnedMesh
            name="zBody001"
            geometry={nodes.zBody001.geometry}
            material={materials['Material_0.001']}
            skeleton={nodes.zBody001.skeleton}
            castShadow
          />
        </group>
        <group name="rig003">
          <primitive object={nodes.root_3} />
          <primitive object={nodes['MCH-torsoparent_3']} />
          <primitive object={nodes['MCH-hand_ikparentL_3']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL_3']} />
          <primitive object={nodes['MCH-hand_ikparentR_3']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR_3']} />
          <primitive object={nodes['MCH-foot_ikparentL_3']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL_3']} />
          <primitive object={nodes['MCH-foot_ikparentR_3']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR_3']} />
          <skinnedMesh
            name="zfBody"
            geometry={nodes.zfBody.geometry}
            material={materials['Material_0.002']}
            skeleton={nodes.zfBody.skeleton}
            castShadow
          />
        </group>
        <mesh
          name="vending-machine"
          geometry={nodes['vending-machine'].geometry}
          material={materials.base_material}
          position={[0.267, 0, -3.351]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          receiveShadow
          castShadow
        />
        <mesh
          name="desk"
          geometry={nodes.desk.geometry}
          material={materials['base_material.001']}
          position={[-1.408, 0.326, -0.737]}
          rotation={[0.034, 0.951, 3.137]}
          receiveShadow
          castShadow
        />
        <mesh
          name="file-cabinet"
          geometry={nodes['file-cabinet'].geometry}
          material={materials['base_material.002']}
          position={[3.476, 0, -3.474]}
          rotation={[Math.PI / 2, 0, 0]}
          receiveShadow
          castShadow
        />
        <mesh
          name="office-chair"
          geometry={nodes['office-chair'].geometry}
          material={materials['base_material.003']}
          position={[2.681, 0, 2.602]}
          rotation={[Math.PI / 2, 0, 0]}
          receiveShadow
          castShadow
        />
        <mesh
          name="laptop"
          geometry={nodes.laptop.geometry}
          material={materials['base_material.004']}
          position={[2.42, 0.87, 2.129]}
          rotation={[Math.PI / 2, 0, -0.359]}
          receiveShadow
          castShadow
        />
        <mesh
          name="trash-can"
          geometry={nodes['trash-can'].geometry}
          material={materials['base_material.005']}
          position={[1.734, 0, 2.105]}
          rotation={[Math.PI / 2, 0, 0]}
          receiveShadow
          castShadow
        />
        <group name="room">
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials.ground}
            receiveShadow
          />
          <mesh
            name="Plane_1"
            geometry={nodes.Plane_1.geometry}
            material={materials.Material}
            receiveShadow
          />
        </group>
        <mesh
          name="desk001"
          geometry={nodes.desk001.geometry}
          material={materials['base_material.001']}
          position={[2.637, 0, 2.196]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        />
        <mesh
          name="vending-machine001"
          geometry={nodes['vending-machine001'].geometry}
          material={materials.base_material}
          position={[-3.276, 0.443, -1.916]}
          rotation={[2.367, -0.658, 0.981]}
          castShadow
          receiveShadow
        />
        <mesh
          name="desk002"
          geometry={nodes.desk002.geometry}
          material={materials['base_material.001']}
          position={[-0.12, 0.326, 2.419]}
          rotation={[0.033, -0.939, -3.092]}
          castShadow
        />
        <mesh
          name="desk003"
          geometry={nodes.desk003.geometry}
          material={materials['base_material.001']}
          position={[-2.956, 0.326, 2.243]}
          rotation={[0.021, 0.322, -3.126]}
          castShadow
        />
        <mesh
          name="desk004"
          geometry={nodes.desk004.geometry}
          material={materials['base_material.001']}
          position={[-0.339, 0.896, -0.678]}
          rotation={[-1.546, -0.013, -2.918]}
          castShadow
        />
        <mesh
          name="file-cabinet001"
          geometry={nodes['file-cabinet001'].geometry}
          material={materials['base_material.002']}
          position={[1.926, 0.359, 0.356]}
          rotation={[0, 1.045, 0]}
          receiveShadow
          castShadow
        />
        <mesh
          name="file-cabinet002"
          geometry={nodes['file-cabinet002'].geometry}
          material={materials['base_material.002']}
          position={[2.708, 0, 0.034]}
          rotation={[Math.PI / 2, 0, -0.917]}
          receiveShadow
          castShadow
        />
        <mesh
          name="file-cabinet003"
          geometry={nodes['file-cabinet003'].geometry}
          material={materials['base_material.002']}
          position={[1.823, 0.176, -1.002]}
          rotation={[2.129, 0.292, -1.147]}
          receiveShadow
          castShadow
        />
        <mesh
          name="desk005"
          geometry={nodes.desk005.geometry}
          material={materials['base_material.001']}
          position={[1.573, 0.326, -0.809]}
          rotation={[0.021, -0.411, -3.11]}
          castShadow
        />
        <mesh
          name="laptop001"
          geometry={nodes.laptop001.geometry}
          material={materials['base_material.004']}
          position={[-1.534, 0.046, 1.368]}
          rotation={[Math.PI / 2, 0, 0.642]}
          castShadow
        />
        <mesh
          name="laptop002"
          geometry={nodes.laptop002.geometry}
          material={materials['base_material.004']}
          position={[1.091, 0.068, 0.959]}
          rotation={[0.251, -0.562, 0.115]}
          castShadow
        />
        <mesh
          name="trash-can001"
          geometry={nodes['trash-can001'].geometry}
          material={materials['base_material.005']}
          position={[0.631, 0.124, -0.463]}
          rotation={[0.079, -0.192, -0.067]}
          castShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload(sceneGlb)
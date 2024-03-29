/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 ec2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ec2.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.25, 0]} scale={[0.5, 0.123, 0.5]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['SVGMat.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/ec2.gltf')

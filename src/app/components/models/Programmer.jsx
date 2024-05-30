"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Programmer(props) {
  const { nodes, materials } = useGLTF('/models/iazard-transformed.glb')
  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ModelGroup48843_Modellambert4SG1_0.geometry}
        material={materials.Modellambert4SG1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ModelpolySurface21_Modellambert2SG1_0.geometry}
        material={materials.Modellambert2SG1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ModelpolySurface21_Modellambert3SG1_0.geometry}
        material={materials.Modellambert3SG1}
      />
    </group>
  )
}

useGLTF.preload('/models/wizard-transformed.glb')

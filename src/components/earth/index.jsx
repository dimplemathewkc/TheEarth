import { useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from "@react-three/drei"
import React from 'react';
import EarthCloud from "../../assets/textures/8k_earth_clouds.jpg"
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg"
import EarthNight from "../../assets/textures/8k_earth_nightmap.jpg"
import EarthNormal from "../../assets/textures/8k_earth_normal_map.jpg"
import EarthSpecular from "../../assets/textures/8k_earth_specular_map.jpg"
import {TextureLoader} from "three"
import * as THREE from "three"
const Earth = (props) => {
    const [colorMap,normalMap, specularMap, cloudMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormal, EarthSpecular, EarthCloud])
    return ( 
        <>
            <ambientLight intensity={1}/> 
            <pointLight color="#f6f3ea" position={[2,0,2]} intensity={1.2}/>
            <Stars radius={300} 
                depth={60} 
                count={20000} 
                factor={7} 
                saturation={0} 
                fade={true}/>
            <mesh>
                <sphereGeometry args={[1.005,32,32]} />
                <meshPhongMaterial map={cloudMap} 
                opacity={0.4} depthWrite={true} 
                transparent={true} side={THREE.DoubleSide}/>
            </mesh>
            <mesh>
                <sphereGeometry args={[1, 32, 32]}/>
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} />
                <OrbitControls 
                    enabledZoom={true} 
                    enablePan={true} 
                    enableRotation={true}
                    zoomSpeed = {0.6}
                    panSpeed = {0.5}
                    rotateSpeed = {0.4}
                    // target={}
                />
            </mesh>
        </>
     );
}
 
export default Earth;
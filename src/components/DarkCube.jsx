import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const DarkCube = () => {
  const textRef = useRef();
  useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2));

  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={['black']} />
          <Text ref={textRef} fontSize={3} color="white">hello</Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default DarkCube;
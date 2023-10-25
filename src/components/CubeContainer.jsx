import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import DarkCube from './DarkCube';
import LightCube from './LightCube';

const CubeContainer = () => {
  // get current theme
  const theme = useTheme();
  console.log(theme.theme);
  return (
    <div className='hover:cursor-grab'>
      <Canvas camera={{ fov:25, position:[7,7,7] }}>
        <OrbitControls
          enableZoom={false}
        />
        <ambientLight intensity={2} />
        <directionalLight position={[3,2,1]} />
        {
          theme.theme !== 'dark' ? <DarkCube /> : <LightCube />
        }
      </Canvas>
    </div>
  );
};

export default CubeContainer;
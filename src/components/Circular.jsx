import { CircularText} from './Icon';

const Circular = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-60 h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark" />
      </div>
    </div>
  );
};

export default Circular;
import React, { useRef, useState } from 'react';
import somC from '../assets/c.mp4';
import somD from '../assets/d.mp4';
import somE from '../assets/e.mp4';
import somF from '../assets/f.mp4';
import somG from '../assets/g.mp4';
import somA from '../assets/a.mp4';
import somB from '../assets/b.mp4';
import './pad.css';

interface Sound {
  key: string;
  src: string;
}

const sounds: Sound[] = [
  { key: 'C', src: somC },
  { key: 'D', src: somD },
  { key: 'E', src: somE },
  { key: 'F', src: somF },
  { key: 'G', src: somG },
  { key: 'A', src: somA },
  { key: 'B', src: somB },
];

const Pad: React.FC = () => {
  const audioRefs = useRef<HTMLAudioElement[]>(sounds.map(sound => new Audio(sound.src)));
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const tocarSom = (index: number) => {
    if (isPlaying === index) {
      audioRefs.current[isPlaying].pause();
      audioRefs.current[isPlaying].currentTime = 0;
      setIsPlaying(null);
    } else {
      if (isPlaying !== null) {
        audioRefs.current[isPlaying].pause();
        audioRefs.current[isPlaying].currentTime = 0;
      }
      audioRefs.current[index].loop = true;
      audioRefs.current[index].play();
      setIsPlaying(index);
    }
  };

  return (
    <>
      <h1>Selecione o Tom</h1>
      <div className='botoes_pai'>
        {sounds.map((sound, index) => (
          <button key={sound.key} className="teste" onClick={() => tocarSom(index)}>
            {isPlaying === index ? 'Parar' : sound.key}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pad;
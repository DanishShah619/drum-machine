import React from "react";

interface DrumPadProps {
  keyTrigger: string;
  soundName: string;
  audioSrc: string;
  playSound: (key: string, sound: string) => void;
}

const DrumPad: React.FC<DrumPadProps> = ({ keyTrigger, soundName, audioSrc, playSound }) => {
  const handlePlay = () => playSound(keyTrigger, soundName);

  return (
    <button id={soundName} className="drum-pad" onClick={handlePlay}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={audioSrc}></audio>
    </button>
  );
};

export default DrumPad;

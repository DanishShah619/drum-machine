import React, { useState, useEffect } from "react";
import DrumPad from "./Drumpad";
import Display from "./Display";
import { drumPads } from "../data";

const DrumMachine: React.FC = () => {
  const [currentSound, setCurrentSound] = useState("");

  const playSound = (key: string, sound: string) => {
    const audio = document.getElementById(key) as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setCurrentSound(sound);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pad = drumPads.find(p => p.key === event.key.toUpperCase());
      if (pad) playSound(pad.key, pad.sound);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div id="drum-machine">
      <Display currentSound={currentSound} />
      <div className="pads">
        {drumPads.map((pad) => (
          <DrumPad key={pad.key} keyTrigger={pad.key} soundName={pad.sound} audioSrc={pad.url} playSound={playSound} />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;

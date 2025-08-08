import React, { useState } from "react";
import { GameContext } from ".";

const RootContext = ({ children }) => {
  const [heartImg, setHeartImg] = useState(false);
  const [brainImg, setBrainImg] = useState(false);
  const [kidneysImg, setKidneysImg] = useState(false);
  const [liverImg, setLiverImg] = useState(false);
  const [lungsImg, setLungsImg] = useState(false);
  const [stomachImg, setStomachImg] = useState(false);
  return (
    <div>
      <GameContext.Provider
        value={{
          heartImg,
          setHeartImg,
          brainImg,
          setBrainImg,
          kidneysImg,
          setKidneysImg,
          liverImg,
          setLiverImg,
          lungsImg,
          setLungsImg,
          stomachImg,
          setStomachImg,
        }}
      >
        {children}
      </GameContext.Provider>
    </div>
  );
};

export default RootContext;

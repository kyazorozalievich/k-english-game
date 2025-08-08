import React, { useContext, useState } from "react";
import Brain from "./Brain";
import { GameContext } from "../../context";
import Heart from "./Heart";
import Stomach from "./Stomach";
import Liver from "./Liver";
import Lungs from "./Lungs";
import Kidneys from "./Kidneys/inddex";

const Home = () => {
  const { brainImg, heartImg, lungsImg, stomachImg, liverImg, kidneysImg } = useContext(GameContext);

  return (
    <div className="mt-[50px]">
        <div className="container w-[90%]">
      <div className="flex items-center gap-[20px]">
        <h1 className="text-[20px] font-[500px]">Find the word:</h1>
        <div className="flex items-center gap-[10px]">
            <a className="text-[20px] font-[700] " style={{
                color: brainImg ? 'red' : 'black'
            }}>Мозг</a>,
            <a className="text-[20px] font-[700] " style={{
                color: liverImg ? 'red' : 'black'
            }}>Печень</a>,
            <a className="text-[20px] font-[700] " style={{
                color: heartImg ? 'red' : 'black'
            }}>Сердце</a>,
            <a className="text-[20px] font-[700] " style={{
                color: lungsImg ? 'red' : 'black'
            }}>Легкие</a>,
            <a className="text-[20px] font-[700] " style={{
                color: kidneysImg ? 'red' : 'black'
            }}>Почки</a>,
            <a className="text-[20px] font-[700] " style={{
                color: stomachImg ? 'red' : 'black'
            }}>Желудок</a>
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-[100px] justify-center mb-[50px]">
        <Brain />
        <Heart/>
        <Stomach/>
        <Liver/>
        <Lungs/>
        <Kidneys/>
      </div>
        </div>
    </div>
  );
};

export default Home;

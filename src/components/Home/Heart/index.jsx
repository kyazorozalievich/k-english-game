import React, { useContext, useState } from "react";
import brain from "../../../assets/image/heart.png";
import what from "../../../assets/image/what.png";
import { GameContext } from "../../../context";

const Heart = () => {
  //heart
  const [h, seth] = useState(false);
  const [e, sete] = useState(false);
  const [a, seta] = useState(false);
  const [r, setr] = useState(false);
  const [t, sett] = useState(false);
  const { heartImg, setHeartImg } = useContext(GameContext);

  function heartBlock() {
    if (h === true && e === true && a === true && r === true && t === true) {
      setHeartImg(true);
    } else {
      alert("You're Wrong!");
    }
  }
  //

  return (
    <div className="mt-[50px]">
      <div className="brain flex items-center flex-col w-[300px] h-[500px] p-5 rounded-[10px] border-2 border-solid border-sky-400">
        <div className="flex items-center flex-col h-[350px] gap-[10px]">
        <div className="1 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => seth(false)}>
            T
          </a>
          <a
            className=""
            style={{
              color: h ? "red" : "black",
            }}
            onClick={() => seth(true)}
          >
            H
          </a>
          <a className="" onClick={() => seth(false)}>
            A
          </a>
          <a className="" onClick={() => seth(false)}>
            I
          </a>
          <a className="" onClick={() => seth(false)}>
            L
          </a>
          <a className="" onClick={() => seth(false)}>
            A
          </a>
          <a className="" onClick={() => seth(false)}>
            N
          </a>
          <a className="" onClick={() => seth(false)}>
            D
          </a>
        </div>
        <div className="2 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => sete(false)}>
            T
          </a>
          <a className="" onClick={() => sete(false)}>
            U
          </a>
          <a className="" onClick={() => sete(false)}>
            R
          </a>
          <a className="" onClick={() => sete(false)}>
            K
          </a>
          <a
            className=""
            style={{ color: e ? "red" : "black" }}
            onClick={() => sete(true)}
          >
            E
          </a>
          <a className="" onClick={() => sete(false)}>
            Y
          </a>
        </div>
        <div className="3 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => seta(false)}>
            F
          </a>
          <a className="" onClick={() => seta(false)}>
            R
          </a>
          <a
            className=""
            style={{ color: a ? "red" : "black" }}
            onClick={() => seta(true)}
          >
            A
          </a>
          <a className="" onClick={() => seta(false)}>
            N
          </a>
          <a className="" onClick={() => seta(false)}>
            C
          </a>
          <a className="" onClick={() => seta(false)}>
            E
          </a>
        </div>
        <div className="4 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => setr(false)}>
            U
          </a>
          <a className="" onClick={() => setr(false)}>
            K
          </a>
          <a
            className=""
            style={{ color: r ? "red" : "black" }}
            onClick={() => setr(true)}
          >
            R
          </a>
          <a className="" onClick={() => setr(false)}>
            A
          </a>
          <a className="" onClick={() => setr(false)}>
            I
          </a>
          <a className="" onClick={() => setr(false)}>
            N
          </a>{" "}
          <a className="" onClick={() => setr(false)}>
            E
          </a>
        </div>
        <div className="5 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => sett(false)}>
            S
          </a>
          <a className="" onClick={() => sett(false)}>
            C
          </a>
          <a className="" onClick={() => sett(false)}>
            O
          </a>
          <a
            className=""
            style={{ color: t ? "red" : "black" }}
            onClick={() => sett(true)}
          >
            T
          </a>
          <a className="" onClick={() => sett(false)}>
            L
          </a>
          <a className="" onClick={() => sett(false)}>
            A
          </a>
          <a className="" onClick={() => sett(false)}>
            N
          </a>
          <a className="" onClick={() => sett(false)}>
            D
          </a>
        </div>
        </div>
        <button
          className="w-[100px] h-[30px] bg-sky-500 rounded-[5px] font-[600] text-white mt-[20px]"
          onClick={() => heartBlock()}
        >
          Confirm
        </button>
        <div className="flex items-center justify-center h-[300px] ">
          <img
            src={brain}
            alt=""
            className="w-[50%] "
            style={{
              display: heartImg ? "block" : "none",
            }}
          />
          <img
            src={what}
            alt=""
            style={{
              display: heartImg ? "none" : "block",
            }}
            className="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Heart;

import React, { useContext, useState } from "react";
import brain from "../../../assets/image/brain.png";
import what from "../../../assets/image/what.png";
import { GameContext } from "../../../context";

const Brain = () => {
  //brain
  const [b, setb] = useState(false);
  const [r, setr] = useState(false);
  const [a, seta] = useState(false);
  const [i, seti] = useState(false);
  const [n, setn] = useState(false);
  const {brainImg, setBrainImg} = useContext(GameContext);

  function brainBlock() {
    if (b === true && r === true && a === true && i === true && n === true) {
      setBrainImg(true);
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
              <a className="" onClick={() => setb(false)}>
                A
              </a>
              <a className="" onClick={() => setb(false)}>
                L
              </a>
              <a
                className=""
                style={{
                  color: b ? "red" : "black",
                }}
                onClick={() => {
                  setb(true);
                }}
              >
                B
              </a>
              <a className="" onClick={() => setb(false)}>
                A
              </a>
              <a className="" onClick={() => setb(false)}>
                N
              </a>
              <a className="" onClick={() => setb(false)}>
                I
              </a>
              <a className="" onClick={() => setb(false)}>
                A
              </a>
            </div>
            <div className="2 flex items-center font-[800] gap-[5px] text-[20px] ">
              <a className="" onClick={() => setr(false)}>
                A
              </a>
              <a className="" onClick={() => setr(false)}>
                U
              </a>
              <a className="" onClick={() => setr(false)}>
                S
              </a>
              <a className="" onClick={() => setr(false)}>
                T
              </a>
              <a
                className=""
                style={{ color: r ? "red" : "black" }}
                onClick={() => setr(true)}
              >
                R
              </a>
              <a className="" onClick={() => setr(false)}>
                I
              </a>
              <a className="" onClick={() => setr(false)}>
                A
              </a>
            </div>
            <div className="3 flex items-center font-[800] gap-[5px] text-[20px] ">
              <a className="" onClick={() => seta(false)}>
                B
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
                Z
              </a>
              <a className="" onClick={() => seta(false)}>
                I
              </a>
              <a className="" onClick={() => seta(false)}>
                L
              </a>
            </div>
            <div className="4 flex items-center font-[800] gap-[5px] text-[20px] ">
              <a className="" onClick={() => seti(false)}>
                S
              </a>
              <a className="" onClick={() => seti(false)}>
                P
              </a>
              <a className="" onClick={() => seti(false)}>
                A
              </a>
              <a
                className=""
                style={{ color: i ? "red" : "black" }}
                onClick={() => seti(true)}
              >
                I
              </a>
              <a className="" onClick={() => seti(false)}>
                N
              </a>
            </div>
            <div className="5 flex items-center font-[800] gap-[5px] text-[20px] ">
              <a className="" onClick={() => setn(false)}>
                C
              </a>
              <a className="" onClick={() => setn(false)}>
                H
              </a>
              <a className="" onClick={() => setn(false)}>
                I
              </a>
              <a
                className=""
                style={{ color: n ? "red" : "black" }}
                onClick={() => setn(true)}
              >
                N
              </a>
              <a className="" onClick={() => setn(false)}>
                A
              </a>
            </div>
            </div>
            <button
              className="w-[100px] h-[30px] bg-sky-500 rounded-[5px] font-[600] text-white mt-[20px]"
              onClick={() => brainBlock()}
            >
              Confirm
            </button>
            <div className="flex items-center justify-center h-[300px]">
              <img
                src={brain}
                alt=""
                className="w-[50%]"
                style={{
                  display: brainImg ? "block" : "none",
                }}
              />
              <img
                src={what}
                alt=""
                style={{
                  display: brainImg ? "none" : "block",
                }}
                className="w-[60%]"
              />
            </div>
          </div>
    </div>
  );
};

export default Brain;

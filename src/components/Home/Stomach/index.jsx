import React, { useContext, useState } from "react";
import brain from "../../../assets/image/stomach.png";
import what from "../../../assets/image/what.png";
import { GameContext } from "../../../context";

const Stomach = () => {
  //stomach
  const [s, sets] = useState(false);
  const [t, sett] = useState(false);
  const [o, seto] = useState(false);
  const [m, setm] = useState(false);
  const [a, seta] = useState(false);
  const [c, setc] = useState(false);
  const [h, seth] = useState(false);
  const { stomachImg, setStomachImg } = useContext(GameContext);

  function stomachBlock() {
    if (
      s === true &&
      t === true &&
      o === true &&
      m === true &&
      a === true &&
      c === true &&
      h === true
    ) {
      setStomachImg(true);
    } else {
      alert("You're Wrong!");
    }
  }
  //

  return (
    <div className="mt-[50px]">
      <div className="brain flex items-center flex-col w-[300px] h-[500px] p-5 rounded-[10px] border-2 border-solid border-sky-400">
        <div className="flex items-center flex-col h-[350px]">

        <div className="1 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a
            className=""
            style={{
              color: s ? "red" : "black",
            }}
            onClick={() => sets(true)}
          >
            S
          </a>
          <a className="" onClick={() => sets(false)}>
            P
          </a>
          <a
            className=""
            onClick={() => {
              sets(false);
            }}
          >
            A
          </a>
          <a className="" onClick={() => sets(false)}>
            I
          </a>
          <a className="" onClick={() => sets(false)}>
            N
          </a>
        </div>
        <div className="2 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => sett(false)}>
            E
          </a>
          <a className="" onClick={() => sett(false)}>
            G
          </a>
          <a className="" onClick={() => sett(false)}>
            Y
          </a>
          <a className="" onClick={() => sett(false)}>
            P
          </a>
          <a
            className=""
            style={{ color: t ? "red" : "black" }}
            onClick={() => sett(true)}
          >
            T
          </a>
        </div>
        <div className="3 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => seto(false)}>
            M
          </a>
          <a className="" onClick={() => seto(false)}>
            E
          </a>
          <a className="" onClick={() => seto(false)}>
            X
          </a>
          <a className="" onClick={() => seto(false)}>
            I
          </a>
          <a className="" onClick={() => seto(false)}>
            C
          </a>
          <a
            className=""
            style={{ color: o ? "red" : "black" }}
            onClick={() => seto(true)}
          >
            O
          </a>
        </div>
        <div className="4 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => setm(false)}>
            G
          </a>
          <a className="" onClick={() => setm(false)}>
            E
          </a>
          <a className="" onClick={() => setm(false)}>
            R
          </a>
          <a
            className=""
            style={{ color: m ? "red" : "black" }}
            onClick={() => setm(true)}
          >
            M
          </a>
          <a className="" onClick={() => setm(false)}>
            A
          </a>
          <a className="" onClick={() => setm(false)}>
            N
          </a>
          <a className="" onClick={() => setm(false)}>
            Y
          </a>
        </div>
        <div className="5 flex items-center font-[800] gap-[5px] text-[20px] ">
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
        <div className="5 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => setc(false)}>
            G
          </a>
          <a className="" onClick={() => setc(false)}>
            R
          </a>
          <a className="" onClick={() => setc(false)}>
            E
          </a>
          <a className="" onClick={() => setc(false)}>
            E
          </a>
          <a
            className=""
            style={{ color: c ? "red" : "black" }}
            onClick={() => setc(true)}
          >
            C
          </a>
          <a className="" onClick={() => setc(false)}>
            E
          </a>
        </div>
        <div className="5 flex items-center font-[800] gap-[5px] text-[20px] ">
          <a className="" onClick={() => seth(false)}>
            T
          </a>
          <a
            className=""
            style={{ color: h ? "red" : "black" }}
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
        </div>
        <button
          className="w-[100px] h-[30px] bg-sky-500 rounded-[5px] font-[600] text-white mt-[20px]"
          onClick={() => stomachBlock()}
        >
          Confirm
        </button>
        <div className="flex items-center justify-center h-[300px]">
          <img
            src={brain}
            alt=""
            className="w-[50%]"
            style={{
              display: stomachImg ? "block" : "none",
            }}
          />
          <img
            src={what}
            alt=""
            style={{
              display: stomachImg ? "none" : "block",
            }}
            className="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Stomach;

import React, { useContext, useState } from "react";
import brain from "../../../assets/image/liver.webp";
import what from "../../../assets/image/what.png";
import { GameContext } from "../../../context";

const Liver = () => {
  //liver
  const [l, setl] = useState(false);
  const [i, seti] = useState(false);
  const [v, setv] = useState(false);
  const [e, sete] = useState(false);
  const [r, setr] = useState(false);
  const { liverImg, setLiverImg } = useContext(GameContext);

  function liverBlock() {
    if (l === true && i === true && v === true && e === true && r === true) {
      setLiverImg(true);
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
            <a className="" onClick={() => setl(false)}>
              M
            </a>
            <a className="" onClick={() => setl(false)}>
              O
            </a>
            <a className="" onClick={() => setl(false)}>
              N
            </a>
            <a className="" onClick={() => setl(false)}>
              G
            </a>
            <a className="" onClick={() => setl(false)}>
              O
            </a>
            <a
              className=""
              style={{
                color: l ? "red" : "black",
              }}
              onClick={() => setl(true)}
            >
              L
            </a>
            <a className="" onClick={() => setl(false)}>
              I
            </a>
            <a className="" onClick={() => setl(false)}>
              A
            </a>
          </div>
          <div className="2 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a className="" onClick={() => seti(false)}>
              V
            </a>
            <a className="" onClick={() => seti(false)}>
              A
            </a>
            <a className="" onClick={() => seti(false)}>
              T
            </a>
            <a
              className=""
              style={{ color: i ? "red" : "black" }}
              onClick={() => seti(true)}
            >
              I
            </a>
            <a className="" onClick={() => seti(false)}>
              C
            </a>
            <a className="" onClick={() => seti(false)}>
              A
            </a>
            <a className="" onClick={() => seti(false)}>
              N
            </a>
          </div>
          <div className="3 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a className="" onClick={() => setv(false)}>
              L
            </a>
            <a className="" onClick={() => setv(false)}>
              A
            </a>
            <a className="" onClick={() => setv(false)}>
              T
            </a>
            <a
              className=""
              style={{ color: v ? "red" : "black" }}
              onClick={() => setv(true)}
            >
              V
            </a>
            <a className="" onClick={() => setv(false)}>
              I
            </a>
            <a className="" onClick={() => setv(false)}>
              A
            </a>
          </div>
          <div className="4 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a className="" onClick={() => sete(false)}>
              N
            </a>
            <a className="" onClick={() => sete(false)}>
              I
            </a>
            <a className="" onClick={() => sete(false)}>
              G
            </a>
            <a
              className=""
              style={{ color: e ? "red" : "black" }}
              onClick={() => sete(true)}
            >
              E
            </a>
            <a className="" onClick={() => sete(false)}>
              R
            </a>
          </div>
          <div className="5 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a
              className=""
              style={{ color: r ? "red" : "black" }}
              onClick={() => setr(true)}
            >
              R
            </a>
            <a className="" onClick={() => setr(false)}>
              U
            </a>
            <a className="" onClick={() => setr(false)}>
              S
            </a>
            <a className="" onClick={() => setr(false)}>
              S
            </a>
            <a className="" onClick={() => setr(false)}>
              I
            </a>
            <a className="" onClick={() => setr(false)}>
              A
            </a>
          </div>
        </div>
        <button
          className="w-[100px] h-[30px] bg-sky-500 rounded-[5px] font-[600] text-white mt-[20px]"
          onClick={() => liverBlock()}
        >
          Confirm
        </button>
        <div className="flex items-center justify-center h-[300px] ">
          <img
            src={brain}
            alt=""
            className="w-[50%] "
            style={{
              display: liverImg ? "block" : "none",
            }}
          />
          <img
            src={what}
            alt=""
            style={{
              display: liverImg ? "none" : "block",
            }}
            className="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Liver;

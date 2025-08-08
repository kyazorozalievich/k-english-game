import React, { useContext, useState } from "react";
import brain from "../../../assets/image/lungs.png";
import what from "../../../assets/image/what.png";
import { GameContext } from "../../../context";

const Lungs = () => {
  //lungs
  const [l, setl] = useState(false);
  const [u, setu] = useState(false);
  const [n, setn] = useState(false);
  const [g, setg] = useState(false);
  const [s, sets] = useState(false);
  const { lungsImg, setLungsImg } = useContext(GameContext);

  function lungsBlock() {
    if (l === true && u === true && n === true && g === true && s === true) {
      setLungsImg(true);
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
              B
            </a>
            <a className="" onClick={() => setl(false)}>
              E
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
              A
            </a>
            <a className="" onClick={() => setl(false)}>
              R
            </a>
            <a className="" onClick={() => setl(false)}>
              U
            </a>
            <a className="" onClick={() => setl(false)}>
              S
            </a>
          </div>
          <div className="2 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a
              className=""
              style={{ color: u ? "red" : "black" }}
              onClick={() => setu(true)}
            >
              U
            </a>
            <a className="" onClick={() => setu(false)}>
              K
            </a>
            <a className="" onClick={() => setu(false)}>
              R
            </a>
            <a className="" onClick={() => setu(false)}>
              A
            </a>
            <a className="" onClick={() => setu(false)}>
              I
            </a>
            <a className="" onClick={() => setu(false)}>
              N
            </a>
            <a className="" onClick={() => setu(false)}>
              E
            </a>
          </div>
          <div className="3 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a className="" onClick={() => setn(false)}>
              J
            </a>
            <a className="" onClick={() => setn(false)}>
              A
            </a>
            <a className="" onClick={() => setn(false)}>
              P
            </a>
            <a className="" onClick={() => setn(false)}>
              A
            </a>
            <a
              className=""
              style={{ color: n ? "red" : "black" }}
              onClick={() => setn(true)}
            >
              N
            </a>
          </div>
          <div className="4 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a className="" onClick={() => setg(false)}>
              N
            </a>
            <a className="" onClick={() => setg(false)}>
              I
            </a>
            <a
              className=""
              style={{ color: g ? "red" : "black" }}
              onClick={() => setg(true)}
            >
              G
            </a>
            <a className="" onClick={() => setg(false)}>
              E
            </a>
            <a className="" onClick={() => setg(false)}>
              R
            </a>
            <a className="" onClick={() => setg(false)}>
              I
            </a>{" "}
            <a className="" onClick={() => setg(false)}>
              A
            </a>
          </div>
          <div className="5 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a
              className=""
              style={{ color: s ? "red" : "black" }}
              onClick={() => sets(true)}
            >
              S
            </a>
            <a className="" onClick={() => sets(false)}>
              C
            </a>
            <a className="" onClick={() => sets(false)}>
              O
            </a>
            <a className="" onClick={() => sets(false)}>
              T
            </a>
            <a className="" onClick={() => sets(false)}>
              L
            </a>
            <a className="" onClick={() => sets(false)}>
              A
            </a>
            <a className="" onClick={() => sets(false)}>
              N
            </a>
            <a className="" onClick={() => sets(false)}>
              D
            </a>
          </div>
        </div>
        <button
          className="w-[100px] h-[30px] bg-sky-500 rounded-[5px] font-[600] text-white mt-[20px]"
          onClick={() => lungsBlock()}
        >
          Confirm
        </button>
        <div className="flex items-center justify-center h-[300px] ">
          <img
            src={brain}
            alt=""
            className="w-[50%] "
            style={{
              display: lungsImg ? "block" : "none",
            }}
          />
          <img
            src={what}
            alt=""
            style={{
              display: lungsImg ? "none" : "block",
            }}
            className="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Lungs;

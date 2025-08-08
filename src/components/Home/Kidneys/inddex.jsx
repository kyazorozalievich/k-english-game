import React, { useContext, useState } from "react";
import brain from "../../../assets/image/kidneys.png";
import what from "../../../assets/image/what.png";
import { GameContext } from "../../../context";

const Kidneys = () => {
  //stomach
  const [k, setk] = useState(false);
  const [i, seti] = useState(false);
  const [d, setd] = useState(false);
  const [n, setn] = useState(false);
  const [e, sete] = useState(false);
  const [y, sety] = useState(false);
  const [s, sets] = useState(false);
  const { kidneysImg, setKidneysImg } = useContext(GameContext);

  function kidneysBlock() {
    if (
      k === true &&
      i === true &&
      d === true &&
      n === true &&
      e === true &&
      y === true &&
      s === true
    ) {
      setKidneysImg(true);
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
                color: k ? "red" : "black",
              }}
              onClick={() => setk(true)}
            >
              K
            </a>
            <a className="" onClick={() => setk(false)}>
              Y
            </a>
            <a
              className=""
              onClick={() => {
                setk(false);
              }}
            >
              R
            </a>
            <a className="" onClick={() => setk(false)}>
              G
            </a>
            <a className="" onClick={() => setk(false)}>
              Y
            </a>
            <a className="" onClick={() => setk(false)}>
              Z
            </a>
            <a className="" onClick={() => setk(false)}>
              S
            </a>
            <a className="" onClick={() => setk(false)}>
              T
            </a>
            <a className="" onClick={() => setk(false)}>
              A
            </a>
            <a className="" onClick={() => setk(false)}>
              N
            </a>
          </div>
          <div className="2 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a
              className=""
              style={{ color: i ? "red" : "black" }}
              onClick={() => seti(true)}
            >
              I
            </a>
            <a className="" onClick={() => seti(false)}>
              R
            </a>
            <a className="" onClick={() => seti(false)}>
              A
            </a>
            <a className="" onClick={() => seti(false)}>
              N
            </a>
          </div>
          <div className="3 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a
              className=""
              style={{ color: d ? "red" : "black" }}
              onClick={() => setd(true)}
            >
              D
            </a>
            <a className="" onClick={() => setd(false)}>
              U
            </a>
            <a className="" onClick={() => setd(false)}>
              B
            </a>
            <a className="" onClick={() => setd(false)}>
              A
            </a>
            <a className="" onClick={() => setd(false)}>
              I
            </a>
          </div>
          <div className="4 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a className="" onClick={() => setn(false)}>
              K
            </a>
            <a className="" onClick={() => setn(false)}>
              A
            </a>
            <a className="" onClick={() => setn(false)}>
              Z
            </a>
            <a className="" onClick={() => setn(false)}>
              K
            </a>
            <a className="" onClick={() => setn(false)}>
              H
            </a>
            <a className="" onClick={() => setn(false)}>
              S
            </a>
            <a className="" onClick={() => setn(false)}>
              T
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
            <a className="" onClick={() => sete(false)}>
              U
            </a>
            <a className="" onClick={() => sete(false)}>
              Z
            </a>
            <a className="" onClick={() => sete(false)}>
              B
            </a>
            <a
              className=""
              style={{ color: e ? "red" : "black" }}
              onClick={() => sete(true)}
            >
              E
            </a>
            <a className="" onClick={() => sete(false)}>
              K
            </a>
            <a className="" onClick={() => sete(false)}>
              I
            </a>
            <a className="" onClick={() => sete(false)}>
              S
            </a>
            <a className="" onClick={() => sete(false)}>
              T
            </a>
            <a className="" onClick={() => sete(false)}>
              A
            </a>
            <a className="" onClick={() => sete(false)}>
              N
            </a>
          </div>
          <div className="5 flex items-center font-[800] gap-[5px] text-[20px] ">
            <a className="" onClick={() => sety(false)}>
              I
            </a>
            <a className="" onClick={() => sety(false)}>
              T
            </a>
            <a className="" onClick={() => sety(false)}>
              A
            </a>
            <a className="" onClick={() => sety(false)}>
              L
            </a>
            <a
              className=""
              style={{ color: y ? "red" : "black" }}
              onClick={() => sety(true)}
            >
              Y
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
          onClick={() => kidneysBlock()}
        >
          Confirm
        </button>
        <div className="flex items-center justify-center h-[300px]">
          <img
            src={brain}
            alt=""
            className="w-[50%]"
            style={{
              display: kidneysImg ? "block" : "none",
            }}
          />
          <img
            src={what}
            alt=""
            style={{
              display: kidneysImg ? "none" : "block",
            }}
            className="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Kidneys;

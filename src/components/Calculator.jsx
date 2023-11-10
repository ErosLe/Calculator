import React, { useRef } from "react";
import "./Calculator.css";

function Calculator(props) {
  const operat = () => {
    props.oper(props.array, props.signs);
  };
  //const tobring = Number(refer.value);
  const toColl = (e) => {
    e.preventDefault();
    //console.log(`refer: ${refer}`);
    props.handleInput(e.target.value);
  };
  const toSign = (e) => {
    e.preventDefault();
    //console.log(refer);
    props.signInput(e.target.value);
  };
  return (
    <main id="container">
      <div id="screen">
        <div className="input">{props.array}</div>
        <p>{props.array}</p>
        {/* <input
          onChange={toColl}
          id="input"
          type="number"
          placeholder="0"
        ></input> */}
      </div>
      <section id="numbers">
        <div id="keyboard">
          <button value={"1"} id="1st" type="button" onClick={toColl}>
            1
          </button>
          <button value={"2"} id="2nd" type="button" onClick={toColl}>
            2
          </button>
          <button value={"3"} id="3rd" type="button" onClick={toColl}>
            3
          </button>
          <button value={"+"} id="plus" type="button" onClick={toSign}>
            +
          </button>
          <button value={"4"} id="4th" type="button" onClick={toColl}>
            4
          </button>
          <button value={"5"} id="5ft" type="button" onClick={toColl}>
            5
          </button>
          <button value={6} id="6th" type="button" onClick={toColl}>
            6
          </button>
          <button value={"-"} id="minus" type="button" onClick={toSign}>
            -
          </button>
          <button value={"7"} id="7th" type="button" onClick={toColl}>
            7
          </button>
          <button value={"8"} id="8th" type="button" onClick={toColl}>
            8
          </button>
          <button value={9} id="9th" type="button" onClick={toColl}>
            9
          </button>
          <button value={"*"} id="multipler" type="button" onClick={toSign}>
            *
          </button>
          <button value={"0"} id="zero" type="button" onClick={toColl}>
            0
          </button>
          <button value={"clear"} id="clear" type="button" onClick={toColl}>
            ce
          </button>
          <button value={"="} id="equal" type="button" onClick={operat}>
            =
          </button>
          <button value={"/"} id="divider" type="button" onClick={toSign}>
            /
          </button>
        </div>
      </section>
      <section id="ops">
        <div id="operators"></div>
      </section>
    </main>
  );
}

export default Calculator;

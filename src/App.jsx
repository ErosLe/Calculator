import { useEffect, useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [datas, setDatas] = useState(Number(0));
  const [sign, setSign] = useState("+");
  useEffect(() => {
    console.log(datas);
    //console.log(sign);
  }, [datas]);
  const fordatas = (x) => {
    //setDatas((prev) => [...prev, Number(x)]);
    setDatas((prev) =>
      sign === "+"
        ? prev + Number(x)
        : sign === "*"
        ? prev * Number(x)
        : sign === "-"
        ? prev - Number(x)
        : sign === "/"
        ? prev / Number(x)
        : prev
    );
    // {
    //   if (sign === "+") {
    //     prev = datas + x;
    //     // ` ${Number(prev) + Number(x)}`;
    //   } else if (sign === "*") {
    //     prev = ` ${prev * Number(x)}`;
    //     console.log(prev);
    //   } else if (sign === "-") {
    //     prev = ` ${prev - Number(x)}`;
    //   } else if (sign === "/") {
    //     prev = ` ${prev / Number(x)}`;
    //   }
    // });
  };
  useEffect(() => {
    // console.log(sign);
  });
  const forSign = (y) => {
    setSign(y);
  };
  const opp = (ar, n) => {
    //console.log(ar != "" && ar.reduce((a, b) => Number(a) + Number(b), 0));
    // console.log(ar != "" && ar.join(`${n}`));
    // console.log(ar);
  };
  return (
    <>
      <Calculator
        handleInput={fordatas}
        signInput={forSign}
        array={datas}
        signs={sign}
        oper={opp}
      />
    </>
  );
}

export default App;

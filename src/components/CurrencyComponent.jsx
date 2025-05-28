import Select from "react-select";
import { HiSwitchHorizontal } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Axios } from "axios";

export default function CurrencyComponent() {
  // STATE LOGIC
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  //Async API Call
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  //Handlers, Functions
  function convert() {
    let rate = info[to];
    setOutput(input*rate);
  }

  function flip() {
    let temp = from;
    setFrom(to);
    setTo(to);
  }

  return (
    <>
      <div className="App">
        <div className="heading">
          <h1>Currency converter</h1>
        </div>
        <div className="container">
          <div className="left">
            <h3>Amount</h3>
            <input type="text" placeholder="Enter the amount" onChange={0} />
          </div>
          <div className="middle">
            <h3>From</h3>
            <Select
              options={0}
              onChange={
                0
                /*(selectedOption) => setFrom(selectedOption?.value)*/
              }
              value={
                0
                /* options.find((option) => option.value === from)*/
              }
              placeholder="From"
            />
          </div>
          <div className="switch">
            <HiSwitchHorizontal size="30px" onClick={0} />
          </div>
          <div className="right">
            <h3>To</h3>
            <Select
              options={0}
              onChange={
                0
                /*(selectedOption) => setTo(selectedOption?.value)*/
              }
              value={
                0
                /*options.find((option) => option.value === to)*/
              }
              placeholder="To"
            />
          </div>
        </div>
        <div className="result">
          <button onClick={0}>Convert</button>
          <h2>Converted Amount</h2>
          <p>0</p>
        </div>
      </div>
    </>
  );
}

import Select from "react-select";
import { HiSwitchHorizontal } from "react-icons/hi";

export default function CurrencyComponent() {
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

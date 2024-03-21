/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [info, setInfo] = useState([]);
  const [options, setOptions] = useState([]);
  const [output, setoutput] = useState();

  useEffect(() => {
    axios
      .get(
        ``
      )
      .then((res) => {
        setInfo(res.data[from]);
      })
      .catch((err) => console.log(err));
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    Convert();
  }, [info]);

  const Convert = () => {
    const rate = info[to];
    setoutput(amount * rate);
  };

  return (
    <>
      <div className="App">
        <div className="converter">
          <div className="heading">
            <h4>
              <img />
              Currency Convertor
            </h4>
          </div>
          <div className="container">
            <div className="left">
              <h4>Amount</h4>
              <input
                type="text"
                placeholder="enter amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="middle">
              <h4>From</h4>
              <select onChange={(e) => setFrom(e.target.value)} value={from}>
                {options.map((o) => (
                  <option value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="right">
              <h4>To</h4>
              <select onChange={(e) => setTo(e.target.value)} value={to}>
                {options.map((o) => (
                  <option value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="result">
              <h5>Your Amount</h5>
              <h5>{amount + " " + from + " = " + output + " " + to}</h5>
              <button onClick={Convert}>Convert</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

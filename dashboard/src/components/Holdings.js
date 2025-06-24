import React, {useState, useEffect} from "react";
import axios from 'axios';
// import { holdings } from "../data/data";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [all_holdings, setAll_holdings] = useState([]);
  useEffect(() => {
     axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAll_holdings(res.data);
     })
  }, []); 

  const labels = all_holdings.map((stock_name) => stock_name["name"]);

  const data = {
    labels,
    datasets: [
    {
      label: 'Stock Name',
      data: all_holdings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

  return (
    <>
      <h3 className="title">Holdings ({all_holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {all_holdings.map((stock, index) => {
            const curr_value = stock.price * stock.qty;
            const is_profit = curr_value - stock.avg*stock.qty >= 0.0;
            const class_profit = is_profit ? "profit" : "loss";
            const is_day_profit = stock.day.startsWith("-");
            const day_class = is_day_profit ? "loss" : "profit";

            return(
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{curr_value.toFixed(2)}</td>
              <td className={class_profit}>{(curr_value - stock.avg*stock.qty).toFixed(2)}</td>
              <td className={class_profit}>{stock.net}</td>
              <td className={day_class}>{stock.day}</td>
            </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;

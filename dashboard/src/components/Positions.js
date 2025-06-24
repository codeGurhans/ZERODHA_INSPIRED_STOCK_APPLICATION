import React, {useState, useEffect} from "react";
import axios from 'axios';
// import { positions } from "../data/data";

const Positions = () => {
  const [all_positions, setAll_positions] = useState([]);
  useEffect(() => {
     axios.get("http://localhost:3002/allPositions").then((res) => {
      setAll_positions(res.data);
     })
  }, []); 
  
  return (
    <>
      <h3 className="title">Positions ({all_positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

            {all_positions.map((stock, index) => {
            const is_profit = stock.isLoss ? "loss" : "profit";
            const is_day_profit = stock.day.startsWith("-");
            const day_class = is_day_profit ? "loss" : "profit";
            return(
            <tr key={index}>
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td className={is_profit}>{(stock.price*stock.qty - stock.avg*stock.qty).toFixed(2)}</td>
              <td className={day_class}>{stock.day}</td>
            </tr>
            );
          })}          
        </table>
      </div>
    </>
  );
};

export default Positions;

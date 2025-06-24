import React, {useState, useEffect} from "react";
import axios from "axios";

const Orders = () => {
  const [all_orders, setAll_orders] = useState([]);
  useEffect(() => {
     axios.get("http://localhost:3002/allOrders").then((res) => {
      setAll_orders(res.data);
     })
  }, []);

  return (
    <>
      <h3 className="title">Orders ({all_orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

            {all_orders.map((stock, index) => {
            return(
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{stock.mode}</td>
            </tr>
            );
          })}          
        </table>
      </div>
    </>
  );
};

export default Orders;

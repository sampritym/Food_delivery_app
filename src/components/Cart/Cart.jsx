import React from 'react';

import { useCart, useDispatchCart } from '../ContextReducer';
import styles from './Cart.module.css'; 

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.message}>The Cart is Empty!</div>
      </div>
    );
  }

//   const handleCheckOut = async () => {
//     let userEmail = localStorage.getItem("userEmail");
//     let response = await fetch("http://localhost:5000/api/auth/orderData", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         order_data: data,
//         email: userEmail,
//         order_date: new Date().toDateString()
//       })
//     });
//     if (response.status === 200) {
//       dispatch({ type: "DROP" });
//     }
//   }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className={styles.cartContainer}>
      <table className={styles.cartTable}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Option</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{food.name}</td>
              <td>{food.qty}</td>
              <td>{food.size}</td>
              <td>{food.price}</td>
              <td>
                <button className={styles.deleteButton} onClick={() => dispatch({ type: "REMOVE", index: index })}>
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.totalPrice}>
        <h1>Total Price: {totalPrice/-</h1>
      </div>
      <div className={styles.checkOutButton}>
        <button onClick={handleCheckOut}>Check Out</button>
      </div>
    </div>
  );
}

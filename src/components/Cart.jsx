import React from 'react';
import { useCart, useDispatchCart } from './ContextReducer';
import styles from './Cart.module.css'; 
import Navbar from './Navbar/Navbar';
import axios from 'axios';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE', index });
  };



const handleCheckOut = async () => {
  let userEmail = localStorage.getItem("userEmail");

  try {
    const response = await axios.post("http://localhost:3000/api/orderDetail", {
      order_data: data,
      email: userEmail,
      order_date: new Date().toDateString()
    } , {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("order",response)
    console.log("JSON RESPONSE:::::", response.status);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  } catch (error) {
    console.error("Error during checkout:", error);
   
  }
}


  const totalPrice = data.reduce((total, item) => total + item.price * item.qty, 0);

  if (data.length === 0) {
    return (
        <>
        <Navbar/>
      <div className={styles.emptyCart}>
        <h2 className={styles.emptyCartText}>Your cart is empty</h2>
      </div>
      </>
    );
  }

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>#</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Total</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles.td}>{index + 1}</td>
              <td className={styles.td}>{item.name}</td>
              <td className={styles.td}>{item.qty}</td>
              <td className={styles.td}>{item.price}</td>
              <td className={styles.td}>{item.price * item.qty}</td>
              <td className={styles.td}>
                <button className={styles.removeButton} onClick={() => handleRemove(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.total}>
        <h2>Total Price: Rs.{totalPrice}</h2>
        <h3 onClick={handleCheckOut}>Checkout</h3>
      </div>
    </div>
    </>
  );
}

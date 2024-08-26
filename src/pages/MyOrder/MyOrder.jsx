import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import styles from './MyOrder.module.css'; // Import the CSS module
import axios from 'axios';

export default function MyOrder() {

    const [orderData, setOrderData] = useState({})

    const fetchMyOrder = async () => {
        try {
        
            const userEmail = localStorage.getItem('userEmail');
            
            if (!userEmail) {
                throw new Error('User email is not available in localStorage');
            }
    
     
            const response = await axios.post('http://localhost:3000/api/myOrderData', {
                email: userEmail
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
          
            setOrderData(response.data);
    
        } catch (error) {
           
            console.error('Error fetching order data:', error);
       
        }
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div>
                <div className={styles.orderList}>

                    {Object.keys(orderData).length > 0 ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item,itemIndex) => {
                                    return (
                                        item.map((arrayData) => {
                                            const uniqueKey = `${itemIndex}-${arrayData.id}`;
                                            return (
                                                <div key={uniqueKey}  className={styles.orderItem} >
                                                    {arrayData.Order_date ? (
                                                        <div className={styles.orderDate}>

                                                            {data = arrayData.Order_date}
                                                           
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <div >
                                                               
                                                                <div>
                                                                    <h5 >{arrayData.name}</h5>
                                                                    <div className={styles.orderDetails}>
                                                                      
                                                                        <span >Qty:{arrayData.qty}</span>
                                                                        <span>{data}</span>
                                                                        <div className={styles.price} >
                                                                            Total:₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })
                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>
            </div>

       
        </div>
    )
}

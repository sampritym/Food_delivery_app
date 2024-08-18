import React, { useState } from 'react';
import axios from 'axios';
import{Link,useNavigate} from 'react-router-dom'

import styles from './Login.module.css'; 
import Navbar from '../../components/Navbar/Navbar';

const Login = () => {

 
  const [formData, setFormData] = useState({
   
    email: '',
    password: ''
    
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
    let navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:3000/api/loginuser', formData);

     
    
      setSuccess(true);
      setError(null);
      if(response.data.success){

        
        
      setSuccess(true);
      setError(null);
       localStorage.setItem("authToken",response.data.authToken);
      
        navigate("/")
      }else{
        setError('Invalid credentials');
      }

     
    } catch (error) {
     
      console.error('Error in posting credentials', error);
      setError('Invalid credentials'); 
      setSuccess(false);
    }
  };

  return (
   <>
   <div><Navbar/></div>
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <br/>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>Password:</label>
          <br/>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>
       
        <button type="submit" className={styles.button}>Login</button>
        <button className={styles.button}><Link to="/Register">New User</Link></button>

      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>User created successfully!</p>}
    </div>
    </>
  );
};

export default Login;
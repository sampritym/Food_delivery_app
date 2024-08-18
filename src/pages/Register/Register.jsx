import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Register.module.css'; 
import Navbar from '../../components/Navbar/Navbar'

const Register = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location:''
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:3000/api/newuser', formData);

     
      console.log('User created successfully:', response.data);
      setSuccess(true);
      setError(null);

     
    } catch (error) {
     
      console.error('Error creating user:', error);
      setError('Error creating user. Please try again.'); 
      setSuccess(false);
    }
  };

  return (
   <>
   <div><Navbar/></div>
    <div className={styles.container}>
      <h2 className={styles.heading}>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <br/>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>
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
        <div>
          <label htmlFor="location" className={styles.label}>Address:</label>
          <br/>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Register</button>
        <button className={styles.button}><Link to="/Login">Already a user</Link></button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>User created successfully!</p>}
    </div>
    </>
  );
};

export default Register;

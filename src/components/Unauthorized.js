import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Unauthorized.scss';

const Unauthorized = () => {
  return (
    <div className='container'>
      <div class="message">
        <h1>403 - Not Authorized</h1>
        <p>This is not the web page you are looking for</p>
      </div>
      <p><Link to='/'>Back to Home</Link></p>
    </div>
  )
}

export default Unauthorized;
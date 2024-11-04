import React from 'react';
import '../AdminPanel/AdminIndex.css';
import UpdatePasword from './UpdatePasword';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className="main-head" >
      <div className='main-head2'>
      <h1>GUNS-<span>HOLSTER</span>.COM</h1>
      <div style={{display:'flex ',alignItems:'center '}}>
      <Link to='/logout' style={{ textDecoration: 'none', color: 'inherit' }}>
    Logout
  </Link>
      <UpdatePasword/>
      </div>
      </div>
    </div>  
  );
};

export default Main;

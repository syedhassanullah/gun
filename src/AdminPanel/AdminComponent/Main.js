import React from 'react';
import '../AdminPanel/AdminIndex.css';
import UpdatePasword from './UpdatePasword';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className="main-head" >
      <div className='main-head2'>
        <h1>GUNS-<span>HOLSTER</span>.COM</h1>
        <div className='main-in'style={{ display: 'flex ', alignItems: 'center ' }}>
        <UpdatePasword />
          <Link to='/logout' className='main-small-button' style={{margin:'0px',marginLeft:"10px"}}>
            Logout
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Main;

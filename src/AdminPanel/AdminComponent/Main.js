import React from 'react';
import '../AdminPanel/AdminIndex.css';
import UpdatePasword from './UpdatePasword';

const Main = () => {
  return (
    <div className="main-head" >
      <div className='main-head2'>
      <h1>GUNS-<span>HOLSTER</span>.COM</h1>
      <UpdatePasword/>
      </div>
    </div>  
  );
};

export default Main;

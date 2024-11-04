import React, { useState } from 'react';
import Sidebar from '../AdminComponent/Sidebar';
import './AdminIndex.css';
import { Outlet } from 'react-router-dom';
import Main from '../AdminComponent/Main';
import { Container } from 'react-bootstrap';

const AdminIndex = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar); // Toggle sidebar visibility
    };
    const disableSideBar = () => {
        setShowSidebar(false);
    };



    return (
        <div className='adminindex'>
            <div className={`sidebar-wrapper ${showSidebar ? 'active' : ''}`}>

                <Sidebar onToggleSidebar={handleToggleSidebar} click={disableSideBar} />
            </div>
            <div className='main'>
                <div className='header1'>
                    <Main />
                </div>
                <div className='main-content'>


                    <Container fluid>
                        <Outlet />
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default AdminIndex;
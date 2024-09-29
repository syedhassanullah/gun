import React, { useState } from 'react';
import { Container, Row, Col, Button, Offcanvas,} from 'react-bootstrap';
import Sidebar from '../AdminComponent/Sidebar';
import './AdminIndex.css';
import { Outlet } from 'react-router-dom';
import Main from '../AdminComponent/Main';

const AdminIndex = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar); // Toggle sidebar visibility
    };

    return (
        <div className='adminindex'>
            <div className={`sidebar-wrapper ${showSidebar ? 'active' : ''}`}>
                <Sidebar onToggleSidebar={handleToggleSidebar} />
            </div>
            <div className='main'>
                <div className='header1'>
                    <Main />
                </div>
                <div className='main-content'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminIndex;
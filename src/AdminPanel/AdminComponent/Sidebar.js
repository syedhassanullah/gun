import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../AdminPanel/AdminIndex.css';

const Sidebar = ({ onToggleSidebar }) => {
    return (
        <>
            {/* Toggle button */}
            <div className="toggle-sidebar" onClick={onToggleSidebar}>
                <FontAwesomeIcon icon={faBars} /> {/* Hamburger icon */}
            </div>

            {/* Sidebar */}
            <div className="sidebar">
                <div>
                    <h1>Hi Admin</h1>
                </div>
                <div className="link">
                    <Nav.Link as={Link} to="/admin">Home</Nav.Link>
                    <Nav.Link as={Link} to="/admin/product">Product Listing</Nav.Link>
                    <Nav.Link as={Link} to="/admin/product2">Orders</Nav.Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;

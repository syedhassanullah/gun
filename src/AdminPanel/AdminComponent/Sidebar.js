import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../AdminPanel/AdminIndex.css';

const Sidebar = ({ onToggleSidebar, click }) => {
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
                    <Nav.Link as={Link} onClick={click} to="/admin">Home</Nav.Link>
                    <Nav.Link as={Link} onClick={click} to="/admin/product-listing">Product Listing</Nav.Link>
                    <Nav.Link as={Link} onClick={click} to="/admin/product2">Orders</Nav.Link>
                    <Nav.Link as={Link} onClick={click} to="/admin/listed-product">Listed-Product</Nav.Link>


                </div>
            </div>
        </>
    );
};

export default Sidebar;

import CartButton from '../Cart/CartButton';
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const username = useSelector(state => state.login.username);
  const categories = useSelector(state => state.products.categories)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Link to="/">Books Shop</Link>
      </Nav>
      {Object.keys(categories).map((category, index) => (
        <Nav
          className="mr-auto"
          key={index}
        >
          <Link to={`/category/${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        </Nav>
      ))}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/login">Login</Link>
        </Nav>
        {username &&
          <>
            <Nav className="mr-auto">
              <Link to="/add-product">Add Product</Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/logout">Logout</Link>
            </Nav>
          </>
        }
        <Nav>
          <CartButton />
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>
  );
}

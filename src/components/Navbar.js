import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import {ButtonContainer} from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand"/>         
        </Link>
        

        <ul className="navbar-nav align-items-center">
          <li><h6>Call us on +917559622860</h6></li>
          <li className="nav-item ml-5">
             <Link to="/" className="nav-link">
             All Products
             </Link>
             
          </li>
          
        </ul>

        <Link className="ml-auto" to="/cart">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              My Cart
            </ButtonContainer> 
        </Link>

      </nav>
      </div>
    )
  }
}


const NavbarWrapper = styled.nav`
    background: var(--blue);
    .nav-link {
      color: var(--mainBlack) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
    }


`


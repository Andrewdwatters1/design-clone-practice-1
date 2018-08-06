import React, { Component } from 'react';
import '../App.css';

export default class NavBar extends Component {

  toggleDropdown = () => {
    let targetElement = document.getElementsByClassName("nav-hidden")
    console.log(targetElement);
    targetElement[0].classList.toggle('nav-dropdown');
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="nav-title">
            Start Bootstrap
          </div>

          <div className="nav-items">
            <span className="nav-links">SERVICES</span>
            <span className="nav-links">PORTFOLIO</span>
            <span className="nav-links">ABOUT</span>
            <span className="nav-links">TEAM</span>
            <span className="nav-links">CONTACT</span>
            <button class="fas fa-bars" aria-hidden="true" onClick={this.toggleDropdown}>MENU</button>
          </div>
        </div>

        <div hidden="true" class="nav-hidden">
          <button>SERVICES</button>
          <button>PORTFOLIO</button>
          <button>ABOUT</button>
          <button>TEAM</button>
          <button>CONTACT</button>
        </div>

      </div>
    )
  }
}
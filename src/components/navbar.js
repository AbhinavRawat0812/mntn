import React from 'react';
import './components.css';

function navbar() {
  return (
        <nav class="navbar navbar-expand-lg navbar-light p-4 navbar-dark">
            <a class="navbar-brand mntn_logo_head" href="#">MNTN</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Equipment <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                </ul>
                <span class="navbar-text">
                    <img src='account_logo.png' alt='account'/>    
                    <a href='/' style={{marginLeft:"2%"}}>Account</a>
                </span>
            </div>
    </nav>
  )
}

export default navbar
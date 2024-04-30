import React from 'react'

function footer() {
  return (
    <div className='footer_container mx-auto d-flex flex-row' style={{width:"60%"}}>
        <div className='f_c1' style={{width:"60%"}}>
            <h3>MNTN</h3>
            <p>Get out there & discover your next <br/>slope, mountain & destination!</p>
            <p id='copyright'>Copyright 2023 MNTN, Inc. Terms & Privacy</p>
        </div>
        <div className='f_c2' style={{width:"20%"}}>
            <h6>More on the Blog</h6>
            <ul>
                <li><a href='/'>About MNTN</a></li>
                <li><a href='/'>Contributors & Writers</a></li>
                <li><a href='/'>Write For Us</a></li>
                <li><a href='/'>Contact Us</a></li>
                <li><a href='/'>Privacy Policy</a></li>
            </ul>
        </div>
        <div className='f_c3' style={{width:"20%"}}>
            <h6>More on MNTN</h6>
            <ul>
                <li><a href='/'>The Team</a></li>
                <li><a href='/'>Jobs</a></li>
                <li><a href='/'>Press</a></li>
            </ul>
        </div>
    </div>
  )
}

export default footer
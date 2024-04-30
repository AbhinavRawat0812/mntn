import React from 'react'
import Navbar from '../components/navbar'
import './pages.css'
import InfoDisplayBox1 from '../components/infoDisplayBox1'
import InfoDisplayBox2 from '../components/infoDisplayBox2'
import InfoDisplayBox3 from '../components/infoDisplayBox3'
import Footer from '../components/footer'


function landingPage() {
  return (
    <div className='landingPage_container'>
        <div className='bg_container'>
            <Navbar/>
            <div className='d-flex flex-row p-4' style={{color:"white",height:"50%", marginTop:"5%"}}>
                <div className='socialHandle' style={{width:"10%"}}>
                    <h6>Follow Us</h6>
                    <a href='/'><img src='insta_src.png' alt='instagram' height={20} width={20} /></a>
                    <a href='/'><img src='twitter_logo.png' alt='instagram' height={15} width={20} /></a>
                </div>
                <div className='main_heading' style={{width:"80%"}}>
                    <span style={{color:"#FBD784"}}>——— &nbsp; <span style={{letterSpacing:"3px"}}>A HIKING GUIDE</span></span>
                    <h1>Be Prepared For The <br/>Mountains And Beyond!</h1>
                    <p>scroll down &#8595;</p>
                </div>
                <div className='nav_slider d-flex flex-row' style={{width:"10%"}}>
                        <div className='slider_text'>
                            <div style={{textAlign:"right",width:"40%",marginRight:"10%"}}>
                                <h6>Start</h6><br/>
                                <h6>01</h6><br/>
                                <h6>02</h6><br/>
                                <h6>03</h6><br/>    
                            </div>
                            <hr></hr>
                            <hr id='current_page'></hr>
                        </div>
                </div>
            </div>
        </div>
        <div className='content_container bg-transparent'>
            <InfoDisplayBox1/>
            <InfoDisplayBox2/>
            <InfoDisplayBox3/>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
    </div>
  )
}

export default landingPage
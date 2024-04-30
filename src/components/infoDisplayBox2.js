import React from 'react';

function infoDisplayBoxR() {
  return (
            <div className='content_box mx-auto' style={{width:"60%",height:"60vh", marginBottom:"5%"}}>
                <div className='d-flex flex-row'>
                    <div class="p-2 bd-highlight info_display_box3">
                        <img src='img2.jfif' width={"100%"} height={"100%"}/>
                    </div>
                    <div class="p-2 bd-highlight info_display_box1">
                        <h1 id='info_display_serial_no'>02</h1>
                    </div>
                    <div class="p-2 bd-highlight info_display_box2">
                        <span>——— &nbsp;GET STARTED</span>
                        <h1>Picking the right Hiking Gear!</h1>
                        <p>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. </p>
                        <span>read more &#8594;</span>
                    </div>
                    
                </div>  
            </div>
  )
}

export default infoDisplayBoxR
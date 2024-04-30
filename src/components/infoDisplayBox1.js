import React from 'react';

function infoDisplayBox() {
  return (
            <div className='content_box mx-auto' style={{width:"60%",height:"60vh",marginBottom:"5%"}}>
                <div className='d-flex flex-row'>
                    <div class="p-2 bd-highlight info_display_box1">
                        <h1 id='info_display_serial_no'>01</h1>
                    </div>
                    <div class="p-2 bd-highlight info_display_box2">
                        <span>——— &nbsp; GET STARTED</span>
                        <h1>What level of hiker are you ?</h1>
                        <p>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
                        <span>read more &#8594;</span>
                    </div>
                    <div class="p-2 bd-highlight info_display_box3">
                        <img src='img1.png' width={"100%"} height={"100%"}/>
                    </div>
                </div>  
            </div>
  )
}

export default infoDisplayBox
import React from 'react';

function infoDisplayBox() {
  return (
            <div className='content_box mx-auto' style={{width:"60%",height:"60vh",marginBottom:"5%"}}>
                <div className='d-flex flex-row'>
                    <div class="p-2 bd-highlight info_display_box1">
                        <h1 id='info_display_serial_no'>03</h1>
                    </div>
                    <div class="p-2 bd-highlight info_display_box2">
                        <span>——— &nbsp; WHERE YOU GO IS THE KEY</span>
                        <h1>Understand Your Map & Timing</h1>
                        <p>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
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
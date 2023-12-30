import React from 'react'
import { MdDirectionsTransit } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { BsMusicPlayer } from "react-icons/bs";
import { MdOutlineAddCard } from "react-icons/md";
import './../comp/style/WhatWe.css'
import './../comp/style/Media.css'
function WhatWeDo() {
  return (
    <div className='WhatWeDo' >

        <div className='Free-Delivery'>
        <div className='Free-Delivery-Icon'>

        <MdDirectionsTransit className='iconn' />
        </div>
            <div className='Free-data'>
                <h2>Free Delivery</h2>
                <p>WorldWide</p>
            </div>
        </div>
        <div className='Free-Delivery'>
        <div className='Free-Delivery-Icon'>

        <FaMoneyBill className='iconn' />
</div>
            <div className='Free-data'>
                <h2>Free Delivery</h2>
                <p>WorldWide</p>
            </div>
        </div>
        <div className='Free-Delivery'>
        <div className='Free-Delivery-Icon'>

        <BsMusicPlayer className='iconn' />
</div>
            <div className='Free-data'>
                <h2>Free Delivery</h2>
                <p>WorldWide</p>
            </div>
        </div>
        <div className='Free-Delivery'>
        <div className='Free-Delivery-Icon'>

        <MdOutlineAddCard className='iconn' />
</div>
            <div className='Free-data'>
                <h2>Free Delivery</h2>
                <p>WorldWide</p>
            </div>
        </div>


    </div>
  )
}

export default WhatWeDo
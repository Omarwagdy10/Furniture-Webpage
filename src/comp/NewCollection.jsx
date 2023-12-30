import React from 'react'
import img1 from './../img/courselimg/furniture_banner8-removebg-preview.png'
import img2 from './../img/courselimg/furniture_banne7-removebg-preview.png'
import "./../comp/style/NewColection.css"

function NewCollection() {
  return (
    <div className='New-Collection'>

    <div className='New-ls'>
        <div className='New-ls-data'>
            <p className='p4'>Super Sale</p>
            <h4>New Collection</h4>
            <p className='p5'>
            Shop Now
            <span></span>
            </p>
        </div>

        <div className='New-ls-img'>
            <img className='imgg' src={img1} alt=''/>
        </div>
    </div>


    <div className='New-rs'>

    <div className='New-rs-container'>

        <div className='New-rs-data'>
            <p className='p4'>Super Sale</p>
            <h4>New Collection</h4>
            <p className='p5'>
            Shop Now
            <span></span>
            </p>
        </div>

        <div className='New-rs-img'>
            <img className='img' src={img2} alt=''/>
        </div>
    </div>

    </div>



    </div>
  )
}

export default NewCollection
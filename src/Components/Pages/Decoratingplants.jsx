import React from 'react'
import Navbar from '../Navbar/Navbar'
import rose from '../Assets/rose.jpg';
import carnation  from '../Assets/kaneshan.jpg';
import araliya from '../Assets/araliya.jpg';
import lotus from '../Assets/lotus.jpg';
import christmas from '../Assets/christmasplant.jpg';
import './Decoratingplants.css'

export default function Decoratingplants() {
  return (
    <div className="Decoratingplants">
    <Navbar/>
            <div className="decoratingplantspicture_bar">
                    <div className='img-cont'>
                        <img height="300" width="100%" className="rose" src={rose} alt=""></img>
                        <button className="button_btn"><h3>View</h3></button> 
                    </div>

                    <div className='img-cont'>
                        <img height="300" width="100%" className="carnation" src={carnation} alt=""></img>
                        <button className="button_btn"><h3>View</h3></button> 
                    </div>

                    <div className='img-cont'>
                        <img height="300" width="100%" className="lotus" src={lotus} alt=""></img>
                        <button className="button_btn"><h3>View</h3></button> 
                    </div>

                    <div className='img-cont'>
                        <img height="300" width="100%" className="araliya" src={araliya} alt=""></img>
                        <button className="button_btn"><h3>View</h3></button> 
                    </div>

                    <div className='img-cont'>
                        <img height="300" width="100%" className="christmas" src={christmas} alt=""></img>
                        <button className="button_btn"><h3>View</h3></button> 
                    </div>

                    
                    

</div>

    </div>
  )
}

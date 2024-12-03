import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'

export default function Contact(){
  return (
    <div> 
        <Navbar/>
    
    <div className='container'>

        <div className='form-container'>
            <label for="name">Full Name</label>
            <input type="text" className='form-field' id="name" name="name" required/>

            <label for="email">Email</label>
            <input type="email" className='form-field' id="email" name="email" required></input>

            <label for="remark">Remark</label>
            <input type="remark" className='form-field' id="remark" name="remark" required></input>

            <div className='button-container'>
                <button className='button-form' >Submit</button>
            </div>
        </div>

    </div>

    </div>  
        
  )
}



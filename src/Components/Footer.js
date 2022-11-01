
import './Footer.css'
import React, { useState } from 'react'
function Footer() {
  const [data, setData] = useState('')
    const fetchMail = (e) => {
        fetch('https://email-collector-eaea8-default-rtdb.asia-southeast1.firebasedatabase.app/subscription.json',
        {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                mail : data
            })
        })
       
    }
  return (
    <div className='sim'>
    <div id='marker'>
      <ul>
          <li id='first'>
            Company Info
            </li>
            <li>
             About Us
            </li>
            <li>
             Carrier
            </li>
            <li>
              We are hiring
            </li>
            <li>
              Blog
            </li>
          </ul>
          </div>
          <div id='marker'>
      <ul>
      <li id='first'>
            Legal
            </li>
            <li>
             About Us
            </li>
            <li>
            Carrier
            </li>
            <li>
              HWe are hiring
            </li>
            <li>
              Blog
            </li>
          </ul>
          </div>
          <div id='marker'>
      <ul>
      <li id='first'>
            Features
            </li>
            <li>
           Business Marketing
            </li>
            <li>
            User Analytics
            </li>
            <li>
              Live Chat
            </li>
            <li>
             Unlimited Support
            </li>
          </ul>
          </div>
          <div id='marker'>
      <ul>
      <li id='first'>
            Resources
            </li>
            <li>
             home
            </li>
            <li>
             Shop
            </li>
            <li>
              Home
            </li>
            <li>
              Home
            </li>
          </ul>
          </div>
          <div id='marker'>
      <ul>
      <li id='first'>
            Get in Touch
            </li>
            <li>
            <form>
            
                        <input type="text" placeholder='Your Mail' onChange={(e)=>setData(e.target.value)}/>
                        
                        <div>
                        <button type='reset' onClick={fetchMail} value={data}>Subscribe</button>
                        </div>
                        
                      </form>  
            </li>
            <li>
             Lorem ipsum dolor
            </li>
            
          </ul>
          </div>
    </div>
  )
}

export default Footer

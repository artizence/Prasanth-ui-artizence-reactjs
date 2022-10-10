import React from 'react'
import './footer.css'

const Footer = () => {
    const year= new Date().getFullYear()
  return (
    <div className='footouter'>
        <ul>
            <li><a href=''>FAQ</a></li>
            <li><a href=''>Blog</a></li>
            <li><a href=''>Contact us</a></li>
            <li><a href="">Github</a></li>
            <li><a href=''>LinkedIn</a></li>
            <li><a href="">Privacy Policy</a></li>
        </ul>

        <div>
             <p>© Hirecoop {year}    All right reserved</p>
        </div>

    </div>
  )
}

export default Footer
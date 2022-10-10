import React from 'react'
import './bottom.css'
import Logo from '../Navbar/images/Logo.svg'
const Bottom = () => {
  return (
    <div className='outer'>
        <div className='border'>

            <div className='logo'>

            <img src={Logo} alt='img' style={{width:"30px"}} />

            </div>
            <div className='txt'>
                   <p className='clr'>What are you thinking?</p>
            </div>

            <button className='btn'>Start Now</button>

        </div>
    </div>
  )
}

export default Bottom
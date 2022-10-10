import React from 'react'
import './feature.css'
import Left from '../images/feature1.png'
import Right from '../images/feature2.png'
const Feature = () => {
  return (
    <div className='feature-sec'>
     
            <div className='feature'>
                <div className='dash'>

                </div>
                <div className='txt'>

                    <p>Our Features</p>

                </div>

            </div>

      
        <div className='section1'>

            <div className='image-left'>

                <img src={Left} style={{width:'500px',height:'400px'}}/>

            </div>
            <div className='con-rigth'>

                <h3>Create and interview within 5 clicks</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed molestie nibh. Aliquam gravida consectetur porttitor. In sagittis non sem sed feugiat. Donec condimentum ante et sem posuere, quis elementum erat ornare. Pellentesque condimentum,</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed molestie nibh. Aliquam gravida consectetur porttitor. In sagittis non sem sed feugiat. Donec condimentum ante et sem posuere, quis elementum erat ornare. Pellentesque condimentum,</p>

                <button className='btn'>Start for free</button>
            </div>

        </div>
        <div className='section2'>
            <div className='con-left'>

                <h3>Share only one link</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed molestie nibh. Aliquam gravida consectetur porttitor. In sagittis non sem sed feugiat. Donec condimentum ante et sem posuere, quis elementum erat ornare. Pellentesque condimentum,</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed molestie nibh. Aliquam gravida consectetur porttitor. In sagittis non sem sed feugiat. Donec condimentum ante et sem posuere, quis elementum erat ornare. Pellentesque condimentum,</p>
                <button className='btn'>Create Now</button>
            </div>
            <div className='img-right'>
                <img src={Right} style={{width:'500px',height:'400px'}}/>
            </div>

        </div>

    </div>
  )
}

export default Feature
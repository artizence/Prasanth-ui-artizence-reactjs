import React from 'react'
import TopR1 from '../images/green.png'
import TopR2 from '../images/orange.png'
import './rectangle.css'

const Rectangle = () => {
    return (
        <div className='rec'>
            <div className='rec1'>

                <div className='topimg'>

                    <img src={TopR1} style={{width:"400px"}} />

                </div>
                <div className='con'>

                    <h4>Easy to manage</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed molestie nibh. Aliquam gravida consectetur porttitor. In sagittis non sem sed feugiat.</p>

                </div>

            </div>
            <div className='rec2'>

                <div className='topimg'>

                <img src={TopR2} style={{width:"400px"}}/>

                </div>
                <div className='con'>
                    <h4>Save 1000s of Hours</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed molestie nibh. Aliquam gravida consectetur porttitor. In sagittis non sem sed feugiat.</p>

                </div>



            </div>
        </div>
    )
}

export default Rectangle
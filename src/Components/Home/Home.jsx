import React from 'react'
import Navbar from '../Navbar/Navbar'
import './home.css'
import Right from '../images/undraw_hiring_re_yk5n 1.jpg'
// import Lower from '../Lower/Lower'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='hero-section'>

                <div className='left'>

                    <div className='content1'>
                        <h3>
                            Hire the Best candidates without any effort
                        </h3>
                    </div>
                    <div className='content2'>
                        <p>This is a saas that will help you build and start fast. So let’s start a new journey by using this saas kit to build you saas future fast, easy and proffessionally.</p>

                    </div>
                    <div className='btn-section'>


                        <button className='btn1' > Start for free</button>




                        <button className='btn2'> Watch demo</button>



                    </div>

                </div>
                <div className='right'>
                    <img src={Right}  />
                </div>


            </div>


        </div>
    )
}

export default Home
import React from 'react'
import resumeImg from '../assets/resume1.svg'

function Header() { 
    return (
        <div className='Heading'>


                <div className='left'>
                    <p>
                         A <span>Resume</span> that <br/>stands Out! <br/>
                         Make your own <br/> resume <span>it's free</span>

                    </p>


                </div>
                <div className='right'>
                <img src={resumeImg} className="img"/>

                </div>

        

        </div>
    )
}

export default Header

import React from 'react'
import '../App.css'
import image1 from '../images/banner2/1.jpg'
import image2 from '../images/banner2/2.jpg'

const banner2 = () => {
    return (
        <>
            <div className="banner2top">
                <div className="banner2head">
                    <h1>RADHE JEWELLERS : The Name of 50 Years Trust</h1>
                    <h6>Celebrate life's precious moments with jewelry that reflects the brilliance of your journey."</h6>
                </div>
                <div className="banner2content">
                    <img src={image1} alt="image1" />
                    <img src={image2} alt="iamge2" />
                </div>
            </div>


        </>
    )
}

export default banner2

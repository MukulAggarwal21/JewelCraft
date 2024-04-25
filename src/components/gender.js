import React from 'react'
import '../App.css'
import Male from '../images/Gender/Male.jpeg'
import female from '../images/Gender/Women.jpeg'
import child from '../images/Gender/Baby Child.jpeg'


const gender = () => {
    return (
        <div className='gendertop'>

            <h1>Choose by Gender</h1>

            <div className="gender">

                {/* Male Section */}
                <div className='men'>
                    <img src={Male} alt="Male" />
                    <div className="content1">
                        <h4>Male👨</h4>
                        <a href="/">Explore it!!</a>
                    </div>

                </div>

                {/* Female Section */}

                <div className='female'>
                    <img src={female} alt="Female" />
                    <div className="content1">
                        <h4>Female 👧</h4>
                        <a href="/">Explore it!!</a>
                    </div>
                </div>

                {/* Child Section  */}
                <div className='child'>
                    <img src={child} alt="Child" />
                    <div className="content1">
                        <h4>Children👶</h4>
                        <a href="/">Explore it!!</a>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default gender

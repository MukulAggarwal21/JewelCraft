import React from 'react'
import Card from 'react-bootstrap/Card';
import '../App.css'
import Button from 'react-bootstrap/Button';
import bangel from '../images/ornaments/Bangel.jpg';
import pendant from '../images/ornaments/Pendant.jpg';
import braceletes from '../images/ornaments/Braceletes.jpg';
import earings from '../images/ornaments/Earings.jpg';
import chains from '../images/ornaments/Chains.jpg';
import nosepin from '../images/ornaments/Nose Pin.jpg';
import fingerring from '../images/ornaments/FINGER ring.jpg';
import goldcoin from '../images/ornaments/Gold Coin.jpg';
import mangalsutra from '../images/ornaments/Mangalsutra.jpg';
import necklaceset from '../images/ornaments/Necklace set.jpg';
import neckweaar from '../images/ornaments/Neckwear.jpg';
import pendantset from '../images/ornaments/Pendants.jpg'



const favsection = () => {
  return (
    <>
      <div className="favtop">
        <h1>Shop By Category</h1>
        <h5>Browse through your favorite categories. We've got them all!</h5>

        <div className='explore'>


          {/* Line1 of Explore */}

          <div className="explore1">

            <div className="subexplore11">
              {/* Earing Section */}
              <div className='box1'>
                <img src={earings} alt="earrings" />
                <h4>EarRings</h4>
                <a href="/"> Explore it !!</a>
              </div>


              {/* bangel section  */}
              <div className='box1'>
                <img src={bangel} alt="bangel" />
                <h4>Bangel</h4>
                <a href="/"> Explore it !!</a>
              </div>


              {/* Pendant section  */}
              <div className='box1'>
                <img src={pendant} alt="pendant" />
                <h4>Pendants</h4>
                <a href="/"> Explore it !!</a>
              </div>

            </div>



            <div className="subexplore12">
              {/* Bracelete section  */}
              <div className='box1'>
                <img src={braceletes} alt="Braceletes" />
                <h4>Bracelete</h4>
                <a href="/"> Explore it !!</a>
              </div>

              {/* Fingerring */}
              <div className='box1'>
                <img src={fingerring} alt="fingerring" />
                <h4>Finger Ring</h4>
                <a href="/"> Explore it !!</a>
              </div>


              {/* Nosepin */}
              <div className='box1'>
                <img src={nosepin} alt="NosePin " />
                <h4>Nose Pin</h4>
                <a href="/"> Explore it !!</a>
              </div>

            </div>

          </div>



          {/* Line2 of Explore  */}

          <div className="explore2">

            <div className="subexplore21">
              {/* Gold Coin Section  */}
              <div className='box1'>
                <img src={goldcoin} alt="Gold Coin" />
                <h4>Gold Coin</h4>
                <a href="/"> Explore it !!</a>
              </div>

              {/* Chain Section */}
              <div className='box1'>
                <img src={chains} alt="chain" />
                <h4>Chains</h4>
                <a href="/"> Explore it !!</a>
              </div>


              {/* Mangalsutra  Section */}
              <div className='box1'>
                <img src={mangalsutra} alt="Mangalsutra" />
                <h4>Mangalsutra</h4>
                <a href="/"> Explore it !!</a>
              </div>

            </div>

            <div className="subexplore22">
              {/* Neclace Set Section  */}
              <div className='box1'>
                <img src={necklaceset} alt="Neclaceset" />
                <h4>Necklace Set</h4>
                <a href="/"> Explore it !!</a>
              </div>

              {/* Neckwear Section  */}
              <div className='box1'>
                <img src={neckweaar} alt="Neckwear" />
                <h4>Neckwear</h4>
                <a href="/"> Explore it !!</a>
              </div>

              {/* Pendant set  section  */}
              <div className='box1'>
                <img src={pendantset} alt="Pendant Set" />
                <h4>Pendant Set</h4>
                <a href="/"> Explore it !!</a>
              </div>




            </div>


          </div>

        </div>






      </div>


    </>
  )
}

export default favsection

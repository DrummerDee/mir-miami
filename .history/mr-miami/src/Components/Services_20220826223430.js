import React from "react";
import Lawn from '../Assets/lawmow.jpeg';
import Tile from '../Assets/tile.jpeg';
import '../Styles/Services.css'

function Services() {
    return (
        <main className="servicesBody">
                <div className = 'in__container' >     
                    <h2> Interior</h2>
                    {/* <img src ={Tile} alt='broken light brown tile'/> */}

            </div>
                <div className='ex__container'>
                    <h2> Exterior</h2>
                    {/* <img src ={Lawn} alt='green grass with lawn mower'/> */}
            </div>
        </main>
    )
}
export default Services
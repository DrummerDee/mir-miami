import React from "react";
import Lawn from '../Assets/lawmow.jpeg';
import Tile from '../Assets/tile.jpeg';
import '../Styles/Services.css'

function Services() {
    return (
        <main className="servicesBody">
            <div className='container' >
                <div>
                    <div className='dropdown'>
                    <h2> Interior</h2>
                    <div className='dropdown__content'>
                        <ul>
                        <li>Painting</li>
                        <li>Plumbing</li>
                        <li> Doors</li>
                        <li> Floors </li>
                        <li> Ceilings </li>
                        <span> Electrical </span>
                        </ul>
                </div>
                </div>
                    </div>
                <img src={Tile} alt='broken brown colored tiles' />
            </div>
            <div className='container'>
                <h2> Exterior</h2>
                <img src={Lawn} id='mow' alt='bright green grass with red hand pushed lawn mower' />
            </div>
        </main>
    )
}
export default Services
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
                    <div className='dropdown__content'>
                        <span>Painting</span>
                        <span>Plumbing</span>
                        <span> Doors</span>
                        <span> Floors </span>
                        <span> Ceilings </span>
                        <span> Electrical </span>
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
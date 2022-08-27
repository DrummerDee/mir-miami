import React from "react";
import Lawn from '../Assets/lawn.jpeg';
import Tile from '../Assets/tile.jpeg';
import '../Styles/Services.css'

function Services() {
    return (
        <main className="servicesBody">
            <div className='container' >
                <h2> Interior</h2>
                <img src ={Tile} alt='broken brown colored tiles'/>
            </div>
            <div className='container'>
                <h2> Exterior</h2>
                <img src ={Lawn} className='mow' alt='bright green grass with red hand pushed lawn mower'/>
            </div>
        </main>
    )
}
export default Services
import React from "react";
import Lawn from '../Assets/mower.jpeg';
import Tile from '../Assets/tile.jpeg';
import '../Styles/Services.css'

function Services() {
    return (
        <main className="servicesBody">
            <div className='container interior' >
                <h2> Interior</h2>
                <img src ={Tile} alt='broken brown colored tiles'/>
            </div>
            <div className='container' id='mow'>
                <h2> Exterior</h2>
                <img src ={Lawn}  alt='bright green grass with red hand pushed lawn mower'/>
            </div>
        </main>
    )
}
export default Services
import React from "react";
import Lawn from '../Assets/lawmow.jpeg';
import Tile from '../Assets/tile.jpeg';
import '../Styles/Services.css'

function Services() {
    return (
        <main className="servicesBody">
                <div className = 'container' >     
                    <h2> Interior</h2>
    
            </div>
           
                <div className='container'>
                    <h2> Exterior</h2>
                    <div className='image'>
                    <img src ={Lawn} alt='green grass with lawn mower'/>
                    </div>
            </div>
        </main>
    )
}
export default Services
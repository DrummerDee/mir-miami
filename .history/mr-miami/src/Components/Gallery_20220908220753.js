import React from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import sinkbefore from '../Assets/sinkbefore.jpeg';
// import sinkafter from '../Assets/sinkafter.jpeg';
// import doorbefore from '../Assets/Doorbefore.jpeg';
// import doorafter from '../Assets/Doorafter.jpeg';
// import pavementbefore from '../Assets/pavementbefore.jpeg';
// import pavementafter from '../Assets/pavementafter.jpeg';
// import roofafter from '../Assets/roofafter.jpeg';
// import roofbefore from '../Assets/roofbefore.jpeg';



function Gallery() {
    return (
        <div className='body'>
            <h1> Before & After Of Previous Work </h1>
            <div className='wrapper'>
                <div className='frame'>
                    <div className='box'>
                    <LazyLoadImage 
                        src = {sinkbefore}
                        width={600}
                        height={400}
                        alt='broken sink'
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <div className='frame'>
                    <div className='box'>
                        {/* <img className='before' src={doorbefore} alt='door before' />
                        <img className='after' src={doorafter} alt='door after' /> */}
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <div className='frame'>
                    <div className=" box">
                        {/* <img id='paveb' src={pavementbefore} alt='pavement before' /> */}
                        {/* <img className='after' src={pavementafter} alt='pavement after' /> */}
                    </div>
                </div>
            </div>
            <div className='wrapper'>
                <div className='frame'>
                    <div className='box'>
                        {/* <img className='before' src={roofbefore} alt='roof before' />
                        <img className='after' src={roofafter} alt='roof after' /> */}
                    </div>
                </div>
            </div>
                </div>
    );
}










export default Gallery
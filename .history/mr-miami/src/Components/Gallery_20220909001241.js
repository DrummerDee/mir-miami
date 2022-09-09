import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import sinkbefore from '../Assets/sinkbefore.jpeg';
import sinkafter from '../Assets/sinkafter.jpeg';
// import doorbefore from '../Assets/Doorbefore.jpeg';
// import doorafter from '../Assets/Doorafter.jpeg';
// import pavementbefore from '../Assets/pavementbefore.jpeg';
// import pavementafter from '../Assets/pavementafter.jpeg';
// import roofafter from '../Assets/roofafter.jpeg';
// import roofbefore from '../Assets/roofbefore.jpeg';



function Gallery() {
    return (
        <>
            <main className='gallery__body'>
                <h1> Before & After Of Previous Work </h1>
                <section className='wrapper'>
                    <div className='layout__one'>
                        <div className='frame'>
                            <LazyLoadImage
                                src={sinkbefore}
                                width={400}
                                height={400}
                                effect='blur'
                                alt='broken sink'
                                className="top"
                            />
                            <LazyLoadImage
                                src={sinkafter}
                                width={400}
                                height={400}
                                effect='blur'
                                alt='broken sink'
                                className="bottom"
                            />
                        </div>
                        <div className='frame'>
                            <LazyLoadImage
                                src={doorbefore}
                                width={400}
                                height={400}
                                effect='blur'
                                alt='broken sink'
                                className="top"
                            />
                            <LazyLoadImage
                                src={doorafter}
                                width={400}
                                height={400}
                                effect='blur'
                                alt='broken sink'
                                className="bottom"
                            />
                        </div>
                    </div>
                    <div className='layout__two'>
                    </div>
                </section>
            </main>

        </>
    );
}










export default Gallery
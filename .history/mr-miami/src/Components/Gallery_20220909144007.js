import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import sinkbefore from '../Assets/sinkbefore.jpeg';
import sinkafter from '../Assets/sinkafter.jpeg';
import doorbefore from '../Assets/Doorbefore.jpeg';
import doorafter from '../Assets/Doorafter.jpeg';
import undonePavement from '../Assets/undonePavement.jpeg';
import donePavement from '../Assets/nicePavement.jpeg';
import brokenPillar from '../Assets/broken.jpeg';
import fixedPillar from '../Assets/fixed.jpeg'
import roofafter from '../Assets/roofafter.jpeg';
import roofbefore from '../Assets/roofbefore.jpeg';
import undoneShower from '../Assets/undoneShower.jpeg';
import doneShower from '../Assets/tileShower.jpeg'



function Gallery() {
    return (
        <>
            <main className='gallery__body'>
                <h1> Before & After Of Previous Work </h1>
                <section className='wrapper'>
                    <div className="containers">
                        <LazyLoadImage
                            src={sinkbefore}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="top"
                        />
                        <LazyLoadImage
                            src={sinkafter}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="bottom"
                        />
                    </div>
                    <div className="containers">
                        <LazyLoadImage
                            src={doorbefore}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="top"
                        />
                        <LazyLoadImage
                            src={doorafter}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="bottom"
                        />
                    </div>
                    <div className="containers">
                        <LazyLoadImage
                            src={roofbefore}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="top"
                        />
                        <LazyLoadImage
                            src={roofafter}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="bottom"
                        />
                    </div>
                </section>
                <section className='wrapper__two'>
                    <div className="containers__two">
                        <LazyLoadImage
                            src={undonePavement}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="top__two"
                        />
                        <LazyLoadImage
                            src={donePavement}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="bottom__two"
                        />
                    </div>
                    <div className="containers__two">
                        <LazyLoadImage
                            src={brokenPillar}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="top__two"
                        />
                        <LazyLoadImage
                            src={fixedPillar}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="bottom__two"
                        />
                    </div>
                    <div className="containers__two">
                        <LazyLoadImage
                            src={sinkbefore}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="top__two"
                        />
                        <LazyLoadImage
                            src={sinkafter}
                            width={400}
                            height={500}
                            effect='blur'
                            alt='broken sink'
                            className="bottom__two"
                        />
                    </div>
                </section>
            </main>

        </>
    );
}










export default Gallery
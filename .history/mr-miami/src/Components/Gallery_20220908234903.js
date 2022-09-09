import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import sinkbefore from '../Assets/sinkbefore.jpeg';
import sinkafter from '../Assets/sinkafter.jpeg';
import doorbefore from '../Assets/Doorbefore.jpeg';
import doorafter from '../Assets/Doorafter.jpeg';
// import pavementbefore from '../Assets/pavementbefore.jpeg';
// import pavementafter from '../Assets/pavementafter.jpeg';
// import roofafter from '../Assets/roofafter.jpeg';
// import roofbefore from '../Assets/roofbefore.jpeg';



function Gallery() {
    return (
        <>
            <div className='body'>
                <h1> Before & After Of Previous Work </h1>
                <div className='wrapper'>
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
            <div className='frame'>
                <LazyLoadImage
                    src={roofbefore}
                    width={400}
                    height={400}
                    effect='blur'
                    alt='broken sink'
                    className="top"
                />
                <LazyLoadImage
                    src={roofafter}
                    width={400}
                    height={400}
                    effect='blur'
                    alt='broken sink'
                    className="bottom"
                />
            </div>
            <section id='second__wrapper'>
                hi
                </section>
        </div>
        </div>
        
          <main className='gallery__body'>
        <div className='wrapper'>
            <div className='framer'>
              <div className='text'>
              Project 1 
            </div>
          </div>
           </div>
        <div className='project'> 
        <div className='overlay'>
          <div className='text'>
          Project 2 
          </div>
          </div>
          </div>
        <div className='project'> Project 3 </div>
      </main>
        </>
    );
}










export default Gallery
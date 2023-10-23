import React from 'react';
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';


const Testimony: React.FC = () => {
    return (
        <section>
            <div className='container-fluid mx-auto'>
                <div className='bg-pink-950 min-h-[600px]'>
                    <div className='flex flex-col justify-center px-2 xl:px-0 h-[800px]'>
                        <h2 className= 'text-5xl text-white text-center mb-[80px] dancingFont'>Testimonials</h2>
                        <TestimonialSlider/>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default Testimony;

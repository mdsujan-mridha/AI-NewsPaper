import React, { useEffect, useState } from 'react';
import "./Home.css";
import Slider from '../Slider/Slider';
import NewsSource from '../NewsSource/NewsSource';
import NewsSlider from '../NewsSlider/NewsSlider';

const Home = () => {
    
    return (
        <section className='px-12' >
            {/* news category  */}
            <div className='flex flex-col md:flex-col lg:flex-row gap-10 main-container'>
                <div className="card  bg-base-100 shadow-2xl category-content">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-4xl"> News Categories </h2>
                        <div className='mt-3'>
                            <p className='text-white text-3xl font-semibold mt-2 text-center'>  Try to Say </p>
                            <input type="text" placeholder="Give me the latest Technology news" className="input input-bordered input-primary w-full my-5 text-white" readOnly />
                        </div>
                        <div className='text-center text-2xl font-bold'>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Business </p>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Entertainment </p>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> General </p>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Health </p>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Science </p>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Sports </p>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Technology </p>
                        </div>
                    </div>
                </div>
                {/* hero slider  */}
                <div className='slider-content'>
                    <Slider />
                </div>
            </div>
            {/* news source category  */}
            <div className='mt-10 '>
                <h1 className='text-center text-4xl font-bold text-white'> News Source </h1>
                <p className='text-center font-semibold text-white opacity-60 my-5'> Give me the news from source name </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5'>
                    <NewsSource />
                </div>
            </div>
            {/* some news from cnn category */}
            <div className='mt-10 flex flex-col md:flex-col lg:flex-row gap-10 main-container'>
                <div className="card  bg-base-100 shadow-2xl category-content">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-4xl"> News by terms </h2>

                        <div className='text-center text-2xl font-bold'>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Bitcoin </p>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Play Station 5</p>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Smart phones </p>
                            <p style={{ borderBottom: '3px solid #1c1c1c', lineHeight: '70px' }}> Corona Virus </p>

                        </div>
                        <input type="text" placeholder=" What's up with 'term name'" className="input input-bordered input-primary w-full my-5 text-white" readOnly />
                    </div>
                </div>
                <div className='slider-content'>
                    <NewsSlider/>
                </div>
            </div>
        </section>
    );
};

export default Home;
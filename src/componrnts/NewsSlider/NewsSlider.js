import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";
const NewsSlider = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=252ca13b5e0e488f8c031db62c4aef24`)
            .then(res => res.json())
            .then(data => setNews(data?.articles))
    }, []);
    console.log(news);
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay,Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    news?.map(item => (
                        <SwiperSlide className='p-10'>
                            <div className="card card-compact  bg-base-100 shadow-2xl" style={{height:'500px'}}>
                                <figure>
                                    {
                                        item?.urlToImage ? <img src={item?.urlToImage} alt="NEWS" /> : <img src='https://i.ibb.co/gw3rBRL/news-icon-18.png' alt='news'></img>
                                    }
                                </figure>
                                <div className="card-body">
                                    <div className='flex justify-between text-secondary font-semibold'>
                                        <p> {(new Date(item?.publishedAt)).toDateString()} </p> <p className='opacity-50'> {item?.source?.name} </p>
                                    </div>

                                    <h2 className="card-title text-justify font-bold text-white"> {item?.title} </h2>
                                    <p className='text-justify font-semibold text-white opacity-75'> {item?.description} </p>
                                    <div className="card-actions">
                                        <p className='text-secondary font-bold'> author:
                                            {
                                                item?.author ? item?.author : item?.source?.name
                                            } </p>
                                        <button className="btn btn-sm btn-primary"> Read more... </button>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </>
    );
};

export default NewsSlider;
import React from 'react';

const sourceData = [
    {
        id: 1,
        title: "CNN News",
        desc: "Give me the news from CNN",
        img: "https://i.ibb.co/3B45CgV/cnn-logo-original-png-0.png"

    },
    {
        id: 2,
        title: "ABC News",
        desc: "Give me the news from ABC News",
        img: "https://i.ibb.co/DVzF6g5/ABC-News-logo-2021-svg.png"

    },
    {
        id: 3,
        title: "BBC News",
        desc: "Give me the news from BBC News",
        img: "https://i.ibb.co/82KWwyp/bbc-news-logo-png-2.png"

    },
    {
        id: 4,
        title: "Fox News",
        desc: "Give me the news from Fox News",
        img: "https://i.ibb.co/KDyQM3y/Fox-News-Channel-Emblem.png"

    },
    {
        id: 5,
        title: "Time",
        desc: "Give me the news from Time",
        img: "https://i.ibb.co/vxRVmt5/png-clipart-shelter-magazine-time-news-magazine-house-garden-no-time-angle-text.png"

    }
]

const NewsSource = () => {
    return (
        <>
            {
                sourceData?.map(data => {
                    return (
                        <div className="card card-compact  bg-base-100 shadow-2xl" style={{width:'300px',height:'250px' }}>
                            <figure style={{ width:"286px",height:'200px'}}><img src={data?.img} alt="CNN" style={{width:'100%',margin:'7px',objectFit:'cover' }} /></figure>
                            <div className="card-body">
                                <h2 className="text-center text-white font-semibold text-3xl"> {data?.title} </h2>
                                <p className='text-secondary font-semibold text-sm'> Say: {data?.desc} </p>

                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default NewsSource;
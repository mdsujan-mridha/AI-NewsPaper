
import React from 'react';
import { Link } from 'react-router-dom';

const NewsCards = ({ article, i,activeArticle }) => {
    console.log(article);
    const { author, content, description, publishedAt, title, url, urlToImage, source
    } = article;

    return (
        <a href={url} target="_blank" className="card card-compact  bg-base-100 shadow-2xl">
            <figure>
                {
                    urlToImage ? <img src={urlToImage} alt="NEWS" /> : <img src='https://i.ibb.co/gw3rBRL/news-icon-18.png' alt='news'></img>
                }
            </figure>
            <div className="card-body">
                <div className='flex justify-between text-secondary font-semibold'>
                    <p> {(new Date(publishedAt)).toDateString()} </p> <p className='opacity-50'> {source?.name} </p>
                </div>

                <h2 className="card-title text-justify font-bold text-white"> {title} </h2>
                <p className='text-justify font-semibold text-white opacity-75'> {description} </p>
                <div className="card-actions">
                    <p className='text-secondary font-bold'> author:
                        {
                            author ? author : source?.name
                        } </p>
                    <a to={url} target="_blank" className="btn btn-sm btn-primary"> Read more... </a>

                </div>
            </div>
        </a>
    );
};

export default NewsCards;
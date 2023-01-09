
import React from 'react';
import NewsCards from '../NewsCards/NewsCards';

const NewsCard = ({newsArticles,activeArticle}) => {
    // const classes = useStyles();
    return (
        <section className='px-12'>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 py-12">
                    {
                        newsArticles?.map((article,i) =>{
                            return(
                                <NewsCards
                                article={article}
                                key={i}
                                i={i}
                                activeArticle={activeArticle}
                                >

                                </NewsCards>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default NewsCard;
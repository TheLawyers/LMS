import React from 'react';

const News = (props) => {
    console.log('News COMPONENT\n\n', props.news)
    return (
        <div>
                    <h5>{props.news.author}</h5>
                    <h3 className="headline">{props.news.title}</h3>
                    <h5>{props.news.publishedAt} </h5>
                    <h4>{props.news.source.name}</h4>
        </div>

    )
}

export default News;
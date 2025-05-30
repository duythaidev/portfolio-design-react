import React from 'react'
import '../../styles/Blog/BlogCard.scss'

const BlogCard = ({ category, date, imgsrc, title, content }) => {
    return (
        <div className='blog-card'>
            <div className='blog-card-img-container'>
                <img className='blog-card-img' src={imgsrc} alt="my-portfolio" />
            </div>
            <div className="blog-card-content">
                <p className='blog-card-date'>{category} · {date}</p>
                <h1 className='blog-card-h1'>{title}</h1>
                <p className='blog-card-p'>{content}</p>
            </div>
        </div>
    )
}

export default BlogCard

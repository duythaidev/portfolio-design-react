import React from 'react'
import '../../styles/Blog/Blog.scss'
import BlogCard from './BlogCard'
import myPortfolio from '../../assets/Portfolio.png'

class Blog extends React.Component {
    state = {
        image: [
            {
                id: 1,
                imgsrc: myPortfolio,
                title: 'My Portfolio',
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur, impedit error, ea facilis aut explicabo iure quaerat omnis repellat eaque? Iusto temporibus rerum praesentium doloremque quia pariatur impedit dicta?",
                date:'Feb 23, 2024',
                category:'Design'
            },
            {
                id: 2,
                imgsrc: myPortfolio,
                title: 'My Portfolio',
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur, impedit error, ea facilis aut explicabo iure quaerat omnis repellat eaque? Iusto temporibus rerum praesentium doloremque quia pariatur impedit dicta?",
                date:'Feb 23, 2024',
                category:'Design'
            },
            {
                id: 3,
                imgsrc: myPortfolio,
                title: 'My Portfolio',
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur, impedit error, ea facilis aut explicabo iure quaerat omnis repellat eaque? Iusto temporibus rerum praesentium doloremque quia pariatur impedit dicta?",
                date:'Feb 23, 2024',
                category:'Design'
            },
            {
                id: 4,
                imgsrc: myPortfolio,
                title: 'My Portfolio',
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur, impedit error, ea facilis aut explicabo iure quaerat omnis repellat eaque? Iusto temporibus rerum praesentium doloremque quia pariatur impedit dicta?",
                date:'Feb 23, 2024',
                category:'Design'
            },
            {
                id: 5,
                imgsrc: myPortfolio,
                title: 'My Portfolio',
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur, impedit error, ea facilis aut explicabo iure quaerat omnis repellat eaque? Iusto temporibus rerum praesentium doloremque quia pariatur impedit dicta?",
                date:'Feb 23, 2024',
                category:'Design'
            }
        ]
    }
    render() {
        const { image } = this.state;
        return (
            <div className='blog-container'>
                <h1 className='page-title'>
                    Blog
                </h1>
                <div className="br-line"></div>
                <div className="blog-card-container">

                    {image && image.length > 0 && image.map((item, index) => {
                        return (
                            <BlogCard
                                key={item.id}
                                imgsrc={item.imgsrc}
                                title={item.title}
                                content={item.content}
                                category={item.category}
                                date={item.date}
                                
                                >
                            </BlogCard>
                        )
                    })}
                </div>

            </div>
        )
    }
}
export default Blog

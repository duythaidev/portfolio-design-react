import React, { useState } from 'react'
import '../../styles/Blog/Blog.scss'
import BlogCard from './BlogCard'
import myPortfolio from '../../assets/Portfolio.png'
import { kitchen, kitchenapp, hms, restaurantmanagement } from '../../assets'

const Blog = () => {
    const [image] = useState([
        // {
        //     id: 1,
        //     imgsrc: myPortfolio,
        //     title: 'My Portfolio',
        //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur, impedit error, ea facilis aut explicabo iure quaerat omnis repellat eaque? Iusto temporibus rerum praesentium doloremque quia pariatur impedit dicta?",
        //     date: 'Feb 23, 2024',
        //     category: 'Design'
        // },
        {
            id: 1,
            imgsrc: kitchen,
            title: 'Kitchen utentils',
            content: 'Fullstack web app with NextJS, TailwindCSS, ShadcnUI, NestJS',
            link: 'https://github.com/duythaidev/kitchen-utensils',
            date: 'Jul 29, 2025',
            category: 'web'
        },
        {
            id: 2,
            imgsrc: kitchenapp,
            title: 'Kitchen utentils app',
            content: 'Use React Native, Expo, Nativewind',
            link: 'https://github.com/duythaidev/kitchen-utensils-app-nativewind',
            date: 'Jul 29, 2025',
            category: 'app'
        },
        {
            id: 3,
            imgsrc: hms,
            title: 'Hospital Management System',
            content: 'Fullstack web app with ReactJS, Ant Design, TailwindCSS, ExpressJS, PrismaORM',
            link: 'https://gitlab.com/theorng1/swp391-hms',
            date: 'Jul 29, 2025',
            category: 'web'
        },
        {
            id: 4,
            imgsrc: restaurantmanagement,
            title: 'Restaurant Management System',
            content: 'Frontend web with ReactJS, Bootstrap, Axios, with backend Json-server',
            link: 'https://github.com/l22lvip/Restaurant_SeaFood_-Management/',
            date: 'Jul 29, 2025',
            category: 'web'
        },
        {
            id: 5,
            imgsrc: myPortfolio,
            title: 'My Portfolio',
            content: 'Use pure css',
            link: 'https://kerkzek.github.io/Portfolio/',
            date: 'Feb 23, 2024',
            category: 'web'
        },

    ])

    return (
        <div className='blog-container'>
            <h1 className='page-title'>
                Blog
            </h1>
            <div className="br-line"></div>
            <div className="blog-card-container">
                {image && image.length > 0 && image.map((item) => (
                    <BlogCard
                        key={item.id}
                        imgsrc={item.imgsrc}
                        title={item.title}
                        content={item.content}
                        category={item.category}
                        date={item.date}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Blog

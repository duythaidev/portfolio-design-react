import React from 'react'
import '../../styles/About/About.scss'
import AboutCard from './AboutCard'
import Testimonials from './Testimonials'
class About extends React.Component {
    state = {
        doingText: [
            {
                id: 1,
                iconName: 'fa-brands fa-figma',
                title: 'Web Design',
                text: '...@gmail.com'
            },
            {
                id: 2,
                iconName: 'fa-solid fa-laptop-code',
                title: 'Web development',
                text: 'Web...'
            },
            {
                id: 3,
                iconName: 'fa-solid fa-mobile-screen-button',
                title: 'Mobile Apps',
                text: 'app...'
            },
            {
                id: 4,
                iconName: 'fa-solid fa-camera',
                title: 'Photography',
                text: 'picture...'
            }
        ]
    }
    render() {
        const { doingText } = this.state

        return (
            <div className="about-container">
                <h1 className='about-title'>
                    About Me
                </h1>
                <div className="br-line"></div>
                <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur nam at delectus et cupiditate vitae alias? Culpa provident doloribus, vero inventore ullam ea obcaecati consequatur minima, natus consectetur velit?</p>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur sit eaque repellat, labore quisquam maiores pariatur quis praesentium voluptatum doloremque esse. Provident quae eum ea magnam perferendis autem ducimus.   </p>
                <h2>What I'm doing</h2>

                {doingText && doingText.length > 0 &&
                    <div className="about-card-container">
                        {doingText.map((e, i) => {
                            return (
                                <AboutCard key={e.id} iconName={e.iconName} title={e.title} text={e.text}></AboutCard>
                            )
                        })}
                    </div>
                }
                <h2>
                    Testimonials
                </h2>
                <Testimonials></Testimonials>
            </div>
        )
    }
}
export default About

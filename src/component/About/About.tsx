import React from 'react'
import '../../styles/About/About.scss'
import AboutCard from './AboutCard'
import { connect } from 'react-redux'
import Marquee from "react-fast-marquee";

interface AboutProps {
    aboutContent: {
        title: string;
        header: string[];
        doingText: Array<{
            id: string;
            iconName: string;
            title: string;
            text: string;
        }>;
    };
    changeLanguage: (lang: string) => void;
}

const data = [
    {
        id: 1,
        image: 'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_1_29_638421126126198259_expressjs-la-gi-1-1.jpg'
    },
    {
        id: 2,
        image: 'https://bkacad.edu.vn/upload_images/images/H%E1%BB%87%20ch%E1%BB%A9ng%20ch%E1%BB%89/1_XaGxIa_JuHc8YTR5Znv6tg.png'
    },
    {
        id: 3,
        image: 'https://miro.medium.com/v2/resize:fit:1200/1*uOMFBvRtzcFntZgO35RU2Q.png'
    },
    {
        id: 4,
        image: 'https://fstack.io.vn/wp-content/uploads/2024/09/next-js-optimizations.png'
    },

    {
        id: 5,
        image: 'https://miro.medium.com/v2/resize:fit:1200/1*uOMFBvRtzcFntZgO35RU2Q.png'
    },
    {
        id: 6,
        image: 'https://myrobot.asia/wp-content/uploads/2024/05/mysql-la-gi-1.jpeg'
    },
    {
        id: 7,
        image: 'https://namcoi.com/wp-content/uploads/2019/09/html-css-js.jpg'
    },



]

const About: React.FC<AboutProps> = ({ aboutContent, changeLanguage }) => {
    const handleOnClick = (lang: string) => {
        console.log(lang)
        changeLanguage(lang)
    }

    const { title, header, doingText } = aboutContent

    return (
        <div className="about-container">


            <h1 className='page-title'>
                {title}
            </h1>
            <div className="br-line"></div>


            <p className='about-text'>
                Hi! My name is Nguyen Duy Thai, I'm a FPTU student specializing in Software Engineering with a passion for building scalable and efficient web applications.
            </p>
            <p className="about-text">
                Currently in fifth semester of FPT University, aiming to be front-end developer with javascript as main programming language (Reactjs, React Native, Nextjs).
                Presently learning back-end website development with Expressjs, Nestjs.
            </p>
            <aside className='mobile-about'>
                <div className="img-container">
                    <img src={'https://avatars.githubusercontent.com/u/199640274?v=4'} alt="" />
                </div>
                <h1>Nguyen Duy Thai</h1>
                <div className="job">
                    <p style={{ color: ' #ffd700' }}>Web developer</p>
                </div>
            </aside>
            <h2>
                {header[0]}
            </h2>

            {doingText && doingText.length > 0 &&
                <div className="about-card-container">
                    {doingText.map((e) => (
                        <AboutCard key={e.id} iconName={e.iconName} title={e.title} text={e.text} />
                    ))}
                </div>
            }
            <h2 className='testimonials-heading'>
                {header[1]}
            </h2>
            {/* <Testimonials /> */}
            <div className='carousel-container'>
                <Marquee speed={50}>
                    {data.map((e) => (
                        <div
                            style={{
                                maxWidth: '300px',
                                height: '100px',
                                margin: '10px',
                                overflow: 'hidden',
                            }}
                            key={e.id}
                        >
                            <img
                                src={e.image}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    ))}

                </Marquee>
            </div>
        </div>
    )
}

interface TState {
    aboutContent: string
}

const mapStateToProps = (state: TState) => ({
    aboutContent: state.aboutContent
})

const mapDispatchToProps = (dispatch: any) => ({
    changeLanguage: (language: string) => dispatch({ type: 'Change_language', payload: language })
})

export default connect(mapStateToProps, mapDispatchToProps)(About as React.ComponentType)

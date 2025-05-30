import React from 'react'
import '../../styles/About/About.scss'
import AboutCard from './AboutCard'
import Testimonials from './Testimonials'
import Clients from './Clients'
import { connect } from 'react-redux'

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur nam at delectus et cupiditate vitae alias? Culpa provident doloribus, vero inventore ullam ea obcaecati consequatur minima, natus consectetur velit?
            </p>
            <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur sit eaque repellat, labore quisquam maiores pariatur quis praesentium voluptatum doloremque esse. Provident quae eum ea magnam perferendis autem ducimus.
            </p>

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
            <Testimonials />
            <h2 className='testimonials-heading'>
                {header[2]}
            </h2>
            <Clients />
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

export default connect(mapStateToProps, mapDispatchToProps)(About)

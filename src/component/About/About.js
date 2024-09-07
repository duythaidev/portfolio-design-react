import React from 'react'
import '../../styles/About/About.scss'
import AboutCard from './AboutCard'
import Testimonials from './Testimonials'
import Clients from './Clients'
import { connect } from 'react-redux'
class About extends React.Component {
    handleOnClick = (lang) => {
        console.log(lang)
        const { changeLanguage } = this.props

        console.log(this.props)
        changeLanguage(lang)
    }

    render() {
        const { title, header, doingText } = this.props.aboutContent
        // console.log('>>>PROPS: \n', this.props)
        return (
            <div className="about-container">
                <button onClick={() => this.handleOnClick('en')}>EN</button>
                <button onClick={() => this.handleOnClick('vi')}>VI</button>

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
                        {doingText.map((e, i) => {
                            return (
                                <AboutCard key={e.id} iconName={e.iconName} title={e.title} text={e.text}></AboutCard>
                            )
                        })}
                    </div>
                }
                <h2 className='testimonials-heading'>
                    {header[1]}
                </h2>
                <Testimonials></Testimonials>
                <h2 className='testimonials-heading'>
                    {header[2]}
                </h2>
                <Clients></Clients>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log(">>STATE",state)
    return { aboutContent: state.aboutContent }
}
function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: (language) => dispatch({type:'Change_language',payload:language})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About)

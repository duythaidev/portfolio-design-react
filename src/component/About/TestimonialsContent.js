import React from 'react'
import chad from '../../assets/Gigachad-Transparent.png'
import '../../styles/About/TestimonialsContent.scss'

class TestimonialsContent extends React.Component {
    render() {
        const { iconName, title, text } = this.props
        return (
            <div className="testimonials-content">
                <div className="testimonials-title">
                    <div className="icon-container flex">
                        {/* <FontAwesomeIcon icon={iconName} /> */}
                        <img src={chad} alt="chadface" />
                    </div>
                    <p className='title'>{title}aa aa</p>
                </div>
                <div className="testimonials-text">
                    <p className='text'>{text}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum distinctio maiores odit molestiae inventore iusto, iure, pariatur labore error vitae in quo natus! Placeat recusandae at dolorem doloremque ducimus?

                    </p>
                </div>
            </div>
        )
    }
}

export default TestimonialsContent
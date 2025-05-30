import React from 'react'
import chad from '../../assets/Gigachad-Transparent.png'
import '../../styles/About/TestimonialsContent.scss'

class TestimonialsContent extends React.Component {
    render() {
        const { image, name, text } = this.props
        return (
            <div className="testimonials-content">
                <div className="testimonials-title">
                    <div className="icon-container flex">
                        <img src={chad} alt="chadface" />
                    </div>
                    <p className='title'>{name}</p>
                </div>
                <div className="testimonials-text">
                    <p className='text'>{text}

                    </p>
                </div>
            </div>
        )
    }
}

export default TestimonialsContent
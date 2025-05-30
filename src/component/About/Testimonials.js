import React from 'react'
import '../../styles/About/Testimonials.scss'
import TestimonialsContent from './TestimonialsContent'
import { connect } from 'react-redux'
class Testimonials extends React.Component {
    render() {
        const aboutContent  = this.props.aboutContent
        return (
            <div className='testimonials-container'>
                {aboutContent.testimonialsName && aboutContent.testimonialsName.length > 0 &&
                    aboutContent.testimonialsName.map((e, i) => {
                        return (
                            <TestimonialsContent key={i} name={e} text={aboutContent.testimonialsContent}></TestimonialsContent>
                        )
                    })
                }
            </div>
        )
    }
}
const getdata = (state) => {
    return {
        aboutContent: state.aboutContent
    }
}
export default connect(getdata)(Testimonials)

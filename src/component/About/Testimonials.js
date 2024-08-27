import React from 'react'
import '../../styles/About/Testimonials.scss'
import TestimonialsContent from './TestimonialsContent'
class Testimonials extends React.Component {
    state = {

    }
    render() {
        return (
            <div className='testimonials-container'>

                {/* </div> */}
                <TestimonialsContent></TestimonialsContent>
                <TestimonialsContent></TestimonialsContent>
                <TestimonialsContent></TestimonialsContent>


            </div>
        )
    }
}
export default Testimonials

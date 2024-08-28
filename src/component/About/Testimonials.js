import React from 'react'
import '../../styles/About/Testimonials.scss'
import TestimonialsContent from './TestimonialsContent'
class Testimonials extends React.Component {
    state = {
        users: [
            {
                name: 'Jojo',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus saepe nobis dolorum voluptatum cum velit doloremque ut ipsum commodi vel praesentium eos quo odio laboriosam cumque iure quae? Omnis.'
            },
            {
                name: 'Kzek',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus saepe nobis dolorum voluptatum cum velit doloremque ut ipsum commodi vel praesentium eos quo odio laboriosam cumque iure quae? Omnis.'
            },
            {
                name: 'Jessica Chemistry',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, necessitatibus saepe nobis dolorum voluptatum cum velit doloremque ut ipsum commodi vel praesentium eos quo odio laboriosam cumque iure quae? Omnis.'
            },
        ]
    }
    render() {
        const { users } = this.state
        return (
            <div className='testimonials-container'>

                {users && users.length > 0 &&
                    users.map((e, i) => {
                        return (
                            <TestimonialsContent key={i} name={e.name} text = {e.text}></TestimonialsContent>

                        )
                    })
                }



            </div>
        )
    }
}
export default Testimonials

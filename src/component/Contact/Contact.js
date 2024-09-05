import React from 'react'
import '../../styles/Contact/Contact.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
library.add(faPaperPlane);
class Contact extends React.Component {
    state = {
        fullName: '',
        email: ''
    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
    render() {
        const inputValue = this.state.inputValue
        return (
            <div className='contact-container'>
                <h1 className='page-title'>
                    Contact
                </h1>
                <div className="br-line"></div>
                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.946381076814!2d105.79576369798373!3d21.02281475979516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1725535505075!5m2!1svi!2s" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <h2 className="contact-form-header">
                    Contact form
                </h2>
                <div className='contact-form-container'>

                    <form id="usrform">
                        <label>
                            <input placeholder="Full Name" name="fullName" className='input-form' type="text" onChange={(e) => this.handleOnChange(e)} value={inputValue} />
                            <input placeholder="Email" name="email" className='input-form' type="text" onChange={(e) => this.handleOnChange(e)} value={inputValue} />
                            <textarea placeholder="Message" className="input-form-message" name="comment" form="usrform"></textarea>

                        </label>
                        <button className='input-submit'>
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Contact
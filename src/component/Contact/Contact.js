import React, { useState } from 'react'
import '../../styles/Contact/Contact.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPaperPlane, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
library.add(faPaperPlane, faPhone, faEnvelope, faMapMarkerAlt);


const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        comment: ''
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const notify = () => {
        toast('🦄 Send successfully!')
        setFormData({
            fullName: '',
            email: '',
            comment: ''
        });
    };

    return (
        <div className='contact-container'>
            <h1 className='page-title'>
                Contact
            </h1>
            <div className="br-line"></div>
 
            <iframe
                title='Map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13639.29297320213!2d105.52381034999999!3d20.98868805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b74d5000dd9%3A0x78f00cc4a35484b9!2zSMOyYSBM4bqhYywgVGjhuqFjaCBUaOG6pXQsIEjDoCBO4buZaQ!5e1!3m2!1svi!2s!4v1753658661610!5m2!1svi!2s"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-info">
                <div className="info-item">
                    <FontAwesomeIcon icon="map-marker-alt" className="info-icon" />
                    <span>Hoa Lac, Thach That, Hanoi, Vietnam</span>
                </div>
                <div className="info-item">
                    <FontAwesomeIcon icon="phone" className="info-icon" />
                    <span>0985486619</span>
                </div>
                <div className="info-item">
                    <FontAwesomeIcon icon="envelope" className="info-icon" />
                    <span>nguyenduythai17092005@gmail.com</span>
                </div>
            </div>

            <h2 className="contact-form-header">
                Contact form
            </h2>
            <div className='contact-form-container'>
                <form id="usrform">
                    <label>
                        <input
                            placeholder="Full Name"
                            name="fullName"
                            className='input-form'
                            type="text"
                            onChange={handleOnChange}
                            value={formData.fullName}
                        />
                        <input
                            placeholder="Email"
                            name="email"
                            className='input-form'
                            type="text"
                            onChange={handleOnChange}
                            value={formData.email}
                        />
                        <textarea
                            placeholder="Message"
                            className="input-form-message"
                            name="comment"
                            form="usrform"
                            onChange={handleOnChange}
                            value={formData.comment}
                        />
                    </label>
                    <button onClick={notify} type='button' className='input-submit'>
                        <FontAwesomeIcon icon={faPaperPlane} />
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact
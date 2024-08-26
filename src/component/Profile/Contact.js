import React from 'react'
import '../../styles/Profile/Contact.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome,faCalendar,faPhone,faLocation } from "@fortawesome/free-solid-svg-icons";

library.add(faHome,faCalendar,faPhone,faLocation);

class Contact extends React.Component {
    render() {
        const {iconName,title,text}=this.props
        return (

            <div className="contact flex">

                <div className="icon-container flex">

                    <FontAwesomeIcon icon={iconName} />
                </div>
                <div className="contact-content">
                    <p className='title'>{title}</p>
                    <p className='text'>{text}</p>
                </div>
            </div>

        )
    }
}
export default Contact
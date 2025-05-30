import React, { useState } from 'react'
import '../../styles/Profile/Profile.scss'
import chadPicture from '../../assets/Gigachad-Transparent.png'
import Contact from './Contact'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faInstagram);

// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

const Profile = () => {
    const [contact] = useState([
        {
            id: 1,
            iconName: 'fa-solid fa-home',
            title: 'Email',
            text: '...@gmail.com'
        },
        {
            id: 2,
            title: 'Phone',
            iconName: 'fa-solid fa-phone',
            text: '123456789'
        },
        {
            id: 3,
            iconName: 'fa-solid fa-calendar',
            title: 'Birthday',
            text: 'MM DD, YYY'
        },
        {
            id: 4,
            iconName: 'fa-solid fa-location',
            title: 'Location',
            text: 'VN'
        }
    ]);

    return (
        <aside className='aside-content flex-column-center'>
            <div className="img-container">
                <img src={chadPicture} alt="" />
            </div>
            <h1>Nguyen D. Thai</h1>
            <div className="job">
                <p>Web developer</p>
            </div>
            <div className="br-line"></div>
            {contact && contact.length > 0 && contact.map((e) => (
                <Contact
                    key={e.id}
                    iconName={e.iconName}
                    title={e.title}
                    text={e.text}
                />
            ))}
            <div className="icons">
                <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={'fa-brands fa-facebook'} />
                </a>
                <a target='_blank' rel="noopener noreferrer" href="https://www.x.com/">
                    <FontAwesomeIcon icon={'fa-brands fa-twitter'} />
                </a>
                <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={'fa-brands fa-instagram'} />
                </a>
            </div>
        </aside>
    )
}

export default Profile
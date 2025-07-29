import React, { useState } from 'react'
import '../../styles/Profile/Profile.scss'
import chadPicture from '../../assets/Gigachad-Transparent.png'
import Contact from './Contact'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faFacebook, faTwitter, faInstagram, faGithub, faEnvelope);

// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

const Profile = () => {
    const [contact] = useState([
        {
            id: 2,
            title: 'Phone',
            iconName: 'fa-solid fa-phone',
            text: '0985486619'
        },
        {
            id: 3,
            iconName: 'fa-solid fa-calendar',
            title: 'Birthday',
            text: '17/09/2005'
        },
        {
            id: 4,
            iconName: 'fa-solid fa-location',
            title: 'Location',
            text: 'Ha Noi'
        }
    ]);

    return (
        <aside className='aside-content flex-column-center'>
            <div className="img-container">
                <img src={'https://avatars.githubusercontent.com/u/199640274?v=4'} alt="" />
            </div>
            <h1>Duy Thai</h1>
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
                <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/thai.nguyenduy.52643/">
                    <FontAwesomeIcon icon={'fa-brands fa-facebook'} />
                </a>

                <a target='_blank' rel="noopener noreferrer" href="https://github.com/duythaidev">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
                <a target='_blank' rel="noopener noreferrer" href="mailto:nguyenduythai17092005@gmail.com">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                </a>

            </div>
        </aside>
    )
}

export default Profile
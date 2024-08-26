import React from 'react'
import '../../styles/Profile/Profile.scss'
import chadPicture from '../../assets/Gigachad-Transparent.png'
import Contact from './Contact'


// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'


class Profile extends React.Component {
    state = {
        contact: [
            {
                id: 1,
                iconName:'fa-solid fa-home',
                title: 'Email',
                text: '...@gmail.com'
            },
            {
                id: 2,
                title: 'Phone',
                iconName:'fa-solid fa-phone',

                text: '123456789'
            },
            {
                id: 3,
                iconName:'fa-solid fa-calendar',
                title: 'Birthday',
                text: 'MM DD, YYY'
            },
            {
                id: 4,
                iconName:'fa-solid fa-location',
                title: 'Location',
                text: 'VN'
            }
        ]
    }
    render() {
        const { contact } = this.state
        return (
            <aside className='aside-content flex-column-center'>
                <div className="img-container">
                    <img src={chadPicture} alt="" />
                </div>
                <h1>Ng Duy Thai</h1>
                <div className="job">
                    <p>Web dev</p>
                </div>
                <div className="br-line">
                </div>
                {contact && contact.length > 0 &&
                    contact.map((e, i) => {
                        return (
                            <Contact key={e.id} iconName={e.iconName} title={e.title} text={e.text}></Contact>
                        )
                    })
                }
                <div className="icons"></div>
            </aside>
        )
    }
}
export default Profile
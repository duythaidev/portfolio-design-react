import React from 'react'
import '../../styles/Resume/Resume.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
library.add(faBookOpen);


class Resume extends React.Component {
    state = {
        opacity: 0.1,

        educationTL: [
            {
                place: 'FPT University',
                years: '2023-Current',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nulla vel pariatur tempora qui alias, ratione officiis placeat optio molestiae accusantium ad fugit iure repellendus culpa expedita impedit cupiditate commodi.'
            }
            ,
            {
                place: 'THPT BD',
                years: '2020-2023',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, blanditiis est. Earum eveniet distinctio repellat obcaecati ea. Fugit eligendi dolores consequuntur illo! Repellendus perspiciatis neque animi natus itaque eos facere?'
            }
            ,
            {
                place: 'THCS CH',
                years: '2016-2020',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint, doloremque amet vel culpa earum aperiam non. Vero incidunt perferendis ratione saepe, repellendus eveniet, consequuntur laborum quam, quidem odit culpa.'
            }
        ],
        experienceTL: [
            {
                job: 'Web Developer',
                years: '2023-Current',
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nulla vel pariatur tempora qui alias, ratione officiis placeat optio molestiae accusantium ad fugit iure repellendus culpa expedita impedit cupiditate commodi.'
            }
            ,
            {
                job: 'Web Designer',
                years: '2023-2023',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, blanditiis est. Earum eveniet distinctio repellat obcaecati ea. Fugit eligendi dolores consequuntur illo! Repellendus perspiciatis neque animi natus itaque eos facere?'
            }
            ,
            {
                job: 'Students',
                years: '2016-2020',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint, doloremque amet vel culpa earum aperiam non. Vero incidunt perferendis ratione saepe, repellendus eveniet, consequuntur laborum quam, quidem odit culpa.'
            }
        ]
    }
    async componentDidMount() {
        // this.setState({ opacity: 0.1 })
        // await new Promise(resolve => setTimeout(resolve, 0));
        // this.setState({ opacity: 1 })
    }
    render() {
        const { educationTL, experienceTL } = this.state
        return (
            <div 
            // style={{opacity: this.state.opacity}}
             className="resume-container">
                <h1 className='page-title'>
                    Resume
                </h1>
                <div className="br-line"></div>
                {educationTL && educationTL.length > 0 &&
                    <div className="time-line-box">
                        <div className="vertical-line">
                            <FontAwesomeIcon icon={faBookOpen} />
                            <div className="line-with-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="line"></div>
                            </div>
                        </div>

                        <div className="time-line-content">
                            <h2>Education</h2>
                            {educationTL.map((e, i) =>
                                <div key={i} className="time-line">
                                    <h3>{e.place}</h3>
                                    <p className='years'>{e.years}</p>
                                    <p className='time-line-text'>
                                        {e.content}
                                    </p>
                                </div>
                            )
                            }
                        </div>
                    </div>
                }
                {experienceTL && experienceTL.length > 0 &&
                    <div className="time-line-box">
                        <div className="vertical-line">
                            <FontAwesomeIcon icon={faBookOpen} />
                            <div className="line-with-dots">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="line"></div>
                            </div>
                        </div>

                        <div className="time-line-content">
                            <h2>Experience</h2>
                            {experienceTL.map((e, i) =>
                                <div key={i} className="time-line">
                                    <h3>{e.job}</h3>
                                    <p className='years'>{e.years}</p>
                                    <p className='time-line-text'>
                                        {e.content}
                                    </p>
                                </div>
                            )
                            }
                        </div>
                    </div>
                }
                <h2 className="heading">
                    My Skills
                </h2>
                <div className="skills">
                    <p>ReactJS <span>80%</span></p>
                    <div className="container">
                        <div className="bar-80"></div>
                    </div>
                    <p>Java <span>50%</span></p>
                    <div className="container">
                        <div className="bar-50"></div>
                    </div>
                    <p>WordPress <span>50%</span></p>
                    <div className="container">
                        <div className="bar-50"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Resume

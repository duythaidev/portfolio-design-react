import React, { useState } from 'react'
import '../../styles/Resume/Resume.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

library.add(faBookOpen);

const Resume = () => {
    const [educationTL] = useState([
        {
            place: 'FPT University',
            years: '2023-Current',
            content: 'GPA: 8.8/10, Major: Software Engineering'
        },
        {
            place: 'Semsester 4',
            years: '01/2025 - 04/2025',
            content: 'GPA: 8.6/10'
        },
        {
            place: 'Semsester 3',
            years: '08/2024 - 12/2024',
            content: 'GPA: 9.1/10'
        },
        
        {
            place: 'Semsester 2',
            years: '04/2024 - 08/2024',
            content: 'GPA: 8.5/10'
        },

        {
            place: 'Semsester 1',
            years: '01/2024 - 04/2024',
            content: 'GPA: 8.94/10'
        },
        
        
    ]);

    const [experienceTL] = useState([
        {
            job: 'Web Developer',
            years: '2023-Current',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nulla vel pariatur tempora qui alias, ratione officiis placeat optio molestiae accusantium ad fugit iure repellendus culpa expedita impedit cupiditate commodi.'
        },
        {
            job: 'Web Designer',
            years: '2023-2023',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, blanditiis est. Earum eveniet distinctio repellat obcaecati ea. Fugit eligendi dolores consequuntur illo! Repellendus perspiciatis neque animi natus itaque eos facere?'
        },
        {
            job: 'Students',
            years: '2016-2020',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint, doloremque amet vel culpa earum aperiam non. Vero incidunt perferendis ratione saepe, repellendus eveniet, consequuntur laborum quam, quidem odit culpa.'
        }
    ]);

    return (
        <div className="resume-container">
            <h1 className='page-title'>
                Resume
            </h1>
            <div className="br-line"></div>
            {educationTL && educationTL.length > 0 && (
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
                        <h2 style={{margin: '0'}}>Education</h2>
                        {educationTL.map((e, i) => (
                            <div key={i} className="time-line">
                                <h3>{e.place}</h3>
                                <p className='years'>{e.years}</p>
                                <p className='time-line-text'>
                                    {e.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* {experienceTL && experienceTL.length > 0 && (
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
                        {experienceTL.map((e, i) => (
                            <div key={i} className="time-line">
                                <h3>{e.job}</h3>
                                <p className='years'>{e.years}</p>
                                <p className='time-line-text'>
                                    {e.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )} */}
            <h2 className="heading">
                My Tech Stack
            </h2>
            <div className="skills">
                <p>ExpressJS <span>80%</span></p>
                <div className="container">
                    <div className="bar-80"></div>
                </div>
                <p>NextJS <span>70%</span></p>
                <div className="container">
                    <div className="bar-70"></div>
                </div>
                <p>NestJS <span>60%</span></p>
                <div className="container">
                    <div className="bar-60"></div>
                </div>
                
                <p>React Native <span>50%</span></p>
                <div className="container">
                    <div className="bar-50"></div>
                </div>

                <p>Java <span>50%</span></p>
                <div className="container">
                    <div className="bar-50"></div>
                </div>
            
            </div>
        </div>
    )
}

export default Resume

import React, {useState} from "react";
import "./qualifications.css";

const Qualifications = () => {
    const [toggleState,setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualifications">
            <h2 className="section_title">Qualifications</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div onClick={()=> toggleTab(1)} className={toggleState===1 ? "qualification_button qualification__active button--flex" : "qualification_button button--flex"}
                    >
                        <i className="uil uil-briefcase-alt  qualification_icon"></i> Experince
                    </div>
                    
                    <div onClick={()=> toggleTab(2)} className={toggleState===2 ? "qualification_button qualification__active button--flex" : "qualification_button button--flex"}>

                        <i className="uil uil-graduation-cap qualification_icon"></i> Education
                    </div>

                    
                </div>

                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content" }>
                        <div className="qualification_data">

                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        <div>
                            <h3 className="qualification_title">Custom Portfolio Website</h3>
                                <span className="qualification_subtitle">Denver - Colorado</span>
                                    <div className="qualification_calender">

                                        <i className="uil uil-calendar-alt"></i> 2023
                                        <a href="https://github.com/JoshuaDeckard/Joshua_DA_Portfolio" className="explore_button">Explore this project<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>
                                    </div>       
                            </div>

                            <div>

                            </div>
                        </div>

                        <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Real Estate Website</h3>
                                <span className="qualification_subtitle">Denver - Colorado</span>
                                    <div className="qualification_calender">

                                        <i className="uil uil-calendar-alt"></i> 2023
                                        <a href="https://github.com/JoshuaDeckard/real-estate-project" className="explore_button">Explore this project<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>

                                    </div>       
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>

                            </div>                
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>

                            </div>      

                            <div>
                            <h3 className="qualification_title">Social Media Webapp</h3>
                                <span className="qualification_subtitle">Denver - Colorado</span>
                                    <div className="qualification_calender">

                                        <i className="uil uil-calendar-alt"></i> 2023
                                        <a href="https://github.com/JoshuaDeckard/Django-Social-Media-Webapp" className="explore_button">Explore this project<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>
                                    </div>       
                            </div>          
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content" } >
                        <div className="qualification_data">

                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        <div>
                            <h3 className="qualification_title">CU Denver Student</h3>
                                <span className="qualification_subtitle">3.91 GPA, Computer Science, Economics</span>
                                    <div className="qualification_calender">

                                        <i className="uil uil-calendar-alt"></i> 2022 - Present
                                        <a href="https://engineering.ucdenver.edu/departments/computer-science-and-engineering" className="explore_button">Check It Out<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>
                                    </div>       
                            </div>

                            <div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Lakewood High School</h3>
                                    <span className="qualification_subtitle">4.2 GPA, Robotics Club, Chess Club, and more</span>
                                        <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2021
                                </div>       
                            </div>  

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>

                            </div>                
                        </div>

                        <div className="qualification_data">

                            <div></div>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
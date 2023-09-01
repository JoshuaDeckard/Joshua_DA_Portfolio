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
                                <h3 className="qualification_title">Freelance Website</h3>
                                    <span className="qualification_subtitle">Denver - Colorado</span>
                                        <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                    <a href="https://crpytalcoder" className="explore_button">Explore this project<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>
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
                            <h3 className="qualification_title">Real Estate Website</h3>
                                <span className="qualification_subtitle">Denver - Colorado</span>
                                    <div className="qualification_calender">

                                        <i className="uil uil-calendar-alt"></i> 2023
                                        <a href="https://github.com/JoshuaDeckard/real-estate-project" className="explore_button">Explore this project<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>

                                    </div>       
                            </div>

                            <div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Social Media Web App</h3>
                                    <span className="qualification_subtitle">Denver - Colorado</span>
                                        <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2023
                                    <a href="https://crpytalcoder" className="explore_button">Explore this project<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>
                                </div>       
                            </div>  

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>

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
                            <h3 className="qualification_title">Product Designer</h3>
                                <span className="qualification_subtitle">Microsoft - Spain</span>
                                    <div className="qualification_calender">

                                        <i className="uil uil-calendar-alt"></i> 2021 - Present
                                        <a href="https://crpytalcoder" className="explore_button">Explore this project<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>
                                    </div>       
                            </div>

                            <div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">UX Designer</h3>
                                    <span className="qualification_subtitle">Apple Inc - Spain</span>
                                        <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                    <a href="https://crpytalcoder" className="explore_button">Explore this project<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>
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
                            <h3 className="qualification_title">Web Designer</h3>
                                <span className="qualification_subtitle">Figma - Spain </span>
                                    <div className="qualification_calender">

                                        <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                        <a href="https://crpytalcoder" className="explore_button">Explore this project<i className="bx bx-right-arrow-alt qualification_button-icon"></i></a>
                                    </div>       
                            </div>
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
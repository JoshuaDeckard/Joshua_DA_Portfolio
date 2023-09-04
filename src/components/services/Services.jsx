import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState,setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I Offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-folder services_icon"></i>
                        <h3 className="services_title">Data <br/> Analysis </h3>
                    </div>
                    <span className="services_button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 1 ? "services_modal active-modal":"services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Data Analysis</h3>
                            <p className="services_modal-description">Experince in analyzing large sets of data. Worked closely with voter data bases
                            to win Colorado house races</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                            Proficient with Excel sheets and data manipulation
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                        Strategic voter targeting utilizing advanced analysis techniques                                        
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                            Utilized predictive models to estimate voter outreach
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                            Novel data visualization strategies using district maps to better understand voter targeting goals
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                            Adaptive messaging based on district voter information
                                        </p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Ui/Ux <br/> Designer</h3>
                    </div>
                    <span onClick={() => toggleTab(2)} className="services_button">View More<i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 2 ? "services_modal active-modal":"services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Ui/Ux Designer</h3>
                            <p className="services_modal-description">Experince in developing user friendly and accessible websites.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                        Successfully completed over 12 projects, spanning a diverse range of domains like commerce and social media platforms
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                            Ability to make responsive websites that are accessible across a wide range of devices
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                        Proficient in frameworks and libraries like React and Bootstrap
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                        Proficient in crafting clean and maintainable code through modular design, precise variable naming, and consistent commenting practices
                                        </p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-processor services_icon"></i>
                        <h3 className="services_title">Backend <br/> Developer</h3>
                    </div>
                    <span onClick={()=> toggleTab(3)} className="services_button">View More<i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 3 ? "services_modal active-modal":"services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={()=> toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Backend Developer</h3>
                            <p className="services_modal-description">Experience in backend development with multiple projects demonstrating proficiency in designing
                            implementing server-side solutions. </p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                        Experience generating SSH keys and using environment variables to ensure server protection                                       
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                            Familiarity with backend frameworks like Django and Node.js
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                            Knowledge of Bash and Linode deployment techniques 
                                        </p>
                                    </i>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon">
                                        <p className="services_modal-info">
                                            Proficient in version control systems like Git to manage codebase changes effectively
                                        </p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
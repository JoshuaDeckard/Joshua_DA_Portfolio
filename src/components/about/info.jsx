import React from "react";

const Info = () => {
    return(
        <div className="about_info grid">
            <div className="about_box">
                <i class="bx bx-award about_icon"></i>
                <h3 className="about_title">Experince</h3>
                <span className="about_subtitle">2+ years programming</span>
            </div>

            <div className="about_box">
                <i class="bx bx-briefcase-alt about_icon"></i>
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">15+ projects completed</span>
            </div>

            <div className="about_box">
            <i class="bx bx-happy-alt about_icon"></i>
            <h3 className="about_title">Involvment</h3>
                <span className="about_subtitle">Team player and always engaged</span>
            </div>
        </div>
    );
};

export default Info;
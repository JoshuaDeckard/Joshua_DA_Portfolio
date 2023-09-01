import React from "react";
import './skills.css';
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
    return(
        <sections className="skills section">
            <h2 className="section_title" id="skills">Skills</h2>
            <span className="section_subtitle">My technical level</span>

            <div className="skills_container container grid">
                <Frontend/>

                <Backend/>
            </div>
        </sections>
    )
}

export default Skills;
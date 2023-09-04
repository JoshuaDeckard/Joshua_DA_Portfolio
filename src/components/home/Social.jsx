import React from "react";
import { Icon } from '@iconify/react';

const Social = () => {
    return(
        <div className="home_social">
            <a href="https://www.linkedin.com/in/joshua-deckard-anderson-924640237/" className="home_social-icon" target="_blank">
                <Icon icon="uil:linkedin" />
            </a>

            <a href="https://github.com/JoshuaDeckard" className="home_social-icon" target="_blank">
                <i class="uil uil-github-alt"></i>
            </a>

            <a href="https://github.com/JoshuaDeckard" className="home_social-icon" target="_blank">
                <i class="uil uil-instagram-alt"></i>
            </a>

            <a href="https://github.com/JoshuaDeckard" className="home_social-icon" target="_blank">
                <i class="uil uil-facebook"></i>
            </a>
        </div>
    );
};

export default Social;
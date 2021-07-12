import React from 'react';
import './SocialBar.css';

export const SocialBar = () => {
    return (
        <div className="social-bar__container">
            <a href="https://github.com/timmendenhall" className="social-bar__button" target="new"><i
                className="fab fa-github"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/timmendenhall/" className="social-bar__button" target="new"><i
                className="fab fa-linkedin-in"></i> LinkedIn</a>
        </div>
    );
}

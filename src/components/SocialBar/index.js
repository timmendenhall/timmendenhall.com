import React from 'react';
import './SocialBar.css';

export const SocialBar = () => {
    return (
        <div className="social-bar__container">
            <button type="button" className="social-bar__button">GitHub</button>
            <button type="button" className="social-bar__button">LinkedIn</button>
        </div>
    );
}

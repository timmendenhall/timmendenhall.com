import React from 'react';
import './Welcome.css';

export const Welcome = () => {
    return (
        <div className="welcome__container">
            <div className="welcome__card">
                <span className="welcome__card-greeting">
                    Hello, I'm
                </span>
                <span className="welcome__card-greeting">
                    Tim Mendenhall
                </span>
            </div>
        </div>
    );
}

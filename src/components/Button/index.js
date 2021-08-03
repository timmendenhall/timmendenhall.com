import React from 'react';
import './Button.css';

export const Button = ({ href, target, icon, text }) => {
  let iconContent = icon ? <i className={`${icon} core__button-icon`} /> : null;

  return (
    <a href={href} className="core__button" target={target} rel="noreferrer">
      {iconContent}
      {text}
    </a>
  );
};

Button.defaultProps = {
  href: '',
  target: '_blank',
};

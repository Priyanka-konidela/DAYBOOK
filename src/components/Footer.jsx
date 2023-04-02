import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear;
    return (
        <footer>Copyright ⓒ {currentYear} by Priyanka B</footer>
    );
}

export default Footer;
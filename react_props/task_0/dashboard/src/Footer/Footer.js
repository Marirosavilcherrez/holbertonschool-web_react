import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils';

const Footer = () => {
    return (
        <div className= "App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </div>
    )
}

export default Footer;
import React from 'react';
import './Footer.scss';
import Image from '../../static/images/indigotheory.png'

const Footer = () => (
  <div className='footer'>
      <div className='footer-inside'>
          <div className='footer-text'>Wolfpack is a service of Indigo Theory</div>
          <img className='footer-image' src={Image} alt='Indigo Theory'/>
      </div>
  </div>
);
export default Footer;

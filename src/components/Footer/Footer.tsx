import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <div className="footer" data-testid="Footer">
      <div className="footer__content container">
          <p>Made with <span className="text-tertiary">&#10084;</span> with React.js</p>
      </div>
  </div>
);

export default Footer;

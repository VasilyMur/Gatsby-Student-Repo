import React from 'react';
import { Link } from 'gatsby';
import FooterStyles from '../styles/FooterStyles';

const Footer = () => (
  <FooterStyles>
    <div className="wrapperForm">
      <legend>
        <span className="formAction">Subscribe</span> to new post notifications
      </legend>
    </div>
    <div className="wrapperMain">
      © {new Date().getFullYear()}
      {` `}
      <Link to="/">Travel Blog </Link>
    </div>
  </FooterStyles>
);

export default Footer;

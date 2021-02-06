import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import image from '../../assets/EntreLogo.svg';

export const Logo = () => <img src={image} alt="Logo" />;
function Navbar({ logo = Logo, links }) {
  return (
    <div className="Navbar">
      {logo}
      <div>
        {links}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  logo: PropTypes.any,
  links: PropTypes.any,
};

Navbar.defaultProps = {
  logo: <Logo />,
  links: 'Home',
};

export default Navbar;

import React from 'react';

//styles and icons
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FootCard from '../../Styles/Footer/Footer.styled';

const Footer = () => {
  return (
    <FootCard>
      <div className='footer-columns'>
        <div className='title'>
          <span>Rrawen</span>
          <div>
            <InstagramIcon className='icons' />
            <TwitterIcon className='icons' />
            <FacebookIcon className='icons' />
          </div>
        </div>
        <div className='column1'>
          <h4>Account</h4>
          <span>Register</span>
          <span>Sign in</span>
          <span>Wish List</span>
          <span>Orders</span>
          <span>Returns</span>
        </div>
        <div className='column2'>
          <h4>Assistance</h4>
          <span>Terms & Conditions</span>
          <span>Privacy Notice</span>
          <span>Returns & Exchanges</span>
          <span>Customer Service</span>
          <span>Gift Cards</span>
        </div>
        <div className='column3'>
          <h4>Store</h4>
          <span>Sales</span>
          <span>New</span>
          <span>Womens</span>
          <span>Mens</span>
          <span>Jewelery</span>
        </div>
      </div>
    </FootCard>
  );
};

export default Footer;

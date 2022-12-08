import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import img from '../../images/pngwing.com (3).png'
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 glass" data-aos='fade-up'>
        <div>
          <img src={img} className='h-28' alt="" />
          <p className="font-bold">
          Thank you for your visit
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
              <a className='text-2xl text-green-200' target={'_blank'} href="https://www.facebook.com/profile.php?id=100064049902400"><FaFacebook></FaFacebook></a>
              <a className='text-2xl text-green-200' target={'_blank'} href="https://www.linkedin.com/in/omar-faruk-b66513257/"><FaLinkedin></FaLinkedin></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
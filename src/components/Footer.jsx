import React from 'react';
import { Footer } from 'flowbite-react';
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';

function MyFooter() {
  return (
    <Footer className='lg:mt-20'>
      {/* Assuming bg-dark is intentional for both light and dark modes for the footer background */}
      {/* Text and icons need to be light to be visible */}
      <div className="w-full px-4 py-6 bg-dark sm:flex sm:items-center sm:justify-between text-white">
        <Footer.Copyright href="#" by="Abel Kifletsion™" year={2023} className="text-sm text-gray-300 sm:text-center" />
        <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
          {/* Flowbite icons should inherit color, but explicitly setting for safety */}
          <Footer.Icon href="#" icon={BsFacebook} className="text-gray-300 hover:text-white"/>
          <Footer.Icon href="#" icon={BsInstagram} className="text-gray-300 hover:text-white"/>
          <Footer.Icon href="https://www.linkedin.com/in/abelfkifle/" target="_blank"  icon={BsLinkedin} className="text-gray-300 hover:text-white"/>
          <Footer.Icon href="https://github.com/abelfish" target="_blank" icon={BsGithub} className="text-gray-300 hover:text-white"/>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;

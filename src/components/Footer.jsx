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
      <div className="w-full px-4 py-6 bg-dark sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Abel Kifletsion™" year={2023} />
        <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="https://www.linkedin.com/in/abelfkifle/" target="_blank"  icon={BsLinkedin} />
          <Footer.Icon href="https://github.com/abelfish" target="_blank" icon={BsGithub} />
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;

import { Button, Navbar } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import linkedin from '../assets/images/nav-icon1.svg';
import github from '../assets/images/github.svg';

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updateActiveLink = (link) => {
    setActiveLink(link);
  };
  const divStyle =
    'fixed top-0 justify-center w-full px-5 pt-6 md:px-10 lg:px-10 z-50 bg-white bg-opacity-80';

  return (
    <div className={scrolled ? 'scrolled ' + divStyle : divStyle}>
      <Navbar className=" lg:max-w-screen-xl lg:mx-auto bg-opacity-80">
        <Navbar.Brand href="" className="">
          <h1 className="text-xl font-semibold lg:text-5xl font-kanit">
            Abel <span className="text-secondary font-inter">.</span>
          </h1>
        </Navbar.Brand>

        <div className="flex md:order-2 ">
          <a
            href="#contact"
            className="p-1 font-semibold border-2 lg:p-3 lg:text-2xl border-secondary"
          >
            Contact Me
          </a>
          <Navbar.Toggle className="focus: ring-0" />
        </div>

        <Navbar.Collapse>
          <Navbar.Link
            href="#home"
            className={
              activeLink === 'home'
                ? 'active lg:text-xl mr-5'
                : 'lg:text-xl mr-5'
            }
            onClick={() => updateActiveLink('home')}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#resume"
            className={
              activeLink === 'resume'
                ? 'active lg:text-xl mr-5'
                : 'lg:text-xl mr-5'
            }
            onClick={() => updateActiveLink('resume')}
          >
            Resume
          </Navbar.Link>
          <Navbar.Link
            href="#skills"
            className={
              activeLink === 'skills'
                ? 'active lg:text-xl mr-5'
                : 'lg:text-xl mr-5'
            }
            onClick={() => updateActiveLink('skills')}
          >
            Skills
          </Navbar.Link>
          <Navbar.Link
            href="#projects"
            className={
              activeLink === 'projects'
                ? 'active lg:text-xl mr-5'
                : 'lg:text-xl mr-5'
            }
            onClick={() => updateActiveLink('projects')}
          >
            Projects
          </Navbar.Link>

          <span className=" justify-normal">
            <div className="flex justify-center gap-8 align-middle">
              <a href="https://www.linkedin.com/in/abelfkifle/" target="_blank">
                {' '}
                <img src={linkedin} alt="Linked In" width={25} height={25} />
              </a>

              <a href="https://github.com/abelfish" target="_blank">
                {' '}
                <img src={github} width={32} height={32} alt="Github" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

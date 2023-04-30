import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import img from '../assets/images/Untitled.png';

function Portfolio() {
  return (
    <div
      id="home"
      className="w-3/4 mx-auto mb-20 mt-28 lg:grid lg:grid-cols-2 scroll-m-56 md:mb-20 lg:mt-52 lg:mb-36 "
    >
      <div className="mx-auto ">
        <h1 className="mb-4 text-5xl font-extrabold tracking-wide text-transparent font-kanit bg-clip-text bg-gradient-to-r from-secondary to-fuchsia-800 lg:text-7xl ">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r to-purple-900 from-secondary">
            Hi! I am
          </span>{' '}
          Abel Kifletsion.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:w-5/6 lg:text-xl">
          I am Proficient in building scalable and efficient RESTful APIs using
          SpringBoot, deploying applications using containerization technologies
          like Docker and Kubernetes, and creating interactive UI using
          front-end frameworks like React and Angular.
        </p>
        <div className="mt-10">
          <a
            className="p-2 mr-5 text-sm text-center text-white border-2 lg:font-semibold lg:px-5 lg:py-3 lg:w-32 lg:text-xl drop-shadow-2xl border-secondary bg-secondary hover:bg-red-600 hover:border-red-600"
            href="#projects"
          >
            My Projects
          </a>
          <a
            className="p-1 mr-5 font-semibold text-center lg:border-2 lg:py-3 lg:px-5 lg:w-32 lg:text-xl hover:font-bold lg:border-secondary"
            href="#resume"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 right-52 lg:mt-0">
        <img src={img} width={900} alt="" />
      </div>
    </div>
  );
}

export default Portfolio;

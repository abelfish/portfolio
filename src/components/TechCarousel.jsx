import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import angular from '../assets/images/angular.svg';
import css from '../assets/images/css.svg';
import docker from '../assets/images/docker.svg';
import express from '../assets/images/express.svg';
import git from '../assets/images/git.svg';
import github from '../assets/images/github.svg';
import html from '../assets/images/html.svg';
import java from '../assets/images/java.svg';
import js from '../assets/images/js.svg';
import kafka from '../assets/images/kafka.svg';
import mongo from '../assets/images/mongo.svg';
import node from '../assets/images/node.svg';
import react from '../assets/images/react.svg';
import spring from '../assets/images/springboot.svg';

function TechCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
  };
  return (
    <div className="overflow-hidden lg:mx-32 lg:h-36">
      <div className="px-20 mb-6">
        <h1 className="text-3xl font-bold text-primary font-kanit">
          Tools and Technologies
        </h1>
      </div>
      <Slider {...settings} className="">
        <div className="w-10">
          <img src={html} width={60} alt="skill" />
        </div>
        <div className="w-10">
          <img src={css} width={60} alt="skill image" />
        </div>
        <div className="w-10">
          <img src={js} width={60} alt="skill" />
        </div>
        <div className="w-10">
          <img src={node} width={60} alt="skill image" />
        </div>
        <div className="w-10">
          <img src={react} width={60} alt="skill" />
        </div>
        <div className="w-10">
          <img src={angular} width={60} alt="skill" />
        </div>

        <div className="w-10">
          <img src={java} width={60} alt="skill image" />
        </div>
        <div className="w-10">
          <img src={spring} width={60} alt="skill image" />
        </div>
        <div className="w-10">
          <img src={docker} width={60} alt="skill image" />
        </div>
        <div className="w-10">
          <img src={git} width={60} alt="skill image" />
        </div>
        <div className="w-10">
          <img src={github} width={60} alt="skill image" />
        </div>
        <div className="w-10">
          <img src={kafka} width={40} alt="skill image" />
        </div>

        <div className="w-1/12">
          <img src={mongo} width={60} alt="skill image" />
        </div>
      </Slider>
    </div>
  );
}

export default TechCarousel;

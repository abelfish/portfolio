import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import meter1 from '../assets/images/meter1.svg';
import meter2 from '../assets/images/meter2.svg';
import meter3 from '../assets/images/meter3.svg';
import colorSharp from '../assets/images/color-sharp.png';

function skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="relative scroll-m-10 lg:my-60" id="skills">
      <div>
        <div>
          <div>
            <div className="relative py-10 mx-6 text-center bg-white border-2 border-b-0 border-r-0 border-white border-opacity-50 shadow-2xl lg:mx-32 mt border-xl rounded-2xl bg-opacity-10">
            <h1 className="text-5xl font-bold font-kanit">Skills</h1>

              <Carousel
                className="relative mx-auto mt-10 h-1/2"
                responsive={responsive}
                infinite={true}
                centerMode={true}
                autoPlay={true}
              >
                <div className="flex flex-col w-2/3">
                  <img src={meter2} alt="skill" />
                  <h3 className="mt-10 font-semibold lg:text-2xl">
                    Java
                  </h3>
                </div>
                <div className="flex flex-col w-2/3">
                  <img src={meter1} alt="skill" />
                  <h3 className="mt-10 font-semibold lg:text-2xl">
                    SpringBoot
                  </h3>
                </div>
                <div className="flex flex-col w-2/3">
                  <img src={meter3} alt="skill" />
                  <h3 className="mt-10 font-semibold lg:text-2xl">
                    Kafka
                  </h3>
                </div>
                <div className="flex flex-col w-2/3">
                  <img src={meter1} alt="skill image" />
                  <h3 className="mt-10 font-semibold lg:text-2xl">
                    React
                  </h3>
                </div>
                <div className="flex flex-col w-2/3">
                  <img src={meter2} alt="skill" />
                  <h3 className="mt-10 font-semibold lg:text-2xl">
                    Angular
                  </h3>
                </div>
                <div className="flex flex-col w-2/3">
                  <img src={meter1} alt="skill" />
                  <h3 className="mt-10 font-semibold lg:text-2xl">
                    Databases
                  </h3>
                </div>
                <div className="flex flex-col w-2/3">
                  <img src={meter3} alt="skill" />
                  <h3 className="mt-10 font-semibold lg:text-2xl">
                    Git
                  </h3>
                </div>
                <div className="flex flex-col w-2/3">
                  <img src={meter1} alt="skill image" />
                  <h3 className="mt-10 font-semibold lg:text-2xl">
                    Docker
                  </h3>
                </div>
              </Carousel>
            </div>
            <img
              className="absolute w-1/3 top-1/3 opacity-80"
              src={colorSharp}
              alt="color-sharp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default skills;

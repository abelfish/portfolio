import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bank from '../assets/images/bank.png';
import colorSharp from '../assets/images/color-sharp2.png';
import hotel from '../assets/images/hotel.png';
import jobs from '../assets/images/job.png';
import library from '../assets/images/library.png';
import notes from '../assets/images/notes.jpg';
import parts from '../assets/images/parts.jpg';
import ProjectModal from './ProjectModal';
function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  return (
    <section className="relative mx-auto mt-10 scroll-m-10 " id="projects">
      <div>
        <div>
          <div>
            <div className="relative mx-6 text-center bg-white border-2 border-b-0 border-r-0 border-white border-opacity-50 shadow-2xl lg:mx-32 lg:py-10 px mt border-xl rounded-2xl bg-opacity-10">
              <h2 className="text-5xl font-bold font-kanit">My Projects</h2>

              <Carousel
                className="mt-10 "
                responsive={responsive}
                infinite={true}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={2000}
              >
                <a href="https://github.com/abelfish/Simple-Note-Taking-App-public.git">
                <div className="mx-2 cursor-pointer">
                  <img
                    src={notes}
                    className="shadow-2xl rounded-2xl "
                    width={500}
                    height={300}
                    alt="skill"
                  />
                  <h3 className="text-center lg:mt-5 lg:text-2xl lg:font-semibold">
                    Simple Note Taking App
                  </h3>
                </div>
                </a>

                <a href="https://github.com/abelfish/alumni-management.git">
                  <div className="mx-2">
                    <img
                      src={jobs}
                      className="shadow-2xl rounded-2xl "
                      width={500}
                      height={300}
                      alt="skill"
                    />
                    <h3 className="text-center lg:mt-5 lg:text-2xl lg:font-semibold">
                      Student Job Posting App
                    </h3>
                  </div>
                </a>
                <a href="https://www.github.com/abelfish">
                  <div className="mx-2">
                    <img
                      src={library}
                      className="shadow-2xl rounded-2xl "
                      width={500}
                      height={300}
                      alt="skill"
                    />
                    <h3 className="text-center lg:mt-5 lg:text-2xl lg:font-semibold">
                      Library Management System
                    </h3>
                  </div>
                </a>
                <a href="https://www.github.com/abelfish">
                  <div className="mx-2">
                    <img
                      src={parts}
                      className="shadow-2xl rounded-2xl "
                      width={500}
                      height={300}
                      alt="skill image"
                    />
                    <h3 className="text-center lg:mt-5 lg:text-2xl lg:font-semibold">
                      Auto Parts Catalogue System
                    </h3>
                  </div>
                </a>
                <a href="https://www.github.com/abelfish">
                  <div className="mx-2">
                    <img
                      src={hotel}
                      className="shadow-2xl rounded-2xl "
                      width={500}
                      height={300}
                      alt="skill image"
                    />
                    <h3 className="text-center lg:mt-5 lg:text-2xl lg:font-semibold">
                      Hotel Management System
                    </h3>
                  </div>
                </a>
                <a href="https://github.com/abelfish/Natna-Bank-Project.git">
                  <div className="mx-2">
                    <img
                      src={bank}
                      className="shadow-2xl rounded-2xl "
                      width={500}
                      height={300}
                      alt="skill image"
                    />
                    <h3 className="text-center lg:mt-5 lg:text-2xl lg:font-semibold">
                      Banking App Project
                    </h3>
                  </div>
                </a>
              </Carousel>
            </div>
          </div>
        </div>
        <img
          className="absolute right-0 w-1/3 opacity-50 top-2/3"
          src={colorSharp}
          alt="color-sharp"
        />
      </div>
      <ProjectModal open={open} onClose={() => setOpen(false)}>
        
      </ProjectModal>
    </section>
  );
}

export default Projects;

import { Button, Timeline } from 'flowbite-react';
import React from 'react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

function Resume() {
  return (
    <div
      id="resume"
      className="py-10 mx-6 my-20 text-center bg-white border-2 border-b-0 border-r-0 border-white border-opacity-50 shadow-2xl scroll-m-10 lg:my-60 lg:mx-32 mt border-xl rounded-2xl bg-opacity-30"
    >
      <div className="lg:mx-32 lg:my-12">
        <div>
          <h1 className="text-5xl font-bold font-kanit">My Resume</h1>
        </div>

        <div className="gap-16 lg:grid lg:grid-cols-2">
          <div>
            <div className="mt-10 lg:mt-32">
              <h1 className="text-3xl font-bold font-Inter">Work Experience</h1>
            </div>
            <Timeline className="px-5 mt-8 lg:mt-16 lg:mr-20">
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>December 2019 - February 2022</Timeline.Time>
                  <Timeline.Title className='dark:text-dark'>Software Engineer</Timeline.Title>
                  <Timeline.Body>
                    I was responsible for designing and developing software
                    solutions for various clients across industries. I have
                    expertise in using a wide range of technologies, including
                    Spring Boot, Docker, AWS EC2, S3, React, Angular, MongoDB,
                    Redis, and Elasticsearch.
                    <span className="pt=10">
                      
                    </span>
                  </Timeline.Body>
                  <Timeline.Body>
                  I oversaw migration of many monolithic applications to
                      cloud-hosted microservices using Spring Boot and Rest
                      APIs. In addition to frontend and backend development, I
                      have experience in working with various databases such as
                      MongoDB, Redis, and Elasticsearch. I have expertise in
                      designing and optimizing database schemas to ensure
                      maximum performance and scalability.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>September 2016 - July 2019</Timeline.Time>
                  <Timeline.Title className='dark:text-dark'>Junior Java Developer</Timeline.Title>
                  <Timeline.Body>
                  Throughout my time at the company, I consistently demonstrated my ability to meet project deadlines and work collaboratively with colleagues across multiple departments. I maintained up-to-date knowledge of the latest Java development tools and techniques, and I actively sought out opportunities to apply new technologies and improve existing processes.
                  </Timeline.Body>
                  <Timeline.Body>
                  One of my main projects was the development of an application that streamlined the import/export process, allowing the company to manage shipments, inventory, and customs clearance more efficiently.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              
            </Timeline>
          </div>
          <div className="lg:ml-20">
            <div className="mt-16 lg:mt-32">
              <h1 className="text-3xl font-bold font-Inter">Education</h1>
            </div>
            <Timeline className="mt-8 lg:mt-16 ">
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>August 2022 - Present</Timeline.Time>
                  <Timeline.Title className='dark:text-dark'>
                    Master's Degree in Computer Science
                  </Timeline.Title>
                  <Timeline.Body>
                    I am currently pursuing a Master's Degree in Computer Science
                    at Maharishi International University in  Fairfield, Iowa.
                    So far, I have completed coursework in advanced topics such as enterprise software architecture, big data, modern web application and cloud computing.
                  </Timeline.Body>
                  <Timeline.Body>
                  I have developed and deployed several project applications in teams and individually with scalability and containerization in mind. I have also acquired hands-on experience with emerging technologies such as Spring, SpringBoot, Kafka, Redis, React, Angular. 
                  </Timeline.Body>
                  
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>September 2011 - July 2016</Timeline.Time>
                  <Timeline.Title className='dark:text-dark'>
                    Bachelor's Degree in Computer Science
                  </Timeline.Title>
                  <Timeline.Body>
                  I earned my Bachelor’s in CS with focus on software engineering and computer architecture design
                  </Timeline.Body>
                  <Timeline.Body>
                  I have developed and deployed several project applications in teams and individually with scalability and containerization in mind. I have also acquired hands-on experience with emerging technologies such as Spring, SpringBoot, Kafka, Redis, React, Angular. 
                  </Timeline.Body>
                  
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
      <div>
        <a
          href=""
          className="w-56 px-5 py-3 mr-5 font-semibold text-center text-white border-2 text drop-shadow-2xl border-secondary bg-secondary hover:bg-red-600 hover:border-red-600"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;

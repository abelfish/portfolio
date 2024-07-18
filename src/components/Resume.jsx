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
                  <Timeline.Time>September 2023 - February 2024</Timeline.Time>
                  <Timeline.Title className='dark:text-dark'>Software Engineer</Timeline.Title>
                  <Timeline.Body>
                    Used Kotlin extensively to implement clean code, developing spring boot microservices and multi-layered architectures. Implemented asynchronous non-blocking code using co-routines. Provided over 90% code coverage on implementations. Improved latency of API endpoints by using active Redis clusters. Worked across primary and away teams to integrate and streamline the incorporation to existing services such as Order Management and Checkout steps. Implemented, documented, and tested the logic to evaluate loyalty program promotions within the core promotions engine. 
                    <span className="pt-10">
                      
                    </span>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>December 2019 - February 2022</Timeline.Time>
                  <Timeline.Title className='dark:text-dark'>Software Engineer</Timeline.Title>
                  <Timeline.Body>
                  Designed and developed software solutions for various clients. During my time there, I used several technologies including Spring Boot, Docker, React, Angular, and MongoDB. I played a key role in developing highly scalable and performant web applications using Spring Boot and Docker. Gained Experience in using Spring Data main modules like Hibernate, JPA, REST, and Elastic search.	I oversaw the migration of over 5 monolithic large-scale applications to cloud-hosted microservices using Spring Boot and Rest APIs.

                    <span className="pt-10">
                      
                    </span>
                  </Timeline.Body>
                  <Timeline.Body>
                  Gained Experience in AWS services such as EC2. S3, RDS, VPC. Additionally, I worked with various databases such as MongoDB, Redis, and Elasticsearch. Implemented test-driven design (TDD) in SDLC and improved the time needed for development and testing by 48%. Also reduced long-term costs by more than 60%.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>September 2015 - July 2019</Timeline.Time>
                  <Timeline.Title className='dark:text-dark'>Java Developer</Timeline.Title>
                  <Timeline.Body>
                  As a developer for the import/export company, participated in multiple simultaneous projects of diverse complexity. During my time there, I directly impacted the marginal profits of the company, which rose 24% each year. Also Mentored 21 new recruits over the period of 3 years.

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
                  <Timeline.Time>August 2022 - December 2023</Timeline.Time>
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
          href="https://1drv.ms/w/s!ArI_vFNBfyKSoIsi-S7m99-1yjDgOw?e=dguzfz"
          className="w-56 px-5 py-3 mr-5 font-semibold text-center text-white border-2 text drop-shadow-2xl border-secondary bg-secondary hover:bg-red-600 hover:border-red-600"
        >
          Open Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;

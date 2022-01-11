import React from "react";
import Layout from "@theme/Layout";
import "./about.css";
import Experience from "../components/Experience";
function Hello() {
  return (
    <Layout title="Hello">
      <h1 className="underlineTitle">About Me</h1>
      <h2 className="bodyAbout">Hello,</h2>
      <p className="bodyAboutDetail">
        I am Manny, a passionate full stack software developer. <br />
        I'm from China and currently graduated from University of Adelaide with
        a Computing and Innovation degree.
        <br />
      </p>


      <p className="bodyAboutDetail">
        Im Strongly interested in Full Stack Software Engineer, Highly effective
        at developing and standardizing designs according to company brand and
        objectives. Knowledgeable Front End Developer adept at creating
        successful websites that meet customer needs. Specializing in
        collaborating with customers to gather requirements, produce plans and
        improve designs for usability and functionality.
      </p>

      <div className="experience-container">
        <h1 className="underlineTitle mx">Experience</h1>
        <div>
          <Experience
            title="Project - Maptek Staff Management Utility"
            smTitle="Software Engineer"
            date="July 2020-Dec 2020"
          >
            <p>
            Tools: Html, CSS, javascript, Google sheets,GS-code, Google apps script, Agile
the main task of the project is to make the relationship between employees more clear. In the process of web page implementation, we introduced a tree diagram to reflect the direct relationship between employees and the department they are in.
            </p>
            <p>
            Key responsibility:
            Design and implementation of the front end of the web pages to ensure proper interaction between the front end and Google sheets
            Gathering user requirements and designing ideas for implementation
            Continuously revise the code and related functionality in response to changes in user requirements.
            Organize and prepare weekly reports on the team's achievements and progress.
            </p>
          </Experience>

          <Experience
            title="Master of Computing and Innovation Project - Tapping into community-lead software project"
            smTitle="Software Engineer"
            date="Mar 2021 - June 2021"
          >
            <p>
            Tools: HTML5/CSS/Javascript, NodeJS/Django, React.js, SpringBoot, PHP. MySql
            </p>
            <p>
            This project is to create an online interactive web page for Computer Science students. Students can find projects that they are interested in to get involved through this online platform. This platform will also provide students with invaluable experience in participating in real projects and the professors and proposers have a better way to find the potential employees. This project aims to provide a platform for different users (students and professors) to communicate specific information(Proposals of projects/) according to their different needs
            </p>
            <p>
            Key responsibility:
            Design and implementation of the front-end interface.
            Back-end connectivity and project uptime.
            Completion testing of the project.
            Deployment of the project to the cloud and ensuring external access to the project.
            </p>
          </Experience>

          <Experience
            title="Bank of Ningbo"
            smTitle="Product manager part-time"
            date="Aug 2021 to Dec 2021"
          >
            <p>
            Conducted customer research using qualitative surveys to understand consumer opinions.
            Maintained and updated project plan by tracking technical dependencies and issued project milestone updates.
            Assisted with life cycle inventory analysis and management by helping with data gathering.
            Researched competitive landscape to report key insights on market leaders.
            </p>
            <p>
            Interviewed target audience in the current market to conduct ethnographic studies.
            Completed data cleaning and data validation of existing spreadsheets to promote robust data management platform, resulting in accurate data analysis .
            Cleaned up and backed up data to maintain data integrity during extraction, manipulation and processing.
            </p>
          </Experience>

          <Experience
            title="Personal website"
            smTitle="Front-end developer"
            date="Jan 2022 to Jan 2022"
          >
            <p>
            Tools: Docusaurus, React, AWS, bootstrap, Parcel, node.js
            </p>
            <p>
            The main function of the personal pages is to present basic personal information, as well as personal project experience, and comes with a blog function for posting and recording personal notes.
            </p>
          </Experience>

          <Experience
            title="Dreambuilder wedding firm"
            smTitle="Front-end developer"
            date="Jan 2022 to Jan 2022"
          >
            <p>
            Tools: Wordexpress, Elementor, Astra.
            </p>
            <p>
            website: dreamweddingbuilder.com
            </p>
            <p>
            The main content of the project is to create a static website for wedding planning companies, mainly used to promote the company's content, company profile and showcase the company's success stories, and to provide some user interaction features, registration and submission of express of interests
            </p>
          </Experience>
        </div>
      </div>
    </Layout>
  );
}

export default Hello;

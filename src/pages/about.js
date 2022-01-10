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
            title="Padlet"
            smTitle="Software Engineer"
            date="January 2021 to Present"
          >
            <p>
              Padlet is a real-time collaborative platform on which millions of
              people across the globe share content using digital bulletin
              boards called padlets. I work on the platform as a Full Stack and
              Support Engineer.
            </p>
            <p>
              As a Full Stack Engineer, I deliver end-to-end solutions by
              working on all levels of the stack, from the infrastructure to the
              backend (Ruby on Rails) to the frontend (VueJS).
            </p>
          </Experience>

          <Experience
            title="Padlet"
            smTitle="Software Engineer"
            date="January 2021 to Present"
          >
            <p>
              Padlet is a real-time collaborative platform on which millions of
              people across the globe share content using digital bulletin
              boards called padlets. I work on the platform as a Full Stack and
              Support Engineer.
            </p>
            <p>
              As a Full Stack Engineer, I deliver end-to-end solutions by
              working on all levels of the stack, from the infrastructure to the
              backend (Ruby on Rails) to the frontend (VueJS).
            </p>
          </Experience>

          <Experience
            title="Padlet"
            smTitle="Software Engineer"
            date="January 2021 to Present"
          >
            <p>
              Padlet is a real-time collaborative platform on which millions of
              people across the globe share content using digital bulletin
              boards called padlets. I work on the platform as a Full Stack and
              Support Engineer.
            </p>
            <p>
              As a Full Stack Engineer, I deliver end-to-end solutions by
              working on all levels of the stack, from the infrastructure to the
              backend (Ruby on Rails) to the frontend (VueJS).
            </p>
          </Experience>
        </div>
      </div>
    </Layout>
  );
}

export default Hello;

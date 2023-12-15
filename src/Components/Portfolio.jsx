/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio_section_img.jpg";

const imageAltText = "A desk with code on the screen of the computer";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Aten RPG",
    description:
      "A voice-acted role-playing game developed using C++ and the Qt framework.",
    url: "https://www.almnayer.com/atenrpg",
  },
  {
    title: "BeatSeeker",
    description:
      "A concert ticketing system developed with Django, Python, JavaScript, HTML, and CSS.",
    url: "https://github.com/Mounayer/BeatSeeker_Concert_Ticketing_System",
  },
  {
    title: "Portfolio Website",
    description:
      "An elegantly designed, responsive showcase of my professional journey and projects, created using Next.js for a seamless user experience.",
    url: "https://www.almnayer.com/",
  },
  {
    title: "Lock-It",
    description:
      "Encrypted data vault for file storage, developed using Node.js, JavaScript, Next.js, and AWS Services.",
    url: "https://github.com/Mounayer/Team-BSD-Bell-Geekfest-Hackathon-2023",
  },
  {
    title: "Efficient String Library",
    description:
      "A C++ library that offers optimized string operations, using 7 bits for each character. Providing a total of 12.5% memory savings over the standard C++ string library.",
    url: "https://github.com/Mounayer/The-Efficient-String-Library",
  }
  ,
  {
    title: "Fade Scroll Hook",
    description:
      "A custom React Hook designed to fade components in and out during scrolling.",
    url: "https://github.com/Mounayer/useFadeScroll-React-Hook",
  }
  ,
  {
    title: "Algorithm Profiler",
    description:
      "A tool that measures the performance of algorithms in C++, utilizing gnuplot and matplotplusplus.",
    url: "https://github.com/Mounayer/Algorithm_Profiler",
  }
  ,
  {
    title: "CollegeChat",
    description:
      "A system that allows students to communicate with each other and their professors per course, developed using Node.js, Typescript, Next.js, MongoDB, Postgress, and AWS Services.",
    url: "#",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover",animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

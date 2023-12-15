import React from "react";

/*grid of 4 education cells */
// Decreased to 2 cells
const educationList = [
    {
        title: "Software Development",
        description: "Seneca Polytechnic",
        url: "https://www.senecapolytechnic.ca/programs/fulltime/BSD.html",
    },
    {
        title: "High School Diploma",
        description: "Al Aaraf School",
        url: "#",
    }
    ];


const Education = () => {
  return (
    <section className="light" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {educationList.map((project) => (
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

export default Education;

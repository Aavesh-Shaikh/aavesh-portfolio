import React from "react";
import "./Projects.css";
import logo from "../../assets/LanguageIcons/node_js_icon.svg";
import HrLine from "../../UI/HrLine/HrLine";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import htmlLogo from "../../assets/LanguageIcons/html_logo.svg";
import cssLogo from "../../assets/LanguageIcons/css_icon.svg";
import sassLogo from "../../assets/LanguageIcons/sass_icon.svg";
import figmaLogo from "../../assets/LanguageIcons/figma_logo.svg";

function Projects() {
  const projectsInfo = [
    {
      title: "First Project",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: logo,
      url: "https://www.test.com",
    },
    {
      title: "Second Project",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: htmlLogo,
      url: "https://www.test.com",
    },
    {
      title: "Third Project",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: cssLogo,
      url: "https://www.test.com",
    },
    {
      title: "Fourth Project",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: sassLogo,
      url: "https://www.test.com",
    },
    {
      title: "First Project",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: logo,
      url: "https://www.test.com",
    },
    {
      title: "Second Project",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: htmlLogo,
      url: "https://www.test.com",
    },
    {
      title: "Third Project",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: cssLogo,
      url: "https://www.test.com",
    },
    {
      title: "Fourth Project",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: sassLogo,
      url: "https://www.test.com",
    },
  ];
  return (
    <section className="projects_page_main_div">
      <div className="projects_page_sub_div ">
        {/* <div className="text_logo">Projects</div> */}

        <div className="cards">
          {projectsInfo?.map((project, index) => {
            return (
              <>
                <div className={`card animated-card-${index}`}>
                  <img
                    className="card-img"
                    src={project.img}
                    alt="project_img"
                  />

                  <div className="card-info">
                    <p className="text-title">{project.title}</p>
                    {/* <p className="text-body">{project.description}</p> */}
                  </div>

                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      &nbsp;&nbsp;&nbsp;Visit Project
                    </span>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import React, { useEffect } from "react";
import "./Skills.css";
import {
  TypeScriptIcon,
  bootstrapIcon,
  cssIcon,
  figmaIcon,
  gitIcon,
  htmlIcon,
  jsIcon,
  mongoIcon,
  nodeIcon,
  reactIcon,
  sassIcon,
  sqlIcon,
} from "../../assets/asstes";

const languages1 = [
  { name: "Html", icon: htmlIcon },
  { name: "Css", icon: cssIcon },
  { name: "Javascript", icon: jsIcon },
  { name: "React", icon: reactIcon },
];

const languages2 = [
  { name: "Sass", icon: sassIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Git", icon: gitIcon },
  { name: "Figma", icon: figmaIcon },
];

const languagesToLearn = [
  { name: "NodeJs", icon: nodeIcon },
  { name: "MySQL", icon: sqlIcon },
  { name: "MONGODB", icon: mongoIcon },
  { name: "TYPESCRIPT", icon: TypeScriptIcon },
];
function Skills() {
  useEffect(() => {
    const iconTextWrappers = document.querySelectorAll(".icon_text_wrapper");

    iconTextWrappers.forEach((iconTextWrapper, i) => {
      setTimeout(() => {
        iconTextWrapper.classList.add("fade-in");
      }, i * 100); // You can adjust the delay to control the animation sequence
    });
  }, []);
  return (
    <section className="skills_page_main_div">
      <div className="skills_page_sub_div ">
        {/* <div className="text_logo">Skills</div> */}
        <div className="skills_text_icon_div">
          <div className="sub_heading_text">USING NOW :</div>
          <div className="icons_wrapper">
            {languages1?.map((language, i) => {
              return (
                <>
                  <div className="icon_text_wrapper" key={i}>
                    <img
                      className="language_icon"
                      src={language.icon}
                      alt="Icon"
                    />
                    <p className="language_name_text m_t_0_5">
                      {language.name}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="icons_wrapper">
            {languages2?.map((language, i) => {
              return (
                <>
                  <div className="icon_text_wrapper" key={i}>
                    <img
                      className="language_icon"
                      src={language.icon}
                      alt="Icon"
                    />
                    <p className="language_name_text m_t_0_5">
                      {language.name}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="skills_text_icon_div">
          <div className="sub_heading_text">LEARNING :</div>
          <div className="icons_wrapper">
            {languagesToLearn?.map((language, i) => {
              return (
                <>
                  <div className="icon_text_wrapper" key={i}>
                    <img
                      className="language_icon"
                      src={language.icon}
                      alt="Icon"
                    />
                    <p className="language_name_text m_t_0_5">
                      {language.name}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

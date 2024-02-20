import React, { useEffect } from "react";
import "./About.css";
import { bulletPointIcon } from "../../assets/asstes";

const aboutMeContent = [
  {
    section: "Introduction",
    text: "👋 Hey there! I'm Aavesh Shaikh, a passionate frontend developer with a flair for crafting engaging and dynamic user experiences. With over a year of hands-on experience, I've been immersed in the world of web development, shaping pixels and bringing ideas to life.",
  },
  {
    section: "Experience",
    text: "💻 As an accomplished React frontend developer with a solid one-year track record, I am currently leveraging my expertise to contribute to dynamic projects. Proficient in React, JSX, and Redux, I excel in crafting responsive user interfaces and collaborating seamlessly with cross-functional teams to deliver top-tier software solutions. My role involves ongoing optimization of components for peak performance and staying ahead of industry trends. In my current position, I am dedicated to meeting deadlines, enhancing user experiences, and proactively expanding my skill set. Committed to excellence, I am actively contributing to and thriving in the ever-evolving landscape of React development.",
  },
  {
    section: "Skills",
    text: "💻 My toolbox includes HTML, CSS, and JavaScript, where I seamlessly blend creativity with functionality. I've got a knack for turning design concepts into responsive and intuitive interfaces. Whether it's building a solid foundation with HTML and CSS or adding interactivity with JavaScript, I thrive on creating seamless, user-centric websites.",
  },
  {
    section: "React Expertise",
    text: "🚀 I'm not just fluent in vanilla JavaScript; I've also mastered the art of React to build scalable and efficient single-page applications. Harnessing the power of React, I bring a modular and component-driven approach to my projects, ensuring maintainability and scalability.",
  },
  {
    section: "jQuery Touch",
    text: "⚡ jQuery is another arrow in my quiver, allowing me to streamline complex tasks and add that extra touch of interactivity to websites. It's all about creating a smooth, enjoyable user journey.",
  },
  {
    section: "Learning Spirit",
    text: "🌐 When I'm not immersed in code, you'll find me exploring the latest trends in frontend development, always hungry to learn and implement cutting-edge technologies. I believe in the continuous evolution of skills to stay at the forefront of this ever-changing tech landscape.",
  },
  {
    section: "Closing",
    text: "Let's code the future together! 💻✨",
  },
];

function About() {
  return (
    <section className="about_page_main_div">
      <div className="about_page_sub_div ">
        {/* <div className="text_logo ">About Me</div> */}
        <div className="animation-container">
          {aboutMeContent?.map((content, i) => {
            return (
              <div className="abt_heading_para_text_wrapper slide-in" key={i}>
                <div className="about_heading_text m_t_2">
                  {content.section}
                </div>
                <p className="about_para_text m_t_0_5">{content.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";
import "./Home.css";
import frontendPng from "./—Pngtree—3d illustration of character website_13029763.png";
import resumeFile from "./pexels-guillaume-meurice-1591447.jpg";
import githubLogo from "./icons8-github-24.png";
function Home() {
  console.log(resumeFile);
  const handleDownload = async () => {
    try {
      // Replace the URL with the actual file URL
      const fileURL = resumeFile;
      const response = await fetch(fileURL);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element and trigger a click to download the file
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume"; // Specify the desired file name
      document.body.appendChild(link);
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <section className="home_page_main_div">
      <div className="home_page_sub_div">
        <div className="home_page_sub_div_childs_wrapper">
          <div className="home_page_sub_div_child1">
            <div className="my_name_text">
              Hello I'm <span className="name_span">Aavesh</span>
            </div>
            <div className="description_text">
              A <span className="frontend_span">Frontend Engineer</span>. I Help
              Startups <span className="frontend_span">Launch</span> And{" "}
              <span className="frontend_span">Grow</span> Their Products
            </div>
            <div className="description_text_child">
              Over 1 year year of proffessional experience working with several
              programming tools to deliver quality results to clients. I have
              expert knowledge in Frontend Engineering.
            </div>
            <div>
              <img className="github_logo" src={githubLogo} alt="githubLogo" />
            </div>
          </div>
          <div className="home_page_sub_div_child2">
            <img className="frontend_png" src={frontendPng} alt="frontendPng" />
          </div>
        </div>

        <div className="resume_download_wrapper">
          <h2 className="download_text">Download Resume</h2>
          <button className="button" onClick={handleDownload}>
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Download</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;

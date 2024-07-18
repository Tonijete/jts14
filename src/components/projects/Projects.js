import React from "react";
import {
  workImgOne,
  workImgThree,

} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Portofolio" subTitle="Project" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Website ERP Server" 
            category="Website"
            image={workImgThree} 
            googleDriveLink ="https://drive.google.com/drive/folders/1b1Ci4g9Hm0G86JVrhd77S0av-edC1tuy"
            />
          <ProjectsCard
            title="Website Absensi Geolokasi"
            category="Website"
            image={workImgOne}
            googleDriveLink ="https://drive.google.com/drive/folders/1F8xmNR8XL_aWiG9r2pHQYLkQPs3yEAXf"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

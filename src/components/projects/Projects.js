import React from "react";
import {
 
  workImg,

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
            category="Web server"
            image={workImg} 
            googleDriveLink ="https://drive.google.com/drive/folders/1b1Ci4g9Hm0G86JVrhd77S0av-edC1tuy"
            />
          <ProjectsCard
            title="Website Absensi Geolokasi"
            category="Website"
            image={workImg}
            googleDriveLink ="https://drive.google.com/drive/folders/1F8xmNR8XL_aWiG9r2pHQYLkQPs3yEAXf"
          />
          <ProjectsCard
            title="Website Company"
            category="Website"
            image={workImg}
            googleDriveLink ="https://grahaindonesia.com"
          />
          <ProjectsCard
            title="Web Server File Sharing"
            category="Website"
            image={workImg}
            googleDriveLink ="#"
          />
          </div>
          <div className="px-6">
          <ProjectsCard
            title="Informasi dan Pelayanan Desa"
            category="Website"
            image={workImg}
            googleDriveLink ="#"
          />
          <ProjectsCard
            title="Website Top Up Game"
            category="Website"
            image={workImg}
            googleDriveLink ="#"
          />
          <ProjectsCard
            title="Website Film"
            category="Website"
            image={workImg}
            googleDriveLink ="#"
          />
          <ProjectsCard
            title="E-learning School"
            category="Website"
            image={workImg}
            googleDriveLink ="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

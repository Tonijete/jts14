import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Pengalaman Kerja" icon={<MdWork />} />
        <ResumeCard
          badge="2021 - 2022"
          title="Web Developer"
          subTitle="Kantor Desa"
          des=""
        />
        <ResumeCard
          badge="2022 - 2023"
          title="Fullstack Developer"
          subTitle="Perkasa Group"
          des=""
        />
  
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Pendidikan" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2004 - 2006"
          title="TK Perwanida"
          subTitle="Sragen"
          des=""
        />
        <ResumeCard
          badge="2006 - 2011"
          title="SD N 3 Sambirejo"
          subTitle="Sragen"
          des=""
        />
        <ResumeCard
          badge="2011 - 2014"
          title="SMP N 2 Jenawi"
          subTitle="Karanganyar"
          des=""
        />
        <ResumeCard
          badge="2014 - 2017"
          title="SMK N 1 Sambirejo"
          subTitle="Sragen"
          des=""
        />
        <ResumeCard
          badge="2018 - 2022"
          title="Universitas Islam Syekh Yusuf"
          subTitle="Tangerang"
          des=""
        />
      </div>
    </div>
  );
};

export default Education;

import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoTiktok } from "react-icons/io5";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="3 Penghargaan" />
      <FunFactCard icon={<SiAntdesign />} des="Menyelesaikan Project" />
      <FunFactCard icon={<BiCodeAlt />} des="Setiap Hari Ngoding" />
      <FunFactCard icon={<IoLogoTiktok />} des="34,5Rb Followers" />
    </div>
  );
};

export default FunFact;

import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="Tentang" subTitle="Saya" />
      <AboutMe />
      <Title title="Layanan" subTitle="Saya" />
      <MyServices />
      <Title title="Hal" subTitle="Menyenangkan" />
      <FunFact />
    </section>
  );
};

export default About;

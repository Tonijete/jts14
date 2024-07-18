import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/CV_JajangToniSusilo.pdf";
import { jtsImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded- 2xl"
          src={jtsImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Jajang Toni Susilo</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a href="#">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </span></a>
            <a href="https://web.facebook.com/jajang.thoxx/">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <BsFacebook />
            </span></a>
            <a href="https://www.instagram.com/jajang_tonii/?igsh=NTJ1ZHo4eDliMWtv">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span></a>
            <a href="mailto:jajang.tonisusilo14@gmail.com">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span></a>
            <a href="https://www.tiktok.com/@toniiijete?_t=8k2d1N2p42K&_r=1">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <IoLogoTiktok />
            </span></a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer">
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <a 
            href = "https://wa.me/62859106926981"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer">
            <button className="w-full h-full flex justify-center items-center gap-2">
            Whatsapp <FiSend />
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;

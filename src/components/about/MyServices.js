import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Developer"
        subTitle='"Membuat Pengalaman Digital"
        "Membangun Web Masa Depan Hari Ini"
        "Solusi Inovatif dalam Kode"
        "Memberdayakan Bisnis Melalui Teknologi"
        "Merancang dan Mengembangkan Situs Web yang Berpusat pada Pengguna"
        "Mengubah Ide menjadi Realitas Digital"
        "Didorong oleh Kreativitas, Didorong oleh Kode"
        "Mengangkat Merek Secara Online"
        "Mengkode Masa Depan Web"
        "Menciptakan Pengalaman Web yang Menarik"'
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle='"Membuat Pengalaman Online yang Menakjubkan Secara Visual"
        "Dimana Kreativitas Bertemu Fungsionalitas"
        "Merancang Kecantikan Digital, Satu Piksel Sekaligus"
        "Solusi Desain Inovatif untuk Web Modern"
        "Meningkatkan Pengalaman Pengguna Melalui Keunggulan Desain"
        "Mewujudkan Visi Anda dengan Desain Elegan"
        "Merancang Antarmuka yang Menginspirasi dan Melibatkan"
        "Membuat Cerita Visual Melalui Desain Web"
        "Merancang Situs Web yang Meninggalkan Kesan Abadi"
        "Merancang Web Masa Depan, Hari Ini"'
      />
      
    </div>
  );
};

export default MyServices;

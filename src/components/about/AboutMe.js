import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">JAJANG TONI SUSILO</h2>
          <p className="text-base leading-6 ">
          Saya Lulusan Universitas Islam Syekh Yusuf, Jurusan Teknik Informatika. 
          Aktif Dalam Berorganisasi Badan Eksekutif Mahasiswa Fakultas Teknik, Ingin Menjadi 
          Seorang Individu Yang Dapat Mengabdi Kepada Masyarakat Dan Selalu Menanamkan 
          Ketekunan, kegigihan, Kejujuran, Serta Kedisiplinan.
          Walk To The Talk.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Alamat:</span>
            Tangerang, Banten.
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Kewarganegaraan:</span>
            Indonesia
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Umur:</span>
            24
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Hobbi:</span>
            Membaca, Futsal, Traveling.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

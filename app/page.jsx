

import Link from "next/link";
import Box from "./components/box";
import GridPhoto from "./components/gridPhoto";
import BoxHeadline from "./components/boxHeadline";
import BoxEndorse from "./components/boxIklan";


import NamaSapaan from "./components/namasapaan"

export default function Home() {
	

	
  return (
    <>
	
	
       <NamaSapaan /> 

      <p className="mt-3 font-light text-justify">
        Ingin menjelajahi keajaiban dunia seni dan kreativitas? Ikuti perjalanan
        kami di{" "}
        <Link
          href="https://instagram.com/creatif_ar"
          className="border border-neutral-600  bg-neutral-50  rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 no-underline"
        >
          @creatif_ar
        </Link>{" "}
        di Instagram! Dari seni visual hingga desain kreatif, kami membawa Anda
        ke dalam petualangan tak terlupakan di dunia kreativitas! Jangan
        lewatkan momen inspiratif kami! Dan, tahukah Anda, kami berterima kasih
        kepada Vercel atas dukungan luar biasa mereka dalam memastikan situs
        kami tetap online dan berjalan lancar! Kunjungi akun mereka dan temukan
        lebih banyak tentang platform hebat ini! ✨🎨 <br /> <br />{" "}
        <Link
          href="https://instagram.com/creatif_ar"
          className="border border-neutral-600  bg-neutral-50  rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 no-underline"
        >
          #Seni
        </Link>{" "}
        <Link
          href="https://instagram.com/creatif_ar"
          className="border border-neutral-600  bg-neutral-50  rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 no-underline"
        >
          #Kreativitas
        </Link>{" "}
        <Link
          href="https://instagram.com/creatif_ar"
          className="border border-neutral-600  bg-neutral-50 text-neutral-900  rounded p-1 text-sm inline-flex items-center leading-4  no-underline"
        >
          #Inspirasi
        </Link>{" "}
        <Link
          href="https://instagram.com/creatif_ar"
          className="border border-neutral-600  bg-neutral-50  rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 no-underline"
        >
          #Vercel
        </Link>
      </p>

      <GridPhoto />

      <p className="mt-10 text-justify font-light">
        Kehidupan adalah sebuah perjalanan yang penuh dengan liku-liku dan
        warna-warni yang tak terduga. Di dalamnya, kita akan menemui berbagai
        macam pengalaman, tantangan, dan kebahagiaan yang membentuk diri kita
        menjadi apa yang kita sekarang ini. Seperti sebuah roller coaster,
        kadang kita akan naik tinggi di puncak kebahagiaan, namun kadang juga
        turun dalam kegelapan keputusasaan.
      </p>

      <Box />

      <p className="mt-3 text-justify font-light">
        Namun, meski penuh dengan ketidakpastian, kehidupan memberikan
        kesempatan bagi kita untuk tumbuh, belajar, dan menghargai setiap momen
        yang diberikan kepada kita. Maka, mari kita hadapi setiap hari dengan
        penuh semangat, menjalani kehidupan ini dengan penuh rasa syukur dan
        keberanian untuk menghadapi segala rintangan yang mungkin kita temui.
      </p>

      <BoxHeadline />

      <BoxEndorse />

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600">
        <li>
          <Link
            className="flex items-center hover:text-neutral-800  transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="h-7 ml-2">follow me</p>
          </Link>
        </li>

        <li>
          <Link
            className="flex items-center hover:text-neutral-800 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="h-7 ml-2">get email updates</p>
          </Link>
        </li>
      </ul>
    </>
  );
}

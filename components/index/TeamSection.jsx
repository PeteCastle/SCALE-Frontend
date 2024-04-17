import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiTiktokLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
const SecondSection = () => {
  return (
    <>
      <section className="w-full h-auto lg:h-screen max-h-screen  dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>

          <div className="grid justify-center gap-8 mb-6 lg:mb-16 lg:grid-cols-5 md:grid-cols-2 mx-auto  p-5 w-auto ">
            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark transform transition-transform hover:scale-105">
              <a href="#!">
                <img
                  className="rounded-t-lg lg:h-[280px] md:h-[380px] flex justify-center items-center mx-auto w-full h-auto object-cover"
                  src="/dev/francis.jpg"
                  alt=""
                />
              </a>
              <div className="p-6 text-surface dark:text-white">
                <div className="">
                  <h3 className="text-xl font-semibold  text-gray-900 dark:text-white">
                    <a href="#">Francis Mark Cayco</a>
                  </h3>
                  <div className=" gap-2 space-y-2 space-x-1 ">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px]  bg-gray-800 text-white  ">
                      Project Manager
                    </span>
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px]  bg-gray-800 text-white  ">
                      Backend Dev
                    </span>
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px]  bg-gray-800 text-white  ">
                      Cloud Dev
                    </span>
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px]  bg-gray-800 text-white  ">
                      AI Dev
                    </span>
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px]  bg-gray-800 text-white  ">
                      Arduino Dev
                    </span>
                  </div>
                  <p className="mt-3 mb-4 text-xs font-primary  text-gray-500  ">
                   I aim to engineer data by actively leveraging it to drive impactful solutions through data-driven insights.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="https://petecastle.github.io
                        "
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaGlobe />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.linkedin.com/in/francis-mark-cayco-33511a190/
                        "
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaLinkedin/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#https://github.com/PeteCastle
                        "
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                       <FaGithub/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@prof_petecastle"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                       <PiTiktokLogoFill/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark transform transition-transform hover:scale-105">
              <a href="#!">
                <img
                  className="rounded-t-lg lg:h-[280px] md:h-[380px] flex justify-center items-center mx-auto w-full h-auto object-cover"
                  src="/dev/josh.jpg"
                  alt=""
                />
              </a>
              <div className="p-6 text-surface dark:text-white">
                <div className="">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Joshua Marc Marquez</a>
                  </h3>

                  <div className=" gap-2 space-y-2 space-x-1 ">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px]  bg-gray-800 text-white  ">
                      Frontend Developer
                    </span>
                  </div>
                  <p className="mt-3 mb-4 text-xs font-primary  text-gray-500  ">
                    Enthusiastic, creative, and driven, I am a relentless seeker
                    of knowledge and innovation. Committed to making a
                    meaningful impact in my life and embracing every opportunity
                    to grow.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="https://www.facebook.com/boiii.pogi
                        "
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaFacebook/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/marcalou"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaGithub/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/jmdmarquez/"
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaLinkedin/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark transform transition-transform hover:scale-105">
              <a href="#!">
                <img
                  className="rounded-t-lg lg:h-[280px] md:h-[380px] flex justify-center items-center mx-auto w-full h-auto object-cover"
                  src="/dev/merculio.jpg"
                  alt=""
                />
              </a>
              <div className="p-6 text-surface dark:text-white">
                <div className="">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Miraiza Elisa Merculio</a>
                  </h3>

                  <div className=" gap-2 space-y-2 space-x-1 ">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px]  bg-gray-800 text-white  ">
                      UI/UX Designer
                    </span>
                  </div>
                  <p className="mt-3 mb-4 text-xs font-primary text-gray-500">
                    I am a self-reliant and determined individual who embraces
                    challenges, values meaningful relationships, and is
                    committed to continuous personal development.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                  <li>
                      <a
                       target="_blank"
                        href="https://www.facebook.com/Melisamerculio
                        "
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaFacebook/>
                      </a>
                    </li>
                    <li>
                      <a
                       target="_blank"
                        href="https://github.com/IcedTeaLemon"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaGithub/>
                      </a>
                    </li>
                    <li>
                      <a
                       target="_blank"
                        href="https://www.linkedin.com/in/miraizaelisamerculio?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
                        "
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaLinkedin/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark transform transition-transform hover:scale-105">
              <a href="#!">
                <img
                  className="rounded-t-lg lg:h-[280px] md:h-[380px] flex justify-center items-center mx-auto w-full h-auto object-cover"
                  src="/dev/paclian.jpg"
                  alt=""
                />
              </a>
              <div className="p-6 text-surface dark:text-white">
                <div className="">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Micha Lene Paclian</a>
                  </h3>

                  <div className=" gap-2 space-y-2 space-x-1 ">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px]  bg-gray-800 text-white  ">
                      Hardware & Prototype
                    </span>
                  </div>
                  <p className="mt-3 mb-4 text-xs font-primary text-pretty text-gray-500">
                    I am always eager to learn and share knowledge. I enjoy
                    stimulating conversations and inspiring curiosity in others.
                    I am a lifelong learner and an enthusiast who is always
                    ready to share my learning journey.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0 justify-start">
                  <li>
                      <a
                        href="https://www.facebook.com/Akosimaykalin
                        "
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaFacebook/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Silverwingzzz"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaGithub/>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/micha-lene-paclian-643801252/"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaLinkedin/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark transform transition-transform hover:scale-105">
              <a href="#!">
                <img
                  className="rounded-t-lg lg:h-[280px] md:h-[380px] flex justify-center items-center mx-auto w-full h-auto object-cover"
                  src="/dev/helen.jpg"
                  alt=""
                />
              </a>
              <div className="p-6 text-surface dark:text-white">
                <div className="">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Helen Claire Villar</a>
                  </h3>

                  <div className=" gap-2 space-y-2 space-x-1 ">
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px]  bg-gray-800 text-white  ">
                      Accountant
                    </span>
                  </div>
                  <p className="mt-3 mb-4 text-xs font-primary text-gray-500 text-pretty dark:text-gray-400">
                    A happy-go-lucky individual, finding joy in life's simple
                    pleasures and approaching challenges with a positive
                    attitude, optimistic outlook shines through in my
                    interactions and endeavors, spreading cheer to those around
                    me.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                  <li>
                      <a
                        href="https://www.facebook.com/itshelenclaire?mibextid=LQQJ4d
                        "
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaFacebook/>
                      </a>
                    </li>
                   
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;

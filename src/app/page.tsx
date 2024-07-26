"use client";
import { Github, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import useHomeVariants from "./hooks/useHomeVariants";

export default function Home() {
  const skills = [
    {
      label: "Show Development",
      icon: "/Vector(1).png",
      content:
        "Our consultants work closely with clients to conceptualize and develop captivating show ideas. We provide guidance on crafting compelling narratives, unique characters, and engaging story arcs that resonate with target audiences.",
    },
    {
      label: "Production Strategy",
      icon: "/Vector(2).png",
      content:
        "We offer strategic planning and production roadmaps to ensure efficient and cost-effective productions. Our team assists in budgeting, scheduling, location scouting, and resource allocation, optimizing the production process from start to finish.",
    },
    {
      label: "Crew onboarding",
      icon: "/Vector(3).png",
      content:
        "We aid in building the perfect crew, connecting clients with experienced writers, directors, cinematographers, and other key personnel to bring their vision to life. Our extensive industry network ensures access to top-tier talent.",
    },
    {
      label: "Market Research and Analysis",
      icon: "/Vector(3).png",
      content:
        "Understanding the competitive landscape is crucial for success. We conduct thorough market research and trend analysis to help clients identify opportunities, target demographics, and positioning strategies for their series.",
    },
    {
      label: "Financing and Budgeting",
      icon: "/Vector(3).png",
      content:
        "Navigating the financial aspect of series production can be challenging. We assist in securing funding through various channels, including traditional financing, co- productions, grants, and partnerships, ensuring stable financial backing for projects.",
    },
    {
      label: "Project Management",
      icon: "/Vector(3).png",
      content:
        "With our expertise in series producing, we provide hands-on project management to oversee all stages of production. From pre-production logistics to post-production workflows, we ensure seamless execution and timely delivery.",
    },
  ];

  const tech = [
    "Typescript",
    "Javascript",
    "Dart",
    "Python",
    "HTML",
    "Sass",
    "TailwindCss",
    "NextJs",
    "ReactJs",
  ];

  const contacts = [
    { label: "Email Address", icon: <Mail />, value: "ntevin25@gmail.com" },
    { label: "Github", icon: <Github />, value: "@njabulotevin" },
    { label: "Phone Number", icon: <Phone />, value: "(+72) 64 891 7936" },
  ];

  const {
    imageVariants,
    titleVariants,
    aboutUsVariants,
    aboutUsHeaderVariants,
  } = useHomeVariants();

  return (
    <div className="overflow-x-hidden w-full ">
      <motion.main
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ amount: 0.8 }}
        className="lg:p-20 pt-32 lg:pt-[50px] w-full bg-[url('/camera_bg.png')] "
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <section className=" flex  flex-wrap flex-col w-full  px-10 lg:pt-20 py-6">
          <div className="flex   flex-wrap  gap-20 lg:gap-24 min-h-[60vh] justify-center items-center text-gray-100 ">
            <motion.div
              variants={titleVariants}
              className="flex flex-col gap-4"
            >
              <h1 className="text-6xl text-center lg:text-8xl hidden lg:flex flex-col  font-semibold">
                <span>Illuminating the Future</span>{" "}
                <span>
                  of <span className="gradientText">Storytelling</span>
                </span>
              </h1>
              <h1 className="text-5xl text-center lg:text-start lg:text-8xl flex lg:hidden flex-col  font-bold mb-5">
                <span className="">Films.</span>{" "}
                <span className="gradientText">Innovative.</span>{" "}
                <span>Expert.</span>
              </h1>
              <div className="w-full text-center mt-6 flex flex-col gap-4 max-w-[40vw] mx-auto">
                <p>
                  {/* <span className="lg:hidden flex text-center justify-center font-medium">
                    Illuminating the Future of Storytelling.
                  </span> */}
                  we specialize in series producing and consulting. Our expert
                  team delivers tailored solutions to navigate the complexities
                  of the film and television industry, creating captivating,
                  high-quality content for audiences worldwide.
                </p>
              </div>
              <div className="flex justify-center">
                <button className="bg-red-700 p-2 px-10 text-xl rounded mx-auto font-medium">
                  Contact Us
                </button>
              </div>
            </motion.div>
            {/* <div className="w-[250px] h-[250px] flex items-center justify-center  lg:w-[600px] lg:h-[600px] ">
              <motion.img variants={imageVariants} src="/me_3.png" alt="" />
            </div> */}
          </div>
        </section>
      </motion.main>
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        className="flex gap-6 w-full flex-wrap justify-center lg:gap-3 bg-white min-h-[60vh] px-10 lg:px-20 py-36"
      >
        <motion.div
          variants={aboutUsVariants}
          className="flex flex-col gap-4 lg:max-w-[48vw] my-10 lg:m-0"
        >
          {/* <h2 className="text-4xl font-semibold gradientText">About Us</h2> */}
          <motion.div
            variants={aboutUsHeaderVariants}
            className="flex flex-col gap-3 "
          >
            <h2 className="text-6xl lg:text-5xl font-semibold gradientText">
              About Us
            </h2>

            <h3 className="text-lg lg:text-lg font-semibold text-primary-900 max-w-[220px]">
              Our Story
            </h3>
          </motion.div>
          <p className=" text-primary-900">
            LightHouze Multimedia founded by Khanyi Nxumalo is a company
            specializing in the film and television industry, with a strong
            focus on series producing and consulting. With a team of seasoned
            industry experts and a proven track record of successful projects,
            we offer tailored solutions to help clients navigate the complex
            landscape of series production and create compelling, high-quality
            content that captivates audiences worldwide.
          </p>
        </motion.div>
      </motion.section>
      <section
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 40%",
        }}
        className="px-20 flex flex-col items-center gap-10 py-36 min-h-[60vh]"
      >
        <h2 className="text-2xl lg:text-4xl font-semibold text-white text-center">
          SERVICES
        </h2>
        <div className="flex justify-center gap-10 flex-wrap px-10 lg:p-0">
          {skills.map((skill, i) => {
            return (
              <div
                key={i}
                className="bg-red-800 w-full lg:w-[350px]   px-[50px] py-[20px] flex flex-col gap-5 rounded-tl-[20px] rounded-br-[20px]"
              >
                {/* <img
                  src={skill.icon}
                  className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] object-contain"
                /> */}
                <h4 className="text-white font-semibold text-2xl lg:text-3xl">
                  {skill.label}
                </h4>
                <p className=" text-white">{skill.content}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* <section className="lg:px-20 p-10 lg:py-36 flex flex-wrap justify-center gap-4 min-h-[60vh]">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold gradientText">
            My Recent Work
          </h2>
          <h3 className="text-3xl font-semibold text-white">Uzoori App</h3>
          <p className=" text-primary-300 w-full lg:max-w-[30vw]">
            Uzoori is a social commerce app that allows users to discover new
            styles and trends in the beauty and food industries, book
            appointments with stylists and make orders for food from local
            restaurants. Users can also engage with other users and merchants,
            follow their favorite stylists and restaurants, and even earn money
            through an affiliate program. visit beta:
            <Link
              className="text-secondary-900 underline"
              href="https://uzoori.app"
            >
              uzoori.app
            </Link>{" "}
            powered by Nextjs.
          </p>
          <div className="my-5">
            <Link
              className="primary-gradient text-primary-900 font-medium p-3 rounded-md"
              href="/projects"
            >
              View All projects
            </Link>
          </div>
        </div>
        <div className="w-[300px] h-[180px]">
          <img src="/uzoori.png" />
        </div>
      </section> */}
      {/* <section className="px-20 py-36 ">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-36">
          {contacts.map((contact, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-3 items-center text-white"
              >
                <div className="bg-primary-500 text-secondary-900 w-[70px] h-[70px] rounded-full flex justify-center items-center mb-8">
                  {contact.icon}
                </div>
                <h4 className="font-semibold text-base">{contact.label}</h4>
                <p className="text-sm">{contact.value}</p>
              </div>
            );
          })}
        </div>
      </section> */}
      <footer>
        <p className="text-primary-300 text-sm text-center py-10">
          All copyright reserved © Lighthouze 2024
        </p>
      </footer>
    </div>
  );
}

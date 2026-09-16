import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Project from "./project";
import { MoveUpRight } from "lucide-react";

export default function Work() {
  const route= useNavigate()
  function handlePress() {
    route("/contact")
  }
  return (
    <div className=" min-h-screen bg-black text-white">
      <div className="md:mx-35 mx-10 flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#faae1b] ">Work</h1>
          <h2 className="text-5xl font-bold">Selected Projects</h2>
          <p className="text-gray-400 tracking-wide">
            A few projects that show how I approach speed, usability, and visual
            craft.
          </p>
        </div>
        {/* <div>

       </div>
       <div></div> */}
        <Project
          sn="01"
          image="./src/assets/D-agro link.jpeg"
          name="D-AGRO LINK"
          description="A platform connecting farmers with different agricultural input
            suppliers while helping improve access to trusted farm inputs."
          techStack1="React"
          techStack2="JavaScript"
          techStack3="Tailwind CSS"
          techStack4="API"
          highlight1="Built as a team capstone project"
          highlight2="Designed around real challenges faced by farmers"
          highlight3="Includes farmer/input-supplier connection and verification"
        />
        <Project
          sn="02"
          image="./src/assets/Talentbridge.png"
          name="TalentBridge NG"
          description="A skills-to-opportunity platform that helps users move from learning to practical experience, portfolio building and verified opportunities"
          techStack1="React"
          techStack2="JavaScript"
          techStack3="Tailwind CSS"
          highlight1="skill discovery and personalised learning paths"
          highlight2="practical challenges and portfolio building"
          highlight3="opportunity matching"
          reverse
        />
        <Project sn="03" image="./src/assets/TastyBites.png" name="Tasty Bites" description="A responsive web application designed to a simple and engaging food browsing experience" techStack1="JavaScript" techStack2="Tailwind CSS" techStack3="React Native" techStack4="React" highlight1="Responsive restuarant interface" highlight2="Dynamic food/product rendering" highlight3="React routing and reuseable components" />

        <div className="flex  flex-col gap-7 items-center md:flex-row md:justify-between p-7 bg-[#111113] border-gray-700 rounded-2xl md:rounded-xl">
          <div>
            <p className="font-bold text-white text-xl">Want to see more or discuss a project?</p>
            <p className="text-gray-400 text-sm">I'm always open to talking about new work and collaborations.</p>
          </div>
          <div>
            <button onClick={handlePress} className="flex gap-2 items-center border cursor-pointer border-gray-700 px-5 py-2 rounded-xl bg-yellow-500 text-black font-semibold transition ">
              Get in Touch <MoveUpRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

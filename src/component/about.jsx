import { Compass, Heart, SeparatorVertical } from "lucide-react";
import Footer from "./footer";
import profileImage from "../assets/techme1.png";

export default function About() {
  return (
    <div className=" min-h-screen bg-black text-white">
      <div className="mx-10 md:mx-35">
        <h1 className="text-[#faae1b] ">About</h1>
        <p className="text-5xl font-bold">The Story Behind The Work</p>
        <div className=" mt-[7%] grid grid-cols-1 md:grid-cols-3 gap-7.5 min-h-[60vh]">
          <div className="col-span-1 ">
            <img
              src={profileImage}
              alt="my work"
              className="rounded-3xl object-cover h-[60%] w-full"
            />
            <div className="flex flex-col gap-5 mt-5 ">
              <div className="flex justify-between text-[0.9rem]">
                <p className="text-gray-400">Name</p>
                <p>Divine Okoroji</p>
              </div>
              <div className=" text-[0.9rem] flex justify-between">
                <p className="text-gray-400 text-[0.9rem]">Role</p>
                <p>Frontend Developer</p>
              </div>
              <div className=" text-[0.9rem] flex justify-between">
                <p className="text-gray-400 text-[0.9rem]">Based</p>
                <p>Available nationwide . Remote</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 px-2 md:px-10 py-5 text-lg flex flex-col text-justify gap-5 text-gray-300 ">
            <h2 className="tracking-normal">
              My journey into development started with a simple curiosity: how
              do the websites I use every day actually work? That question led
              me from tinkering with HTML on weekends to building production interfaces used by thousands of people.
            </h2>
            <h2>
              
              Today, I specialize in frontend engineering with React and
              TypeScript. I care deeply about the details that most people never
              notice consciously: the timing of a hover state, the readability
              of a loading state, the way a page feels when it loads in 200ms
              instead of 2 seconds.
            </h2>
            <h2>
              {" "}
              My focus is building interfaces that are not just functional, but
              genuinely pleasant to use. I believe great frontend work is
              invisible. When everything works smoothly, feels intuitive, and
              loads instantly, the technology fades and the product shines.
            </h2>
            <div className="grid-cols-1 md:grid-cols-3 grid gap-4 mt-4">
              <div className="flex flex-col gap-1 border border-gray-700 bg-[#111113] p-5 rounded-xl">
                <Compass color="gold" />
                <p className="font-semibold">User-First Thinking</p>
                <p className="text-gray-400 text-[0.9rem]">
                  Every decision starts with how a real person will experience
                  the interface.
                </p>
              </div>
              <div className="flex flex-col gap-1 border border-gray-700 bg-[#111113] p-5 rounded-xl">
                <SeparatorVertical color="gold" />
                <p className="font-semibold">Craft Over Speed</p>
                <p className="text-gray-400 text-[0.9rem]">
                  Clean, maintainable code that holds up long after the launch.
                </p>
              </div>
              <div className="flex flex-col gap-1 border border-gray-700 bg-[#111113] p-5 rounded-xl">
                <Heart color="gold" />
                <p className="font-semibold">Genuine Collaboration</p>
                <p className="text-gray-400 text-[0.9rem]">
                  The best work comes from open communication and shared
                  ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tools */}
      <div className="mx-10 md:mx-35 mt-20 flex flex-col">
        <p className="font-bold text-3xl">Tools I work with</p>
        <p className="text-gray-400 text-[0.9rem]">
          A snapshot of the technologies I reach for most often.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5 ">
          <div className="border border-gray-700 bg-[#111113] p-5 rounded-xl gap-3 flex flex-col">
            <p className="text-[#faae1b]">Core</p>
            <ul className="list-disc pl-5 text-white marker:text-gray-700">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript(ES6+)</li>
            </ul>
          </div>
          <div className="border border-gray-700 bg-[#111113] p-5 rounded-xl gap-3 flex flex-col">
            <p className="text-[#faae1b]">Frameworks</p>
            <ul className="list-disc pl-5 text-white marker:text-gray-700">
              <li>React</li>
              <li>Next.Js</li>
              <li>Vite</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="border border-gray-700 bg-[#111113] p-5 rounded-xl gap-3 flex flex-col">
            <p className="text-[#faae1b]">Styling</p>
            <ul className="list-disc pl-5 text-white marker:text-gray-700">
              <li>Tailwind CSS</li>
              <li>Styled Components</li>
            </ul>
          </div>
          <div className="border border-gray-700 bg-[#111113] p-5 rounded-xl gap-3 flex flex-col">
            <p className="text-[#faae1b]">Backend & Tooling</p>
            <ul className="list-disc pl-5 text-white marker:text-gray-700">
              <li>Node.Js</li>
              <li>Git</li>
              <li>Supabase</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="mt-20 text-[#111113]" />
      {/* footer */}
      <Footer />
    </div>
  );
}

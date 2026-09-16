import { ArrowRight } from "lucide-react";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
   const routes= useNavigate()
  function contactBtn() {
    routes("/contact")
  }
  function workBtn() {
    routes("/work")
  }
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
        {/* Available badge */}
        <div className="flex items-center gap-2 rounded-full border border-yellow-500/40 bg-[#221b0e] px-10 py-2 text-sm font-medium text-yellow-400">
          <span className="pulse h-2 w-2 rounded-full bg-yellow-400"></span>

          <p>Available for new projects</p>
        </div>

        {/* Hero text */}
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            I build Interfaces
            <br />
            <span className="text-yellow-500">People Love To Use</span>
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-gray-400 md:text-2xl">
            I'm Divine Okoroji, a frontend developer focused on turning complex
            problems into clean, fast, and delightful web experiences.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex items-center gap-5">
          <button onClick={workBtn} className="group flex cursor-pointer items-center gap-2 rounded-xl bg-yellow-500 p-3 font-bold text-black transition hover:bg-yellow-300">
            View my work{" "}
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button onClick={contactBtn} className="cursor-pointer rounded-xl border border-gray-700 px-7 py-3 font-bold text-white transition hover:border-gray-400 hover:bg-gray-950">
            Get in touch
          </button>
        </div>
      </section>
      {/* Details */}
      <div className=" mx-10 md:mx-25 mt-[7%] grid grid-cols-1 md:grid-cols-3 gap-7.5">
        <div className="details flex flex-col gap-0.5 border rounded-2xl border-gray-700 bg-[#111113] p-6.25 hover:border-yellow-500">
          <h3>Fast by Default</h3>

          <p className="text-[0.9rem] text-gray-500">
            Performance is a feature, not an afterthought.
          </p>
        </div>

        <div className="details flex flex-col gap-0.5 border rounded-2xl border-gray-700 bg-[#111113] p-6.25 hover:border-yellow-500">
          <h3>Pixel-crafted</h3>

          <p className="text-[0.9rem] text-gray-500">
            Thoughtful motion and detail in every interaction.
          </p>
        </div>

        <div className="details flex flex-col gap-0.5 rounded-2xl bg-[#111113] p-6.25 border hover:border-yellow-500 border-gray-700">
          <h3>Accessible</h3>

          <p className="text-[0.9rem] text-gray-500">
            WCAG-compliant experiences for every user.
          </p>
        </div>
      </div>

      {/* contact */}
      <div className="mt-20 flex flex-col items-center justify-center gap-6 px-6 text-center border border-gray-700 bg-[#111113] md:mx-25 py-20 rounded-3xl mx-10">
        <h2 className="text-3xl font-bold">Have a project in mind?</h2>
        <p>
          Let's collaborate to build something fast, accessible, and memorable.
        </p>
        <button className="cursor-pointer flex items-center gap-2 rounded-xl bg-yellow-500 px-7 py-3 font-bold text-black transition hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]">
          {" "}
          Start a conversation <ArrowRight size={20} />
        </button>
      </div>
      {/*  */}
      <hr className="mt-20 text-[#111113]" />
      {/*  footer*/}
     <Footer/>
    </div>
  );
}

import { Copy, Mail, MoveUpRight } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./footer";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "okorojidivine30@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col bg-black text-white">
      <div className="bg-black min-h-screen flex flex-col gap-10 items-center">
        <div className="w-5/6 md:w-2/3 mx-auto">
          <div>
            <p className="font-semibold text-yellow-500">Contact</p>
            <p className="text-3xl md:text-5xl font-bold">Let's build something</p>
            <p className="mt-5 text-xl text-gray-400">
              Have a project, a role, or just want to say hello? I usually reply
              within a day or two.
            </p>
          </div>
          {/* Contact */}
          <div className="flex md:flex-row flex-col gap-5 md:gap-1 md:justify-between items-center mt-20 bg-[#111113] p-8 rounded-xl border border-gray-700">
            <div className="flex gap-5 items-center">
              <Mail color="gold" />
              <div>
                <p className="text-gray-400">EMAIL</p>
                <a
                  href="mailto:okorojidivine30@gmail.com"
                  className="hover:text-yellow-500"
                >
                  {email}
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <button
                className="flex gap-2 items-center text-sm border cursor-pointer border-gray-700 px-5 py-2 rounded-xl hover:bg-gray-950 transition "
                onClick={copyEmail}
              >
                {copied ? (
                  "Copied!"
                ) : (
                  <>
                    <Copy size={18} /> Copy
                  </>
                )}
              </button>
              <button className="flex gap-2 items-center cursor-pointer">
                <a
                  href="mailto:okorojidivine30@gmail.com" target="_blank"
                  className="flex gap-2 items-center px-5 py-2  bg-yellow-500 text-black rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transition"
                >
                  {" "}
                  Send email <MoveUpRight />
                </a>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="mt-10 ">
            <p className="text-gray-400">FIND ME ONLINE</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <Link
                to="https://www.linkedin.com/in/okoroji-divine-0b1a4b1b6/"
                target="_blank"
              >
                <div className="bg-[#111113] py-4 px-8 rounded-xl border border-gray-700 items-center flex justify-between cursor-pointer hover:bg-gray-950 transition">
                  <div className="flex gap-3 items-center">
                    <div>
                      {" "}
                      <FaLinkedin size={24} color="#fff" />
                    </div>
                    <div>
                      <p>LinkedIn</p>
                      <p>Let's Connect</p>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <MoveUpRight />{" "}
                  </div>
                </div>
              </Link>
              {/*  */}
              <Link to="https://www.facebook.com/ijeoma.okoroj" target="_blank">
                <div className="bg-[#111113] py-4 px-8 rounded-xl border border-gray-700 items-center flex justify-between cursor-pointer hover:bg-gray-950 transition">
                  <div className="flex gap-3 items-center">
                    <div>
                      <FaFacebook size={24} color="#fff" />
                    </div>
                    <div>
                      <p>Facebook</p>
                      <p>Let's Connect</p>
                    </div>
                  </div>
                  <div>
                    <MoveUpRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className=" my-13 flex items-center gap-2 rounded-xl border border-[#0b3328] bg-[#0a1211] py-5 px-10 text-sm font-medium text-green-600">
            <span className="pulse h-2 w-2 rounded-full bg-green-600"></span>
            <p>
              Currently available for freelance work and full-time
              opportunities.
            </p>
          </div>
          <hr className="mt-10 text-gray-700" />
        </div>
      </div>
      {/*  */}
      <Footer />
    </div>
  );
}

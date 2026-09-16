// import { Link } from "lucide-react";
import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col gap-6 mx-15 mt-15 ">
      <div className="flex flex-col it justify-between gap-10 items-center md:flex-row">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl text-white font-bold">Divine Okoroji</h2>
          <p className="text-sm text-gray-300 ">Frontend Developer</p>
          <p className="text-sm text-gray-500">
            I build fast, accessible, and beautiful interfaces for the web.
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center md:items-start">
          <div className="flex gap-7 items-center">
            <Link
              to="https://www.linkedin.com/in/okoroji-divine-0b1a4b1b6/"
              target="_blank"
            >
              <div className="flex gap-2 items-center cursor-pointer p-2 border border-gray-700 rounded-lg hover:text-yellow-500 hover:border-yellow-500 transition">
                <FaLinkedin />
              </div>
            </Link>
            <Link to="https://www.facebook.com/ijeoma.okoroj" target="_blank">
              <div className="flex gap-2 items-center cursor-pointer p-2 border border-gray-700 rounded-lg hover:text-yellow-500 hover:border-yellow-500 transition">
                <FaFacebook  />
              </div>
            </Link>
            <Link to="mailto:okorojidivine30@gmail.com" target="_blank">
              <div className="flex gap-2 items-center cursor-pointer p-2 border border-gray-700 rounded-lg hover:text-yellow-500 hover:border-yellow-500 transition">
                <FaEnvelope />
              </div>
            </Link>
          </div>
          <a href="mailto:okorojidivine30@gmail.com" className="text-gray-400 hover:text-white">
            okorojidivine30@gmail.com
          </a>
        </div>
      </div>
      <hr className="border-gray-700 mt-5" />
      <div className="text-center mb-7">
        &copy; 2026 Divine Okoroji. All rights reserved.
      </div>
    </div>
  );
}

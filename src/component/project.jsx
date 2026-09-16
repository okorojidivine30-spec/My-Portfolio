import { Check } from "lucide-react";

export default function Project({
  sn,
  image,
  name,
  description,
  techStack1,
  techStack2,
  techStack3,
  techStack4,
  highlight1,
  highlight2,
  highlight3,
  reverse,
}) {
  return (
    <div
      className={`flex ${reverse ? "md:flex-row-reverse" : "md:flex-row"}  flex-col my-20 gap-10 `}
    >
      <div className="md:w-1/2 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>
      <div className=" w-full md:w-1/2 flex flex-col gap-7 text-gray-400">
        <div className="flex flex-col gap-1">
          <p className="text-gray-400"> {sn}</p>
          <p className="text-2xl text-white font-bold">{name} </p>
          <p>{description}</p>
        </div>
        <div className="flex gap-3 text-white">
          <span className="px-4 py-1 bg-[#131315] rounded-lg text-[0.625rem]">
            {techStack1}{" "}
          </span>
          <span className="px-4 py-1 bg-[#131315] rounded-lg text-[0.625rem] ">
            {techStack2}{" "}
          </span>
          <span className="px-4 py-1 bg-[#131315] rounded-lg text-[0.625rem]">
            {techStack3}
          </span>
          <span className="px-4 py-1 bg-[#131315] rounded-lg text-[0.625rem]">
            {techStack4}{" "}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <Check color="green" /> <p>{highlight1} </p>
          </div>
          <div className="flex items-center gap-1.5">
            <Check color="green" /> <p>{highlight2} </p>
          </div>
          <div className="flex items-center gap-1.5">
            <Check color="green" /> <p>{highlight3}</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

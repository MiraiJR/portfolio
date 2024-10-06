import { personalProjects } from "../data";
import { PersonalProjectModel } from "../data/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";

export const PersonalProject = () => {
  return (
    <div id="personalproject" className="bg-black ">
      <h1 className="text-4xl text-yellow-500 font-bold text-center mb-8">
        My Personal Projects
      </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {personalProjects.map((project) => (
          <SwiperSlide key={project.name}>
            <SinglePersonalProject data={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface SinglePersonalProjectProps {
  data: PersonalProjectModel;
}

const SinglePersonalProject = ({ data }: SinglePersonalProjectProps) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-yellow-400">{data.name}</h2>
        <a
          href={data.production}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          <FaExternalLinkAlt className="text-xl" />
        </a>
      </div>
      <h3 className="text-gray-300 mb-2">
        {data.start} - {data.end ?? "Current"}
      </h3>
      <p className="text-gray-200 mb-4">{data.description}</p>

      <div className="flex flex-col mb-4">
        <div>
          <span className="text-gray-400">Team:</span>{" "}
          <span className="text-gray-300">{data.team.size}</span>
        </div>
        <div>
          <span className="text-gray-400">Role:</span>{" "}
          <span className="text-gray-300">{data.team.role}</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-gray-400">Responsibilities:</span>
        <ul className="list-disc list-inside text-gray-300 ml-4">
          {data.responsilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <div className="text-gray-400 mb-2">
        Tech Stack:{" "}
        <span className="text-gray-300">{data.techStack.join(" - ")}</span>
      </div>

      <div>
        <span className="text-gray-400">GitHub:</span>
        <ul className="list-disc list-inside text-gray-300 ml-4">
          {data.githubs.map((github) => (
            <li key={github.label} className="flex items-center">
              <FaGithub className="text-blue-400 mr-2" />
              <a
                href={github.url}
                className="text-blue-400 hover:text-blue-500"
              >
                {github.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import { Navigation, Pagination } from "swiper/modules";
import { workExperiences } from "../data";
import { Product, WorkExperienceModel } from "../data/type";
import { Swiper, SwiperSlide } from "swiper/react";

export const WorkExperience = () => {
  return (
    <div id="experience" className="bg-black py-8">
      <h1 className="text-center text-3xl font-bold text-white mb-10">
        Work Experience
      </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        className="max-w-full mySwiper"
      >
        {workExperiences.map((workExperience, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <SingleWorkExperience data={workExperience} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface SingleWorkExperienceProps {
  data: WorkExperienceModel;
}

const SingleWorkExperience = ({ data }: SingleWorkExperienceProps) => {
  return (
    <div className="p-6 bg-gray-800 shadow-lg rounded-lg w-full flex flex-col">
      <h1 className="font-bold text-2xl text-yellow-500 mb-2">{data.title}</h1>
      <h2 className="font-semibold text-xl text-blue-400 mb-1">
        <a href={data.company.url} className="hover:underline">
          {data.company.name}
        </a>
      </h2>
      <h3 className="text-md text-gray-400 mb-4">
        {data.start} - {data.end ?? "Current"}
      </h3>
      <p className="text-gray-300 mb-4">{data.description}</p>

      <div className="mb-4">
        <h2 className="font-semibold text-white text-lg mb-2">Products:</h2>
        <ul className="space-y-2 list-disc list-inside">
          {data.products.map((product, index) => (
            <ProductCompany key={index} data={product} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-white text-lg mb-2">
          My Responsibilities:
        </h2>
        <ul className="text-gray-300">
          {data.responsilities.map((responsibility, index) => (
            <li key={index} className="mb-1">
              - {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-gray-200 font-medium">
        Tech stack:{" "}
        <span className="text-gray-400">{data.techStack.join(" - ")}</span>
      </div>
    </div>
  );
};

interface ProductCompanyProps {
  data: Product;
}

const ProductCompany = ({ data }: ProductCompanyProps) => {
  return (
    <li className="ml-4">
      <a href={data.url} className="text-blue-400 hover:underline">
        {data.name}
      </a>
      <p className="text-gray-400">{data.description}</p>
    </li>
  );
};

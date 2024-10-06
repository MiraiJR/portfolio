import { MdEmail } from "react-icons/md";
import { contactInformation, me } from "../data";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center space-y-6 p-8 bg-black rounded-lg shadow-xl transition-shadow duration-300"
    >
      <h1 className="text-3xl font-bold text-yellow-500 mb-4 text-center">
        Contact Me
      </h1>
      <div className="flex space-x-6">
        <a
          href={`mailto:${me.email}`}
          className="flex items-center bg-gray-800 p-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <MdEmail className="text-3xl text-blue-500" />
        </a>

        {contactInformation.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            className="flex items-center bg-gray-800 p-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <contact.app className="text-3xl text-blue-500" />
          </a>
        ))}
      </div>
      <p className="text-gray-300 text-center mt-2">
        I'm looking forward to hearing from you!
      </p>
    </div>
  );
};

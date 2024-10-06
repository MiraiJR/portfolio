import { motion } from "framer-motion";
import { contactInformation } from "../data";

export const Header = () => {
  const texts = ["Hello!", "I'm Trương Văn Hào", "I'm a Software Developer"];

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <motion.img
        className="w-1/3 h-auto rounded-lg shadow-lg transform transition-transform duration-300"
        src={`assets/developer.png`}
        alt="developer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <div className="flex flex-col gap-4">
        {texts.map((text, textIndex) => (
          <motion.div className="flex" key={textIndex}>
            {text.split("").map((letter, index) => (
              <motion.h2
                className="font-bold text-4xl text-white"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.h2>
            ))}
          </motion.div>
        ))}

        <motion.p
          className="text-lg text-gray-300 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: texts.join("").length * 0.1,
            duration: 0.2,
          }}
        >
          Welcome to my portfolio!
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: texts.join("").length * 0.1,
            duration: 0.2,
          }}
        >
          {contactInformation.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              className="flex items-center text-blue-500 hover:underline transition duration-200 ease-in-out transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.app className="text-3xl" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

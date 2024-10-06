import { motion } from "framer-motion";
import { techicalSkills } from "../data";

export const TechnicalSkill = () => {
  return (
    <div id="skills" className="flex flex-col gap-8 py-8">
      <motion.h1
        className="text-center font-bold text-3xl text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Can I Do?
      </motion.h1>

      <motion.h2
        className="text-center text-gray-300 max-w-3xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I am a quick learner and specialize in a multitude of skills required
        for Web Application Development, Database, and Backend Design.
      </motion.h2>

      <div className="bg-gray-900 rounded-lg py-8 flex justify-center flex-wrap gap-6">
        {techicalSkills.map((skill) => (
          <motion.img
            key={skill}
            src={`assets/${skill}-original.svg`}
            className="w-20 h-20"
            alt={skill}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </div>
    </div>
  );
};

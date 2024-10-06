import { academic } from "../data";

export const Academic = () => {
  return (
    <div
      id="academic"
      className="flex flex-col gap-6 p-6 bg-gray-800 text-white rounded-lg shadow-lg"
    >
      <h1 className="text-3xl font-bold text-yellow-400 border-b-2 border-yellow-400 pb-2">
        Education
      </h1>
      <div className="space-y-4">
        {/* Academic Period */}
        <div className="text-gray-400 text-lg">
          <span>
            {academic.yearStart} - {academic.yearEnd}
          </span>
        </div>

        {/* University Name */}
        <div className="font-bold text-2xl text-yellow-300">
          <span>{academic.university}</span>
        </div>

        {/* Major */}
        <div className="text-xl text-gray-200">
          <span>{academic.major}</span>
        </div>

        {/* GPA */}
        <div className="text-lg text-gray-100 font-semibold">
          <span>GPA: {academic.gpa}/10</span>
        </div>
      </div>
    </div>
  );
};

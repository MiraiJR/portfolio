import { me } from "../data";

export const AboutMe = () => {
  return (
    <div id="about" className="p-8 bg-black text-white rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left Section: Text Information */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-yellow-400">
              Hello! I'm {me.fullName}
            </h1>
            <p className="text-lg text-gray-300 mt-2">{me.description}</p>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="font-semibold text-yellow-300">Age:</span>{" "}
              {new Date().getFullYear() - me.dobYear}
            </div>
            <div>
              <span className="font-semibold text-yellow-300">Email:</span>{" "}
              {me.email}
            </div>
            <div>
              <span className="font-semibold text-yellow-300">Phone:</span>{" "}
              {me.phone}
            </div>
            <div>
              <span className="font-semibold text-yellow-300">Address:</span>{" "}
              {me.address}
            </div>
            <div>
              <span className="font-semibold text-yellow-300">
                Current Job:
              </span>{" "}
              {me.currentJob}
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/3">
          <img
            src="assets/me.jpg"
            alt="me"
            className="w-full rounded-xl shadow-lg border border-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

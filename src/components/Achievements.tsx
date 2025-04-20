
const Achievements = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Competitive Programming</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">•</span>
                <span>1100+ rating on CodeForces</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Solved 300+ problems on LeetCode and GeeksforGeeks</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-purple-600 mb-4">Technical Expertise</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                <span>Proficient in multiple programming languages and frameworks</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                <span>Strong foundation in Data Structures and Algorithms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

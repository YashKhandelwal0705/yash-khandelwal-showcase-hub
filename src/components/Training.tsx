
const Training = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">Training</h2>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Complete Machine Learning and Data Science Program</h3>
              <p className="text-indigo-600 font-semibold mt-1">GeeksforGeeks</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p className="text-gray-600 font-medium">Jun 2024 – Jul 2024</p>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span className="text-gray-700">Gained hands-on experience in data preprocessing, EDA, feature engineering, and predictive modeling using Python, Pandas, NumPy, and SQL</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 mt-1">•</span>
              <span className="text-gray-700">Built, evaluated, and optimized machine learning models (regression, classification, clustering) for practical business use cases</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Training;

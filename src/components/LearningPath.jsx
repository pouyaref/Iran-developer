import { FaCode, FaServer, FaDatabase, FaMobile, FaGraduationCap } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const LearningPath = () => {
  const paths = [
    {
      title: "مبتدی",
      description: "شروع با مفاهیم پایه وب",
      icon: <FaGraduationCap className="text-blue-500" />,
      steps: [
        { name: "HTML & CSS", icon: <FaCode className="text-orange-500" /> },
        { name: "JavaScript مقدماتی", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "طراحی ریسپانسیو", icon: <FaMobile className="text-green-500" /> }
      ],
      color: "bg-blue-50 dark:bg-blue-900/30"
    },
    {
      title: "متوسط",
      description: "یادگیری فریمورک‌های مدرن",
      icon: <SiReact className="text-blue-400" />,
      steps: [
        { name: "React.js", icon: <SiReact className="text-blue-500" /> },
        { name: "State Management", icon: <FaCode className="text-purple-500" /> },
        { name: "API Calls", icon: <FaServer className="text-gray-500" /> }
      ],
      color: "bg-purple-50 dark:bg-purple-900/30"
    },
    {
      title: "پیشرفته",
      description: "توسعه Full-Stack",
      icon: <SiNodedotjs className="text-green-500" />,
      steps: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <FaServer className="text-gray-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> }
      ],
      color: "bg-green-50 dark:bg-green-900/30"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            مسیر یادگیری <span className="text-blue-600">توسعه وب</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            از مبتدی تا حرفه‌ای شدن با بهترین مسیر آموزشی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div 
              key={index}
              className={`${path.color} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">
                    {path.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{path.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{path.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {path.steps.map((step, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-xl">{step.icon}</span>
                      <span className="font-medium text-gray-700 dark:text-gray-200">{step.name}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  شروع این مسیر
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">نقشه کامل یادگیری</h3>
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-200 dark:bg-blue-900 rounded-full"></div>
            <div className="ml-6 space-y-8">
              {[
                { 
                  title: "مقدمات وب", 
                  description: "HTML, CSS, JavaScript پایه",
                  duration: "4 هفته"
                },
                { 
                  title: "فرانت‌اند مدرن", 
                  description: "React, State Management, API Calls",
                  duration: "8 هفته"
                },
                { 
                  title: "بک‌اند", 
                  description: "Node.js, Express, Databases",
                  duration: "10 هفته"
                },
                { 
                  title: "پروژه‌های واقعی", 
                  description: "توسعه Full-Stack، تست‌نویسی، DevOps مقدماتی",
                  duration: "6 هفته"
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-8 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-100 dark:border-gray-800"></div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold text-lg text-gray-800 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
                    <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">{item.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
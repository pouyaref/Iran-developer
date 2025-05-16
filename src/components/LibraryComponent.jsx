import React, { useState } from 'react';

const LibrariesComponent = () => {
  const [activeTab, setActiveTab] = useState('javascript');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = {
    javascript: ['React', 'Angular', 'Vue', 'jQuery', 'Node.js', 'Express', 'D3.js', 'Three.js'],
    python: ['Django', 'Flask', 'FastAPI', 'NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'PyTorch'],
    java: ['Spring', 'Hibernate', 'Struts', 'JUnit', 'Mockito', 'JavaFX', 'Android SDK'],
    php: ['Laravel', 'Symfony', 'CodeIgniter', 'CakePHP', 'WordPress', 'Drupal'],
  };

  const filteredLibraries = categories[activeTab].filter(lib =>
    lib.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[#1D232A] text-white rounded-xl shadow-2xl">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-[#F0F6FC]">کتابخانه‌ها و فریمورک‌های برنامه‌نویسی</h2>
        <p className="text-[#8B949E] text-lg">منابع رایگان برای یادگیری و توسعه مهارت‌های شما</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {Object.keys(categories).map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === tab 
                ? 'bg-[#132247] shadow-lg shadow-[#238636]/30 text-white' 
                : 'bg-[#30363D] hover:bg-[#132247] hover:-translate-y-0.5 text-[#C9D1D9]'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="جستجو در کتابخانه‌ها..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pr-10 rounded-lg bg-[#30363D] border border-[#132247] focus:outline-none focus:ring-2 focus:ring-[#3FB950] text-[#C9D1D9] placeholder-[#484F58]"
        />
        <span className="absolute right-3 top-3 text-[#8B949E]">🔍</span>
      </div>

      {/* Libraries Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {filteredLibraries.map((library) => (
          <div key={library} className="bg-[#30363D] rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#238636]/30 border border-[#3FB950]/20">
            <div className="w-12 h-12 flex items-center justify-center bg-[#000272] rounded-full text-xl font-bold mb-4 text-white">
              {library.charAt(0).toUpperCase()}
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F0F6FC]">{library}</h3>
            <p className="text-[#8B949E] mb-4">آموزش رایگان و پروژه‌های عملی</p>
            <button className="w-full py-2 bg-[#1447E6] hover:bg-[##132247] rounded-lg transition-colors duration-300 text-white">
              شروع یادگیری
            </button>
          </div>
        ))}
      </div>

      {/* Courses Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center text-[#F0F6FC]">دوره‌های آموزشی رایگان</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1447E6] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-[#132247]/20">
            <h4 className="text-lg font-bold mb-2 text-[#F0F6FC]">آموزش جامع {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h4>
            <p className="text-[#8B949E] mb-4">از مبتدی تا پیشرفته - پروژه‌محور</p>
            <span className="inline-block px-3 py-1 bg-[#238636]/20 text-[#FFF] rounded-full text-sm">رایگان</span>
          </div>
          <div className="bg-[#1447E6] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-[#132247]/20">
            <h4 className="text-lg font-bold mb-2 text-[#F0F6FC]">کار با API در {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h4>
            <p className="text-[#8B949E] mb-4">یادگیری ساخت و مصرف API</p>
            <span className="inline-block px-3 py-1 bg-[#238636]/20 text-[#FFF] rounded-full text-sm">رایگان</span>
          </div>
          <div className="bg-[#1447E6] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300 border border-[#132247]/20">
            <h4 className="text-lg font-bold mb-2 text-[#F0F6FC]">تست نرم‌افزار در {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h4>
            <p className="text-[#8B949E] mb-4">آموزش تست‌نویسی حرفه‌ای</p>
            <span className="inline-block px-3 py-1 bg-[#238636]/20 text-[#FFF] rounded-full text-sm">رایگان</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrariesComponent;
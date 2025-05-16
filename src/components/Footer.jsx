import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiReact } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#1D232A] text-gray-300 pt-16 pb-8 px-4">
      {/* بخش اصلی فوتر */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* ستون ۱: درباره ما */}
        <div>
          <div className="flex items-center mb-4">
            <FaCode className="text-2xl text-purple-400 mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              آموزشگاه کد
            </span>
          </div>
          <p className="mb-4">
            مرجع تخصصی آموزش برنامه‌نویسی با بهترین متدهای روز دنیا
          </p>
          <div className="flex space-x-4 space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <FaGithub className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
              <FaYoutube className="text-xl mx-4 " />
            </a>
          </div>
        </div>

        {/* ستون ۲: لینک‌های سریع */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-purple-900 pb-2  ">
            لینک‌های سریع
          </h3>
          <ul className="space-y-3  ">
            {[' صفحه اصلی', ' دوره‌های رایگان', ' مقالات آموزشی', ' پروژه‌ها'].map((item) => (
              <li key={item}  >
        
                  <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                  {item}
             
              </li>
            ))}
          </ul>
        </div>

        {/* ستون ۳: تماس با ما */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-purple-900 pb-2">
            تماس با ما
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-purple-400 ml-2">✉️</span>
              info@amoozeshgah-code.ir
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 ml-2">📞</span>
              ۰۲۱-۱۲۳۴۵۶۷۸
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 ml-2">🏢</span>
              تهران، خیابان آزادی، دانشگاه شریف
            </li>
          </ul>
        </div>

        {/* ستون ۴: خبرنامه */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-purple-900 pb-2">
            عضویت در خبرنامه
          </h3>
          <p className="mb-4">
            جدیدترین آموزش‌ها را در ایمیل خود دریافت کنید
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="آدرس ایمیل" 
              className="bg-gray-700 text-white px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            />
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-l-lg text-white font-medium hover:opacity-90 transition-opacity">
              ارسال
            </button>
          </div>
        </div>
      </div>

      {/* بخش پایینی فوتر */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-gray-500 text-sm">
            ساخته شده با 
          </span>
          <SiReact className="text-purple-400 mx-2" />
          <SiTailwindcss className="text-blue-400" />
        </div>
        
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} آموزشگاه کد. تمام حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
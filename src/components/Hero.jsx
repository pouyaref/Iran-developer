import { motion, useAnimation } from 'framer-motion';
import { FaArrowLeft, FaLaptopCode, FaChartLine, FaUsers, FaBookOpen } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const statsControls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 }
      });
      statsControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, stagger: 0.2 }
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 md:py-32 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            className="lg:w-1/2 text-right space-y-8"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                جدیدترین دوره‌های ۱۴۰۳
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                <span className="text-blue-600">حرفه‌ای</span> برنامه‌نویسی یاد بگیرید
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 h-12 flex items-center justify-end">
                <Typewriter
                  options={{
                    strings: [
                      'آموزش‌های پروژه‌محور',
                      'راهنمایی توسط متخصصین',
                      'پشتیبانی دائمی',
                      'آماده بازار کار'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    cursor: '|'
                  }}
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg flex items-center gap-2 group"
              >
                <span className="relative z-10">شروع یادگیری رایگان</span>
                <FaArrowLeft className="relative z-10 rtl:rotate-180 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                مشاهده همه دوره‌ها
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={statsControls}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {[
                { icon: <FaUsers className="text-2xl" />, value: "+۱۲,۵۰۰", label: "دانشجو" },
                { icon: <FaBookOpen className="text-2xl" />, value: "+۱۵۰", label: "دوره" },
                { icon: <FaChartLine className="text-2xl" />, value: "۹۸٪", label: "رضایت" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsControls}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 text-center"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.8,
                delay: 0.2
              }
            }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-full max-w-xl">
              {/* Floating Code Cards */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute -top-8 -left-8 md:-left-16 w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 z-10"
              >
                <div className="text-xs md:text-sm font-mono text-gray-700 dark:text-gray-300">
                  <div className="text-blue-500">function</div>
                  <div className="text-purple-500">  greet</div>
                  <div className="text-gray-400">  // سلام به دنیا</div>
                </div>
              </motion.div>
              
              {/* Main Laptop */}
              <div className="relative bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-600 transform perspective-1000 rotate-x-5">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-t"></div>
                <FaLaptopCode className="text-7xl text-blue-600 mx-auto mb-6" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-200 dark:bg-blue-900 rounded w-1/2 mt-4"></div>
                </div>
              </div>
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
                className="absolute -bottom-8 -right-8 md:-right-16 w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600"
              >
                <div className="text-xs md:text-sm font-mono text-gray-700 dark:text-gray-300">
                  <div className="text-green-500">const</div>
                  <div className="text-yellow-500">  skills</div>
                  <div className="text-gray-400">  // مهارت‌های شما</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
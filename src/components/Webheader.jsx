import React, { useEffect, useState } from 'react';
import { Lightbulb, Code, Globe, Rocket } from 'lucide-react';
import image14 from "../assets/Image/72447547_9742055.png";

const features = [
  { icon: <Lightbulb size={36} className="text-yellow-500" />, title: 'UI/UX Design', bg: 'bg-blue-50' },
  { icon: <Code size={36} className="text-green-600" />, title: 'Front-End Dev', bg: 'bg-green-50' },
  { icon: <Rocket size={36} className="text-purple-600" />, title: 'Performance & SEO', bg: 'bg-purple-50' },
  { icon: <Globe size={36} className="text-orange-600" />, title: 'Responsive Design', bg: 'bg-orange-50' },
  { icon: <Code size={36} className="text-blue-600" />, title: 'Back-End Dev', bg: 'bg-blue-50' },
  { icon: <Rocket size={36} className="text-red-500" />, title: 'Speed Optimization', bg: 'bg-red-50' },
  { icon: <Globe size={36} className="text-teal-600" />, title: 'Domain & Hosting', bg: 'bg-teal-50' },
  { icon: <Lightbulb size={36} className="text-pink-500" />, title: 'Brand Strategy', bg: 'bg-pink-50' },
  { icon: <Code size={36} className="text-indigo-600" />, title: 'Custom Features', bg: 'bg-indigo-50' },
  { icon: <Rocket size={36} className="text-amber-500" />, title: 'Launch Support', bg: 'bg-amber-50' },
  { icon: <Globe size={36} className="text-cyan-600" />, title: 'Cross-browser Ready', bg: 'bg-cyan-50' },
  { icon: <Lightbulb size={36} className="text-lime-600" />, title: 'Creative Concepts', bg: 'bg-lime-50' },
];

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Webheader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = chunkArray(features, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white mt-32">
        {/* Left Section */}
        <div className="md:w-1/2 mb-10 md:mb-[100px] -mt-10">
          <h1 className="text-4xl font-semibold text-gray-600 leading-tight">
            Build Stunning <span className="text-blue-500">Web Experiences</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            We specialize in creating modern, high-performing websites that don’t just look amazing—they deliver results. From responsive designs to powerful back-end systems, we build experiences that keep users engaged.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Get a Demo
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right Monitor Section */}
        <div className="relative">
          <div className="border-4 border-gray-300 rounded-3xl p-6 bg-white overflow-hidden w-[320px] sm:w-[400px] md:w-[560px] h-[350px] transition-all duration-700 ease-in-out shadow-md">
            <div className="grid grid-cols-2 gap-4 transition-opacity duration-500 ease-in-out">
              {slides[currentSlide].map((item, index) => (
                <div
                  key={index}
                  className={`w-full h-24 sm:h-28 ${item.bg} rounded-xl flex flex-col items-center justify-center`}
                >
                  {item.icon}
                  <p className="mt-2 font-semibold text-center text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-24 h-6 bg-gray-400 rounded-b-xl mx-auto mt-2"></div>
        </div>
      </div>
{/* Become a Reseller Section */}
<div className="w-full bg-[#F1F5F9] py-12 px-6 md:px-20 rounded-xl shadow-md">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Left Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-orange-600 drop-shadow-sm">
        Become a Reseller
      </h2>
      <p className="text-base md:text-lg mb-6 text-gray-700 leading-relaxed">
        Start your own business with zero development hassle. Offer world-class web design and development services under your brand, powered by us.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 squared-xl shadow-md transition-all duration-300">
          🚀 Register Now
        </button>
        <button className="bg-green-600 border border-green-600 text-white  font-semibold px-6 py-3 squared-xl transition-all duration-300">
          💬 Talk to Us
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="md:w-1/2 flex justify-end">
  <img
    src={image14}
    alt="Reseller Opportunity"
    className="object-contain h-64 md:h-80 w-80 md:w-[400px] "
  />
</div>


  </div>
</div>


</div>

  );
};

export default Webheader;

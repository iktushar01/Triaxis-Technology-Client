import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRocket, FaShieldAlt, FaGraduationCap } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      id: 1,
      icon: <FaRocket className="text-white" />,
      headline: "Innovative Software, Tailored for Your Business",
      description:
        "From enterprise applications to custom software, TriAxis Technology delivers cutting-edge solutions designed to streamline your operations and boost productivity.",
      cta: "Learn More",
      bgImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-white" />,
      headline: "Empowering You with Next-Level Security",
      description:
        "Protect what matters most. Our cybersecurity services safeguard your data, infrastructure, and digital assets with proven strategies.",
      cta: "Explore Security Services",
      bgImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      icon: <FaGraduationCap className="text-white" />,
      headline: "Building Skills, Shaping Tomorrow",
      description:
        "Our expert-led training programs in software and security empower teams and individuals to thrive in the ever-evolving tech world.",
      cta: "View Training Programs",
      bgImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
    },
  ];

  return (
    <div className="w-full cursor-grab active:cursor-grabbing relative" style={{ height: '70vh' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <div 
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            >
              <div className="absolute inset-0 bg-black/60 " />
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
                <div className="mb-3 sm:mb-4 md:mb-6">
                  {React.cloneElement(slide.icon, { 
                    size: window.innerWidth < 640 ? 32 : 48 
                  })}
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-white px-2">
                  {slide.headline}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mb-3 sm:mb-4 md:mb-6">
                  {slide.description}
                </p>
                <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 text-sm sm:text-base">
                  👉 {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !left-1/2 !-translate-x-1/2 !bottom-2 sm:!bottom-4 !w-auto" />
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          display: flex;
          justify-content: center;
          position: absolute;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: #dc2626;
          opacity: 1;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 5px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaRocket, FaShieldAlt, FaGraduationCap } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
  {
    id: 1,
    icon: <FaRocket />,
    headline: "Innovative Software, Tailored for Your Business",
    description:
      "From enterprise applications to custom software, TriAxis Technology delivers cutting-edge solutions designed to streamline your operations and boost productivity.",
    cta: "Learn More",
    bgImg:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    headline: "Empowering You with Next-Level Security",
    description:
      "Protect what matters most. Our cybersecurity services safeguard your data, infrastructure, and digital assets with proven strategies.",
    cta: "Explore Security Services",
    bgImg:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    headline: "Building Skills, Shaping Tomorrow",
    description:
      "Our expert-led training programs in software and security empower teams and individuals to thrive in the ever-evolving tech world.",
    cta: "View Training Programs",
    bgImg:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    gradient: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
  },
];


  return (
    <div
      className="w-full cursor-grab active:cursor-grabbing relative group"
      style={{ height: "80vh" }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={1200}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            >
              <div
                className="absolute inset-0 opacity-80 transition-opacity duration-1000"
                style={{
                  background: slide.gradient,
                  backdropFilter: "blur(2px)",
                }}
              />
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center">
                <div className="mb-4 sm:mb-6 md:mb-8 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-500 group-hover:scale-110">
                  {React.cloneElement(slide.icon, {
                    size: window.innerWidth < 640 ? 32 : 48,
                    className: "text-white opacity-90",
                  })}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white px-2 leading-tight">
                  {slide.headline}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mb-5 sm:mb-6 md:mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <button className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  <span>{slide.cta}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !left-1/2 !-translate-x-1/2 !bottom-4 sm:!bottom-6 !w-auto" />
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          display: flex;
          justify-content: center;
          position: absolute;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.8);
          opacity: 0.6;
          width: 12px;
          height: 12px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
          border-radius: 6px;
        }
        .swiper-pagination-bullet-active {
          background: white;
          opacity: 1;
          width: 24px;
        }
        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
            margin: 0 8px !important;
          }
          .swiper-pagination-bullet-active {
            width: 32px;
          }
        }

        .swiper-slide-active h2 {
          animation: fadeInUp 0.8s ease forwards;
        }
        .swiper-slide-active p {
          animation: fadeInUp 0.8s ease 0.2s forwards;
        }
        .swiper-slide-active button {
          animation: fadeInUp 0.8s ease 0.4s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;

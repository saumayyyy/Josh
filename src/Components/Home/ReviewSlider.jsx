import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

import { reviewData } from "../../assets/reviewData";

const ReviewSlider = () => {
  const defaultIndex = Math.floor(reviewData.length / 2); 

  return (
    <div className="w-full mx-auto bg-slate-100 h-full pb-10 overflow-x-hidden">
      <div className="w-[90%] mx-auto h-full p-10">
        <div className="w-[50%] mx-auto text-center pt-16">
          <div className="text-4xl font-bold mb-6 text-gray-800">Recommendations</div>
          <div className="text-lg text-gray-500 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. lorem ipsum
          </div>
        </div>
        <div className="mt-20 bg-slate-100">
          <Swiper
            modules={[FreeMode, Pagination]}
            spaceBetween={20}
            slidesPerView={3.5} 
            centeredSlides={true} 
            initialSlide={defaultIndex} 
            pagination={{
              clickable: true,
              el: '.swiper-pagination', 
              renderBullet: (index, className) => {
                return `<span class="${className} bg-orange-500"></span>`; 
              },
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3.5, spaceBetween: 20 }, 
            }}
          >
            {reviewData.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="p-4 shadow-md border border-slate-200 bg-white text-center">
                  <div className="text-yellow-500">
                    {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
                  </div>
                  <p className="text-lg font-bold my-2">{review.review}</p>
                  <p className="text-gray-600 mb-4">{review.description}</p>
                  <div className="flex justify-center items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-4">
                      <p className="font-bold">{review.name}</p>
                      <p className="text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;

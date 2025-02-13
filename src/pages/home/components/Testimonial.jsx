import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../../../assets/data/testimonial";
import { useGetTestimonialsQuery } from "../../../app/api/public/testimonial";

const Testimonial = () => {
  const { data } = useGetTestimonialsQuery();
  return (
    <div className="w-full flex flex-col items-center gap-16 py-16 xl:px-desktop_padding md:px-laptop_padding sm:px-tablet_padding px-mobile_padding bg-gray-100">
      <div className="w-full max-w-6xl">
        <div className="mb-10">
          <h2 className="font-bold md:text-3xl text-xl text-center">
            Ils nous font confiance : leurs témoignages
          </h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="bg-gray-100 w-full"
          breakpoints={{
            900: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <>
            {testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="py-16">
                  <div className="flex relative rounded-3xl pt-16 px-6 pb-6 h-64 min-h-64 bg-white">
                    <div className="absolute inset-0 z-40 mx-auto -top-14 w-28 h-28 rounded-full">
                      <img
                        className="object-cover w-28 h-28 mb-2 rounded-full shadow border-4 border-white bg-gray-300"
                        src={item.avatarUrl}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex items-center justify-center absolute left-6 -top-5 bg-white rounded-full p-3">
                      <FaQuoteLeft className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex items-center justify-center absolute right-6 -bottom-5 bg-white rounded-full p-3">
                      <FaQuoteRight className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col gap-4 h-full justify-between">
                      <div>
                        <p className="text-center text-sm line-clamp-5">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col text-left">
                          <p className="text-lg font-medium">{item.name}</p>
                          <p className="text-sm text-gray-800">
                            {item.position}
                          </p>
                        </div>
                        <div className="flex gap-0 items-center">
                          {[...Array(item.note)].map((item) => (
                            <FaStar
                              key={item}
                              className="w-4 h-4 text-primary"
                            />
                          ))}
                          {[...Array(5 - item.note)].map((item) => (
                            <FaStar
                              key={item}
                              className="w-4 h-4 text-orange-500"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Update this line
import "swiper/css";
import "swiper/css/pagination";
const TestimonialSection = () => {
  return (
    <section
      id="testimonial" 
      className="bg-cover py-44 relative"
      style={{
        backgroundImage: "url('https://newpunepublicschool.com/images/bg-2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Testimonials
          </h2>
        </div>

        {/* Testimonial Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-slider"
        >
          {/* Single Testimonial */}
          <SwiperSlide>
            <div className="single-testimonial p-6 bg-white shadow-md rounded-lg text-center">
              <i className="fa fa-quote-left text-yellow-500 text-3xl mb-4"></i>
              <h4 className="text-lg font-bold mb-3">Akshay Jadhav</h4>
              <p className="text-gray-700">
                New Pune Public School has been a wonderful place for my child's
                education, offering a holistic learning experience that goes
                beyond academics, nurturing their overall growth.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-testimonial p-6 bg-white shadow-md rounded-lg text-center">
              <i className="fa fa-quote-left text-yellow-500 text-3xl mb-4"></i>
              <h4 className="text-lg font-bold mb-3">Dhanaji Mane</h4>
              <p className="text-gray-700">
                Choosing New Pune Public School for my child was the best
                decision I've made. The school's commitment to quality education
                and values-based learning is truly commendable.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-testimonial p-6 bg-white shadow-md rounded-lg text-center">
              <i className="fa fa-quote-left text-yellow-500 text-3xl mb-4"></i>
              <h4 className="text-lg font-bold mb-3">Gopal Pradhan</h4>
              <p className="text-gray-700">
                My child's journey at New Pune Public School has been
                exceptional. The school's dedicated staff and well-rounded
                curriculum have helped my child grow both academically and
                personally.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-testimonial px-4 py-12 bg-white shadow-md rounded-lg text-center">
              <i className="fa fa-quote-left text-yellow-500 text-3xl mb-4"></i>
              <h4 className="text-lg font-bold mb-3">Rekha Hans</h4>
              <p className="text-gray-700">
                New Pune Public School has provided my child with a strong
                educational foundation, fostering a love for learning and
                nurturing their potential.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;




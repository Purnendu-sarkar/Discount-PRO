import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
      "id": 1,
      "image": "https://i.ibb.co.com/713CGr4/photo-1607083206869-4c7672e72a8a-auto-format-fit-crop-w-2000-q-80.jpg",
      "title": "Exclusive Deals",
      "subtitle": "Save big on your favorite brands"
    },
    {
      "id": 2,
      "image": "https://i.ibb.co.com/xzLcvSD/photo-1607082348824-0a96f2a4b9da-auto-format-fit-crop-w-2000-q-80.jpg",
      "title": "Winter Collection",
      "subtitle": "Discover amazing discounts"
    },
    {
      "id": 3,
      "image": "https://i.ibb.co.com/b3zQ3vG/images-q-tbn-ANd9-Gc-Qcq-Xp8-C5c-9-PCHzc8n-B91vs-ISs19dvr5-H4-Q-s.png",
      "title": "Flash Sales",
      "subtitle": "Limited time offers"
    },
    {
      "id": 4,
      "image": "https://i.ibb.co.com/SwnfwWp/sizzling-hot-sale-beach-bash-get-ready-ultimate-summer-savings-our-dive-incredible-deals-against-bac.jpg",
      "title": "Summer Collection",
      "subtitle": "Sizzling hot deals for sunny days"
    },
    {
      "id": 5,
      "image": "https://i.ibb.co.com/pZjJKn8/Untitled-design-14-f9f63ac9e5.jpg",
      "title": "Holiday Special",
      "subtitle": "Celebrate the season with fantastic offers"
    }
  ];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
    return (
        <div className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
                {slide.title}
              </h1>
              <p className="text-xl" data-aos="fade-up" data-aos-delay="100">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    );
};

export default Slider;
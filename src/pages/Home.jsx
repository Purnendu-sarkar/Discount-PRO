import React from 'react';
import Slider from '../components/home/Slider';
import Marquee from 'react-fast-marquee';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const brands = useLoaderData()
    console.log(brands)
    return (
        <div className="min-h-screen">
        {/* Hero Section with Slider */}
          <Slider></Slider> 
          {/* Top Brands Section */}
          <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
            Top Brands
          </h2>
          <div className="w-full" data-aos="fade-up" data-aos-delay="100">
            <Marquee pauseOnHover gradient gradientWidth={50}>
              {brands.map((brand) => (
                <Link
                  key={brand._id}
                //   to={`/brand/${brand._id}`}
                  className="mx-8 gap-5 hover:opacity-75 transition-opacity"
                >
                  <img
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                    className="h-16 w-auto object-contain"
                  />
                </Link>
              ))}
            </Marquee>
          </div>
        </div>
      </section> 
        </div>
    );
};

export default Home;
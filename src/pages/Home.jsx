import React, { useEffect, useState } from 'react';
import Slider from '../components/home/Slider';
import Marquee from 'react-fast-marquee';
import { Link, useLoaderData } from 'react-router-dom';
import BrandCard from '../components/brands/BrandCard';

import StatsSection from '../components/home/StatsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const brands = useLoaderData();
    const [saleOnBrands, setSaleOnBrands] = useState(brands.filter(brand => brand.isSaleOn));

    useEffect(() => {
        if (brands && Array.isArray(brands)) {
            setSaleOnBrands(brands.filter(brand => brand.isSaleOn));
        }
    }, [brands]);

    

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Discount PRO | Home</title>
            </Helmet>
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
                                to={`/brand/${brand._id}`}
                                    key={brand._id}
                                    className="mx-8 gap-5 space-x-3 card p-1 hover:opacity-75 transition-opacity"
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

            {/* Brands on Sale Section */}
            <section className="py-16">
                <div className="container mx-auto bg-white px-4">
                    <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
                        Hot Deals 🔥
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
                        {saleOnBrands.map((brand) => (
                            <div key={brand._id} data-aos="fade-up" data-aos-delay="150">
                                <BrandCard brand={brand} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection></StatsSection>
            {/* Newsletter Section */}
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;

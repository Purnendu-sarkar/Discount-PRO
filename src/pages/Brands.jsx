import React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import BrandCard from "../components/brands/BrandCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Brands = () => {
  const brands = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrands = brands.filter(
    (brand) =>
      brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen py-12">
      <Helmet>
        <title>Discount PRO | Brands</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
          Explore Brands
        </h1>

        {/* Search Bar */}
        <div
          className="max-w-xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search brands or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBrands.map((brand) => (
            <div key={brand._id} data-aos="fade-up" data-aos-delay="150">
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBrands.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No brands found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;

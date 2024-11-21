import React, { useState } from "react";
import { useParams, Link, useLoaderData } from "react-router-dom";
import { Star, ExternalLink, Copy, Check } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const BrandDetails = () => {
  const { id } = useParams();
  const brands = useLoaderData();
  const [copiedCode, setCopiedCode] = useState(null);

  const brand = brands.find((b) => b._id === id);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Brand not found</h2>
          <Link to="/brands" className="mt-4 btn-primary inline-block">
            Back to Brands
          </Link>
        </div>
      </div>
    );
  }

  const handleCopy = (code) => {
    setCopiedCode(code);
    toast.success("Coupon code copied!");
    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-12">
      <Helmet>
        <title>Discount PRO | Discount</title>
      </Helmet>
      <div className="container mx-auto px-4">
        {/* Brand Header */}
        <div
          className="bg-white rounded-lg shadow-md p-8 mb-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-3xl font-bold">{brand.brand_name}</h1>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-gray-600">{brand.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{brand.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-500">
                  Category: {brand.category}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  Available Coupons: {brand.coupons.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brand.coupons.map((coupon) => (
            <div
              key={coupon.coupon_code}
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {coupon.description}
                  </h3>
                  <p className="text-sm text-gray-500">{coupon.condition}</p>
                </div>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-sm rounded">
                  {coupon.coupon_type}
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-500">
                    Expires: {coupon.expiry_date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <CopyToClipboard
                    text={coupon.coupon_code}
                    onCopy={() => handleCopy(coupon.coupon_code)}
                  >
                    <button className="btn-secondary flex items-center gap-1">
                      {copiedCode === coupon.coupon_code ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy Code
                        </>
                      )}
                    </button>
                  </CopyToClipboard>
                  <a
                    href={brand.shop_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Use Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;

import React from 'react';
import { Star, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    return (
        <div className="card group border-2 p-2">
            <div className="relative aspect-video">
                <img
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                    className="w-full rounded-lg object-cover"
                />
                {brand.isSaleOn && (
                    <div className="absolute top-4 right-4">
                        <span className="animate-bounce-subtle inline-block px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">
                            Sale On!
                        </span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{brand.brand_name}</h3>
                    <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-gray-600">{brand.rating}</span>
                    </div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{brand.description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                        <Tag className="h-5 w-5 mr-1" />
                        <span>{brand.coupons.length} coupons</span>
                    </div>
                    <Link
                        to={`/brand/${brand._id}`}
                        className="btn-primary inline-flex items-center"
                    >
                        View Coupons
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;
